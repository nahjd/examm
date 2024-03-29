const express = require("express");
const app = express();
const port = process.env.MONGODB_URI || 6060;
bodyParser = require("body-parser");

const cors = require("cors");
const personRouter = require("./src/routes/personRouter");
require("dotenv").config();
require("./src/config/db");

app.use(cors());
app.use(bodyParser.json());
app.use("/", personRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
