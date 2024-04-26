import { User } from "../models/user.js";
import { Profile } from "../models/profileModel.js";

export const getRandomUsers = async (req, res) => {
  try {
    const users = await User.find().limit(5).populate("profile");
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
    const index = profile.savedProfiles.indexOf(id);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    if (index !== -1) {
      profile.savedProfiles.splice(index, 1);
      await profile.save();
      return res.status(200).send({ message: "profile unsaved successfully" });
    }

    // If job is not saved, save it
    profile.savedProfiles.push(id);
    await user.save();

    res.status(201).send({ message: "User's profile saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
