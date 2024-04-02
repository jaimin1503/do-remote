import { Profile } from "../models/profileModel.js";

export const editPofilePicture = async () => {
  try {
    const pId = req.params.id;
    const url = req.body;
    const newProfile = await Profile.findByIdAndUpdate(pId, {
      profilePicture: url,
    });
    res.status(201).json({
      newProfile,
      message: "Profile picture updated",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const editInfo = async () => {
  try {
    const pId = req.params.id;
    const { current_position, about, skills } = req.body;
    const newProfile = await Profile.findByIdAndUpdate(pId, {
      current_position,
      about,
      skills,
    });
    res.status(201).json({
      message: "Profile updated",
      success: true,
      newProfile,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const editSpecs = async () => {
  try {
    const pId = req.params.id;
    const { hourlyRate, languages, education, linkedAccounts } = req.body;
    const newProfile = await Profile.findByIdAndUpdate(pId, {
      hourlyRate,
      languages,
      education,
      linkedAccounts,
    });
    res.status(201).json({
      message: "Profile updated",
      success: true,
      newProfile,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};
