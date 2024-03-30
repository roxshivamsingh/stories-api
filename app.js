var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var Routes = require("./routes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/v1/users", Routes.UserRouter);

module.exports = app;
