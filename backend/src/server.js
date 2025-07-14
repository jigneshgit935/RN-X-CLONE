import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
const app = express();

app.get("/", (req, res) => res.send("Hello from jignesh"));

connectDB()

app.listen(ENV.PORT, () => {
  console.log(`Server started at ${ENV.PORT}`);
});
