import dotenv from "dotenv";
import express from "express";
import connectToDB from "./config/db.js";

const app = express();
dotenv.config({
  path: ".env",
});
connectToDB();
app.listen(process.env.PORT, () => {
  console.log(`Server listen at port ${process.env.PORT}`);
});
