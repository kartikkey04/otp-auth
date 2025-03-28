const client = require("../config/twilioConfig");
const OTP = require("../models/otpModel");

const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const sendOTP = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    const otp = generateOTP();
    const otpData = new OTP({ phoneNumber, otp });

    await otpData.save();

    await client.messages.create({
      body: `Your OTP for login verification is: ${otp}\nPlease enter this OTP to complete your authentication.\nThis OTP is valid for 5 minutes.\n\nBest,\nKartikey`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    res.status(200).json({ message: "OTP sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send OTP", error });
  }
};

module.exports = { sendOTP };
