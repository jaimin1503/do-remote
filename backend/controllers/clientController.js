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
