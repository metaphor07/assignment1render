const express = require("express");
const submit = require("../controllers/submit");
const router = express.Router();

router.post("/", submit);

module.exports = router;
