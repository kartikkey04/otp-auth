const express = require("express");
const router = express.Router();

router.post("/send-otp", sendOTP);

module.exports = router;
