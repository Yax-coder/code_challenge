const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "../build")));

app.listen(8085, () =>
  console.log("Express server is running on localhost:8085")
);
