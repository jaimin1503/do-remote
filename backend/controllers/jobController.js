import { Job } from "../models/job.js";
import { User } from "../models/user.js";

export const getAllJobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = 5;

    const skip = (page - 1) * perPage;
    const jobs = await Job.find({
      status: "open",
    })
      .skip(skip)
      .limit(perPage)
      .populate("client");

    res.status(200).json({
      page: page,
      perPage: perPage,
      totalJobs: await Job.countDocuments(),
      jobs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    res.status(201).json({
      data: job,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const createJob = async (req, res) => {
  try {
    const { title, description, category, budget, skillsRequired } = req.body;

    if (!title || !description || !category || !budget || !skillsRequired) {
      return res.status(400).send({
        message: "Please fill all the required details",
      });
    }

    const newJob = new Job({
      title,
      description,
      category,
      budget,
      skillsRequired,
      client: req.user._id,
    });

    // Save the job to the database
    const savedJob = await newJob.save();

    // Update the user document with the new job ID
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { jobs: savedJob._id } }, // Push the job ID to the user's jobs array
      { new: true }
    );

    res.status(201).json({
      data: savedJob,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const editJob = async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.category ||
      !req.body.budget ||
      !req.body.skillsRequired ||
      !req.body.deadline
    ) {
      return res.status(400).send({
        message: "please fill all the required details",
      });
    }
    const { id } = req.params;

    const result = await Post.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Post Not Found" });
    }

    return res.status(200).send({ message: "Post Updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Post.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Post Not Found" });
    }

    return res.status(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getSavedJobs = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("savedJobs");
    res.status(200).json({
      data: user.savedJobs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const saveJob = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const index = user.savedJobs.indexOf(id);

    if (index !== -1) {
      // If job is already saved, unsave it
      user.savedJobs.splice(index, 1);
      await user.save();
      return res.status(200).send({ message: "Job unsaved successfully" });
    }

    // If job is not saved, save it
    user.savedJobs.push(id);
    await user.save();

    res.status(201).send({ message: "Job saved successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const isJobSaved = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id);

    if (user.savedJobs.includes(id)) {
      return res.status(200).send({ saved: true });
    }

    return res.status(200).send({ saved: false });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const searchJobs = async (req, res) => {
  try {
    const { query } = req.query;

    // Perform search query
    const jobs = await Job.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { skillsRequired: { $regex: query, $options: "i" } },
      ],
    });

    res.status(200).json({
      data: jobs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};
