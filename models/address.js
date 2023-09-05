const mongoose = require("mongoose");

// Here, is the Address Schema define
const AddressSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    street: { type: String, required: true },
    landmark: { type: String, required: true },
    postalCode: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", AddressSchema);
