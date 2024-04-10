import express from "express";
const router = express.Router();
import { auth } from "../middlewares/auth.js";

import {
  getRandomUsers,
  getRandomUsersWithProfile,
} from "../controllers/clientController.js";

router.get("/randomUsers", auth, getRandomUsers);
router.get("/randomUsersWithProfile", auth, getRandomUsersWithProfile);

export default router;
