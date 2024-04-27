import express from "express";
const router = express.Router();
import { auth } from "../middlewares/auth.js";

import {
  getRandomUsers,
  getRandomUsersWithProfile,
  saveProfile,
  isProfileSaved,
  getSavedProfiles,
} from "../controllers/clientController.js";

router.get("/randomUsers", auth, getRandomUsers);
router.get("/randomUsersWithProfile", auth, getRandomUsersWithProfile);
router.post("/saveProfile/:id", auth, saveProfile);
router.get("/isProfileSaved/:id", auth, isProfileSaved);
router.get("/getSavedProfiles", auth, getSavedProfiles);

export default router;
