const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    position: { type: String, required: true },
    role: { type: String, required: true },
    status: { type: Boolean, default: false },
    employed: { type: String },
    profile_pic: { type: String, required: true },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

module.exports = mongoose.model("employee", employeeSchema);
