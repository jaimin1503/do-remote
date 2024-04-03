import mongoose, { Schema } from "mongoose";

const educationSchema = mongoose.Schema({
  school: {
    type: "string",
    required: true,
  },
  degree: {
    type: "string",
    required: true,
  },
});

const skillSchema = mongoose.Schema({
  name: {
    type: "string",
  },
  value: {
    type: "string",
  },
});

const socialSchema = mongoose.Schema({
  linkedin: {
    type: "string",
  },
  github: {
    type: "string",
  },
  stackoverflow: {
    type: "string",
  },
});

const profileSchema = mongoose.Schema({
  CompanyName: {
    type: "string",
  },
  profilePicture: {
    type: "string",
    default: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
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
  education: [educationSchema],
  linkedAccounts: socialSchema,
  skills: [skillSchema],
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
