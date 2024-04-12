import { Proposal } from "../models/proposalModel.js";
import { User } from "../models/user.js";
import { Job } from "../models/job.js";
import { uploadImagesToCloudinary } from "../utils/imageUploader.js";

export const getAllProposals = async (req, res) => {
  try {
    // Find all proposals from Jobs where clientId is equal to req.user._id and populate the job and freelancer fields
    // Also populate freelancer's profile

    const proposals = await Proposal.find({ client: req.user._id }).populate([
      {
        path: "job",
        populate: { path: "client" },
      },
      {
        path: "freelancer",
        populate: { path: "profile" },
      },
    ]);
    res.status(200).json({ proposals });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const createProposal = async (req, res) => {
  const freelancer = req.user._id;
  const attachments = req.files;
  try {
    if (
      !req.body.job ||
      !req.body.coverLetter ||
      !req.body.bidAmount ||
      !req.body.deliveryTime ||
      !req.body.client
    ) {
      return res.status(400).send({
        message: "Please fill all the required details",
      });
    }

    const urls = [];
    if (attachments && attachments.length > 0) {
      const images = await uploadImagesToCloudinary(
        attachments,
        process.env.FOLDER_NAME
      );
      images.forEach((image) => {
        urls.push(image.secure_url);
      });
    }

    const newProposal = new Proposal({
      job: req.body.job,
      coverLetter: req.body.coverLetter,
      bidAmount: req.body.bidAmount,
      deliveryTime: req.body.deliveryTime,
      freelancer: freelancer,
      attachments: urls,
      client: req.body.client,
    });

    const savedProposal = await newProposal.save();

    const job = await Job.findOne({ _id: req.body.job });
    if (!job) {
      return res.status(404).json({ message: "Job Not Found" });
    }
    job.proposals.push(savedProposal._id);
    await job.save();

    const user = await User.findOne({ _id: freelancer });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    user.proposals.push(savedProposal._id);
    await user.save();

    res.status(201).json({
      message: "Proposal created successfully",
      savedProposal,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const editProposal = async (req, res) => {
  try {
    if (
      !req.body.jobId ||
      !req.body.freelancerId ||
      !req.body.coverLetter ||
      !req.body.bidAmount ||
      !req.body.deliveryTime
    ) {
      return res.status(400).send({
        message: "Please fill all the required details",
      });
    }
    const { id } = req.params;

    const result = await Proposal.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Proposal Not Found" });
    }

    return res.status(200).send({ message: "Proposal Updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const withdarawProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Proposal.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Proposal Not Found" });
    }
    return res.status(200).send({ message: "Proposal deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const acceptProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Proposal.findByIdAndUpdate(id, { status: "accepted" });
    if (!result) {
      return res.status(404).json({ message: "Proposal Not Found" });
    }
    return res.status(200).send({ message: "Proposal accepted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const rejectProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Proposal.findByIdAndUpdate(id, { status: "rejected" });
    if (!result) {
      return res.status(404).json({ message: "Proposal Not Found" });
    }
    return res.status(200).send({ message: "Proposal rejected successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
