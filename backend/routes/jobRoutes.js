import express from "express";
import { auth } from "../middlewares/auth.js";
import {
  deleteJob,
  editJob,
  getAllJobs,
  getJob,
  createJob,
  getSavedJobs,
  saveJob,
  isJobSaved,
  searchJobs,
  getAllJobsC,
  getActiveJobs,
  getJobs,
} from "../controllers/jobController.js";
const router = express.Router();

router.post("/postjob", auth, createJob);
router.get("/getJobs", auth, getJobs);
router.get("/getalljobs", auth, getAllJobs);
router.get("/getalljobsc", auth, getAllJobsC);
router.get("/getjob/:id", auth, getJob);
router.put("/editjob/:id", auth, editJob);
router.delete("/deletejob/:id", auth, deleteJob);
router.get("/getsavedjobs", auth, getSavedJobs);
router.put("/savejob/:id", auth, saveJob);
router.get("/isjobsaved/:id", auth, isJobSaved);
router.get("/searchjobs", auth, searchJobs);
router.get("/getActiveJobs", auth, getActiveJobs);

export default router;
