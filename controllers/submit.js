const mongoose = require("mongoose");
const User = require("../models/user");
const Address = require("../models/address");

const submit = async (req, res, next) => {
  try {
    console.log(req.body.firstName);
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    const result = await newUser.save(); //save the user data

    const newAddress = new Address({
      userId: result._id,
      street: req.body.street,
      landmark: req.body.landmark,
      postalCode: req.body.postalCode,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
    });
    await newAddress.save(); //save the address

    res.status(201).json(result._id);
  } catch (error) {
    next(error);
  }
};

module.exports = submit;
