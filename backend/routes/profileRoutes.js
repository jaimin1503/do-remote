import express from "express";
const router = express.Router();
import { auth } from "../middlewares/auth.js";

import {
  editProfilePicture,
  editInfo,
  editRate,
  editSkills,
  editLanguages,
  editEducation,
} from "../controllers/profileController.js";

router.put("/editProfilePicture/:id", auth, editProfilePicture);
router.put("/editInfo/:id", auth, editInfo);
router.put("/editSkills/:id", auth, editSkills);
router.put("/editRate/:id", auth, editRate);
router.put("/editLanguages/:id", auth, editLanguages);
router.put("/editEducation/:id", auth, editEducation);

export default router;
