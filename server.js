const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const config = require("config");
console.log(config);

mongoose.connect(config.DbHost);

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`app running on port ${port}`));


module.exports = app