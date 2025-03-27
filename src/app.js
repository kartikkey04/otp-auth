const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const otpRoutes = require("./routes/otpRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
