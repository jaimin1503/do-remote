import express from "express";
import { auth } from "../middlewares/auth.js";
import {
  getUser,
  login,
  logout,
  sendotp,
  signup,
  updateUserInfo,
  forgotPassword,
  resetPassword,
  deleteUser,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/sendotp", sendotp);
router.post("/logout", logout);
router.get("/getUser", auth, getUser);
router.put("/updateUserInfo", auth, updateUserInfo);
router.post("/forgotPassword", auth, forgotPassword);
router.put("/resetPassword", auth, resetPassword);
router.delete("/deleteUser", auth, deleteUser);

export default router;