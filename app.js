// app.js

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postsRoute from "./routes/posts.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(bodyParser.json());

// Middleware
app.use(cors());
// app.use("/posts", () => {
//   console.log("This is a middleware running");
// });

// Use the posts router for the /posts route
app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
  res.send("This is home");
});

// Connect to DB
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
