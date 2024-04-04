import { User } from "../models/user.js";
import { Profile } from "../models/profileModel.js";
import OTP from "../models/otpModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import otpGenerator from "otp-generator";
dotenv.config();

export const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      username,
      location,
      role,
      otp,
    } = req.body;
    if (!firstName || !lastName || !email || !password || !username || !role) {
      res.status(400).json({
        success: false,
        message: `please fill all the details`,
      });
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "please provide a valid email ",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "your password is to short please provide at least 6 charcter password ",
      });
    }
    const userexist = await User.findOne({ email });

    if (userexist) {
      return res.status(400).json({
        success: false,
        message: `user with this email already exist please login`,
      });
    }
    const otpverify = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    // console.log("otp of db", otpverify);
    if (otpverify[0].otp !== otp) {
      return res.status(401).json({
        success: false,
        message: "otp is invalide please try again",
      });
    }
    let hashedpassword;
    try {
      hashedpassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: `error occurred while hashing password and error is ${error}`,
      });
    }

    let profile;

    try {
      profile = await Profile.create({
        hourlyRate: "5",
        proposals: [],
        jobs: [],
      });
    } catch (error) {
      console.error("Error occurred while creating profile:", error);
      return res.status(400).json({
        success: false,
        message: `Error occurred while creating profile.`,
      });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      username,
      password: hashedpassword,
      location,
      profile,
      role,
    });

    user.password = undefined;
    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      return res.status(400).json({
        success: false,
        message: `Email is already in use. Please use a different email.`,
      });
    } else if (
      error.code === 11000 &&
      error.keyPattern &&
      error.keyPattern.username
    ) {
      return res.status(400).json({
        success: false,
        message: `Username is already taken. Please choose another username.`,
      });
    } else {
      console.error("Unexpected error occurred:", error);
      return res.status(400).json({
        success: false,
        message: `Something went wrong while signing up. and error is ${err}`,
      });
    }
  }
};

export const sendotp = async (req, res) => {
  try {
    // console.log("inside send otp controller");
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        success: false,
        message: `User is already registered`,
      });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    // console.log("otp generated ", otp);
    const otpBOdy = await OTP.create({
      email,
      otp,
    });
    return res.status(200).json({
      success: true,
      message: "otp sent successfully",
      OTP: otp,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `somthing went wrong while sending otp and error is ${error}`,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both username or email and password",
      });
    }

    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist. Please check Username or Email",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password. Please try again.",
      });
    }

    const payload = {
      _id: user._id,
      email: user.email,
      username: user.username,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    user.token = token;
    user.password = undefined;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    // Set token in a cookie
    res.cookie("token", token, options);

    // Set the token in the "Authorization" header (optional)
    res.set("Authorization", `Bearer ${token}`);

    return res.status(200).json({
      success: true,
      token,
      user,
      message: "User logged in successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong while logging in: ${error.message}`,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("profile");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong while fetching user profile: ${error.message}`,
    });
  }
};

export const updateUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const { firstName, lastName, email, username, location } = req.body;
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;
    if (username) user.username = username;
    if (location) user.location = location;
    await user.save();
    return res.status(200).json({
      success: true,
      message: "User profile updated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong while updating user profile: ${error.message}`,
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Please provide email",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const otpBody = await OTP.create({
      email,
      otp,
    });
    return res.status(200).json({
      success: true,
      message: "otp sent successfully",
      OTP: otp,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong while sending otp: ${error.message}`,
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, otp, password } = req.body;
    if (!email || !otp || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email, otp and new password",
      });
    }
    const otpverify = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    if (otpverify[0].otp !== otp) {
      return res.status(401).json({
        success: false,
        message: "otp is invalide please try again",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    user.password = hashedpassword;
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong while resetting password: ${error.message}`,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong while deleting user: ${error.message}`,
    });
  }
};

export const getUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).populate("profile");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Something went wrong while fetching user: ${error.message}`,
    });
  }
};
