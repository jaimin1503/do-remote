import { v2 as cloudinaryV2 } from "cloudinary";
import e from "express";

const uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = { folder };
  if (height) {
    options.height = height;
  }
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";

  return await cloudinaryV2.uploader.upload(file.tempFilePath, options);
};

export default uploadImageToCloudinary;
