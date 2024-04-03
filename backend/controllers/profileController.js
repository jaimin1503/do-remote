import { Profile } from "../models/profileModel.js";
import uploadImageToCloudinary from "../utils/imageUploader.js";
import { User } from "../models/user.js";

export const editProfilePicture = async (req, res) => {
  try {
    const displayPicture = req.files.displayPicture;
    const pId = req.params.id;
    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME
    );
    console.log(image);
    const updatedProfile = await Profile.findByIdAndUpdate(
      pId,
      { profilePicture: image.secure_url },
      { new: true }
    );
    console.log("updatedProfile", updatedProfile);
    const updatedUser = await User.findOne({ profile: pId }).populate(
      "profile"
    );
    return res.status(200).json({
      success: true,
      message: `Image Updated successfully`,
      data: updatedUser,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
};

export const editInfo = async (req, res) => {
  try {
    const pId = req.params.id;
    const { current_position, about } = req.body;
    const newProfile = await Profile.findByIdAndUpdate(pId, {
      current_position,
      about,
    });
    const updatedUser = await User.findOne({ profile: pId }).populate(
      "profile"
    );
    res.status(201).json({
      message: "Profile updated",
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const editSkills = async (req, res) => {
  try {
    const pId = req.params.id;
    const { skills } = req.body;
    const newProfile = await Profile.findByIdAndUpdate(pId, {
      skills,
    });
    const updatedUser = await User.findOne({ profile: pId }).populate(
      "profile"
    );
    res.status(201).json({
      message: "Profile updated",
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const editSpecs = async (req, res) => {
  try {
    const pId = req.params.id;
    const { hourlyRate, languages, education, linkedAccounts } = req.body;
    const newProfile = await Profile.findByIdAndUpdate(pId, {
      hourlyRate,
      languages,
      education,
      linkedAccounts,
    });
    const updatedUser = await User.findOne({ profile: pId }).populate(
      "profile"
    );
    res.status(201).json({
      message: "Profile updated",
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};
