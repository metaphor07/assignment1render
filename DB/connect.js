const mongoose = require("mongoose");

// Here, is the mongoDB connection define
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database Connection Successfull...");
  })
  .catch((error) => {
    console.log(`Database Connection Error. ${error}`);
  });
