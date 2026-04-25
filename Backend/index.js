import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";



dotenv.config();

// middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello Mohit!');
});

// routes
app.use("/user", userRoute);
app.use("/api/message",messageRoute);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});