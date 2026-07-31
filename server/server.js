const express = require("express");
const cors = require("cors");
require("dotenv").config();

const jobsRoute = require("./routes/jobs");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobsRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});``