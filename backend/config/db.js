import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db Connected");
  } catch (error) {
    console.log(`Failed to connect ${error}  : did not connect`);
  }
};

export { connectDB };
