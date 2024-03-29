import express from "express";
import cookieParser from "cookie-parser";
import connect from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import proposalRoutes from "./routes/proposalRoutes.js";
import cors from "cors";

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

app.use("api/user", userRoutes);
app.use("api/job", jobRoutes);
app.use("api/proposal", proposalRoutes);

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (res) => {
  res.send("Hello World!");
});
