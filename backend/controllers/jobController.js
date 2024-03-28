import Job from "../models/job.js";

export const getAllJobs = async () => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = 5;

    const skip = (page - 1) * perPage;

    // Use your custom "Post" model to query the database.
    const jobs = await Job.find({}).skip(skip).limit(perPage);

    res.status(200).json({
      page: page,
      perPage: perPage,
      totalJobs: await Job.countDocuments(),
      data: jobs,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getJob = async () => {
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
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.category ||
      !req.body.budget ||
      !req.body.skillsRequired ||
      !req.body.deadline
    ) {
      return res.status(400).send({
        message: "Please fill all the required details",
      });
    }
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json({
      data: savedJob,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const editJob = async () => {
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

export const deleteJob = async () => {
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

