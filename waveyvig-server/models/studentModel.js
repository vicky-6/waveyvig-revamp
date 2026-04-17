const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    age: Number,
    qualification: String,
    password: String,
    profilePic: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    }
  },


  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);;