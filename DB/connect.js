const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // Set the connection timeout to 30 seconds (adjust as needed)
};
// Here, is the mongoDB connection define
mongoose
  .connect(process.env.DB_URL, options)
  .then(() => {
    console.log("Database Connection Successfull...");
  })
  .catch((error) => {
    console.log(`Database Connection Error. ${error}`);
  });
