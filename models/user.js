const mongoose = require("mongoose");

// Here, is the User Schema define
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
