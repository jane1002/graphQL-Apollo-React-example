const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connect."))
  .catch(err => console.error(err));

const app = express();

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Start server, listening on ${PORT}`);
});
