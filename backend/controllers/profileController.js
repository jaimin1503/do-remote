import { Profile } from "../models/profileModel.js";
import uploadImageToCloudinary from "../utils/imageUploader.js";

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
    return res.status(200).json({
      success: true,
      message: `Image Updated successfully`,
      data: updatedProfile,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
};

export const editInfo = async (req, res) => {
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
