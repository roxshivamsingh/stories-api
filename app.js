var dotenv = require("dotenv");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var Routes = require("./routes");

var app = express();

dotenv.config({ path: path.join(process.cwd(), ".env") });

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log(
    "[X] MongoDB connection error. Please make sure MongoDB is running."
  );
  process.exit();
});
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/v1/users", Routes.UserRouter);

module.exports = app;
