const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const otpRoutes = require("./routes/otpRoutes");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.use("/api", otpRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
