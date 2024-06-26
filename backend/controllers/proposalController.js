import { Proposal } from "../models/proposalModel.js";
import { User } from "../models/user.js";
import { Job } from "../models/job.js";
import uploadImageToCloudinary from "../utils/imageUploader.js";

export const getAllProposals = async (req, res) => {
  try {
    // Find all proposals from Jobs where clientId is equal to req.user._id and populate the job and freelancer fields
    // Also populate freelancer's profile
    if (req.user.role === "client") {
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
      return res.status(200).json({ proposals });
    } else if (req.user.role === "freelancer") {
      const proposals = await Proposal.find({
        freelancer: req.user._id,
      }).populate([
        {
          path: "job",
          populate: { path: "client" },
        },
        {
          path: "freelancer",
          populate: { path: "profile" },
        },
      ]);
      return res.status(200).json({ proposals });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const createProposal = async (req, res) => {
  const freelancer = req.user._id;
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

    const image = await uploadImageToCloudinary(req.files.attachments);

    const newProposal = new Proposal({
      job: req.body.job,
      coverLetter: req.body.coverLetter,
      bidAmount: req.body.bidAmount,
      deliveryTime: req.body.deliveryTime,
      freelancer: freelancer,
      attachments: image?.secure_url,
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

export const getProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const proposal = await Proposal.findById(id).populate([
      {
        path: "job",
        populate: { path: "client" },
      },
      {
        path: "freelancer",
        populate: { path: "profile" },
      },
    ]);
    if (!proposal) {
      return res.status(404).json({ message: "Proposal Not Found" });
    }
    res.status(200).json({ proposal });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const editProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const proposal = await Proposal.findById(id);
    if (!proposal) {
      return res.status(404).json({ message: "Proposal Not Found" });
    }
    if (req.body.coverLetter) {
      proposal.coverLetter = req.body.coverLetter;
    }
    if (req.body.bidAmount) {
      proposal.bidAmount = req.body.bidAmount;
    }
    if (req.body.deliveryTime) {
      proposal.deliveryTime = req.body.deliveryTime;
    }
    const updatedProposal = await proposal.save();
    res
      .status(200)
      .json({ message: "Proposal updated successfully", updatedProposal });
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
    const proposal = await Proposal.findById(id)
      .populate("job")
      .populate("freelancer");
    if (proposal) {
      await Job.findByIdAndUpdate(
        proposal?.job?._id,
        { $push: { freeLancer: proposal?.freelancer._id } },
        { status: "active" },
        { new: true }
      );
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

export const isProposalSent = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Job Not Found" });
    }
    if (job.freeLancer.toString() === req.user._id.toString()) {
      return res.status(200).json({
        message: "Already sent proposal",
        data: true,
      });
    } else {
      return res.status(400).json({ message: "Not sent", data: false });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
};
