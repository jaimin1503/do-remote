import { User } from "../models/user.js";
import { Profile } from "../models/profileModel.js";

export const getRandomUsers = async (req, res) => {
  try {
    const users = await User.find({
      role: "freelancer",
    })
      .limit(5)
      .populate("profile");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRandomUsersWithProfile = async (req, res) => {
  try {
    const users = await User.aggregate([
      { $sample: { size: 5 } },
      {
        $lookup: {
          from: "profiles",
          localField: "_id",
          foreignField: "userId",
          as: "profile",
        },
      },
      { $unwind: "$profile" },
      { $project: { _id: 1, name: 1, email: 1, profile: 1 } },
    ]);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id).populate("profile");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const profile = await Profile.findOne(user.profile._id);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    if (user) {
      let newProfile;
      if (profile.savedProfiles.includes(id)) {
        newProfile = await Profile.findOneAndUpdate(
          user.profile._id,
          { $pull: { savedProfiles: id } },
          { new: true }
        );
        return res.json({
          message: "Profile removed from saved profiles",
          profile: newProfile,
        });
      } else {
        newProfile = await Profile.findOneAndUpdate(
          user.profile._id,
          { $push: { savedProfiles: id } },
          { new: true }
        );
        return res.json({
          message: "Profile added to saved profiles",
          profile: newProfile,
        });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const isProfileSaved = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id).populate("profile");

    if (user.profile.savedProfiles.includes(id)) {
      return res.json({ saved: true });
    }

    return res.json({ saved: false });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSavedProfiles = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("profile");
    const profile = await Profile.findById(user.profile._id).populate({
      path: "savedProfiles",
      populate: {
        path: "profile",
      },
    });
    res.json(profile.savedProfiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
