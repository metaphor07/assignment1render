const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./DB/connect");
const submitRoute = require("./routes/submit");
const submit = require("./controllers/submit");

// middleware
app.use(cors());
app.use(express.json());

// routes end points
app.use("/api/submit", submitRoute);

// middleware for error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something Went Wrong!";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

// Listining Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Listen on port no ${port}`);
});
