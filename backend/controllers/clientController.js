import { User } from "../models/user.js";

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
    const userId = req.user._id;

    const user = await User.findById(userId).populate("profile");
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.profile.savedProfiles.includes(id)) {
      return res.status(400).json({ message: "Profile already saved" });
    }

    // If the profile doesn't exist in savedProfiles, add it
    user.profile.savedProfiles.push(id);
    await user.save();

    res.json({ message: "Profile saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
