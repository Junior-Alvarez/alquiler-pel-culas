import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(`error: ${error}`);
        process.exit(1);
    }
};

export default connectDB;