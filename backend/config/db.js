import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({
  path: "../config/.env",
});
const connectToDB = () => {
  mongoose
    .connect(
      process.env.MONGO_URI.replace("<password>", process.env.MONGO_PASSWORD)
    )
    .then(() => {
      console.log("Connected to mongoDB");
    })
    .catch((error) => {
      console.log("MongoDB connection error");
      console.log(error);
    });
};
export default connectToDB;
