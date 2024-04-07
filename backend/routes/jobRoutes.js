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
  searchJobs
} from "../controllers/jobController.js";
const router = express.Router();

router.post("/createjob", auth, createJob);
router.get("/getalljobs", auth, getAllJobs);
router.get("/getjob/:id", auth, getJob);
router.put("/editjob/:id", auth, editJob);
router.delete("/deletejob/:id", auth, deleteJob);
router.get("/getsavedjobs", auth, getSavedJobs);
router.put("/savejob/:id", auth, saveJob);
router.get("/isjobsaved/:id", auth, isJobSaved);
router.get("/searchjobs", auth, searchJobs);

export default router;
