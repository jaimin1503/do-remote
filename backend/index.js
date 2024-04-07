import express from "express";
import cookieParser from "cookie-parser";
import connect from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import proposalRoutes from "./routes/proposalRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import cloudinaryConnect from "./utils/cloudinary.js";
import clientRoutes from "./routes/clientRoutes.js";

connect();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);
cloudinaryConnect();

app.use("/user", userRoutes);
app.use("/job", jobRoutes);
app.use("/proposal", proposalRoutes);
app.use("/profile", profileRoutes);
app.use("/client", clientRoutes);

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
