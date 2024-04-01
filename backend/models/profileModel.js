import mongoose, { Schema } from "mongoose";

const profileSchema = mongoose.Schema({
  CompanyName: {
    type: "string",
  },
  profilePicture: {
    type: "string",
    default:
      "https://unsplash.com/photos/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA",
  },
  about: {
    type: "string",
    default: "",
  },
  current_position: {
    type: "string",
    default: "",
  },
  languages: [
    {
      type: String,
      required: true,
    },
  ],
  education: [
    {
      type: String,
      required: true,
    },
  ],
  experience: [
    {
      type: String,
      required: true,
    },
  ],
  skills: [
    {
      type: String,
      required: true,
    },
  ],
  hourlyRate: {
    type: "number",
    default: 0,
  },
  proposals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Proposal",
    },
  ],
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

export const Profile = mongoose.model("Profile", profileSchema);
