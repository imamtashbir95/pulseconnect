import mongoose from "mongoose";

let isConnected = false; // Track connection status

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("MongoDB is already connected.");
        return;
    }

    console.log("MongoDB URL:", process.env.MONGODB_URL); // Debug log for the MongoDB URL

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "PulseConnect",
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        isConnected = true;

        console.log("MongoDB is connected.");
    }
    catch (error) {
        console.log(error);
    }
};