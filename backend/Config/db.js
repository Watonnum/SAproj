const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jackson2524:poopae2524@airbnb.rtqc7ov.mongodb.net/"
    );
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
