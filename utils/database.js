const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;

let isConnected = false;

export const ConnectDB = async () => {
  if (isConnected) {
    console.log("MongoDB is Connected");
    return;
  } else {
    try {
      await mongoose.connect(url, { dbName: "modernnest" });
      isConnected = true;
      console.log("MongoDB is Connected");
    } catch (error) {
      console.log("Error in connection" + error);
    }
  }
};
