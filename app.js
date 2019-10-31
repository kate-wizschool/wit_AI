var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var messageRouter = require("./routes/message");

var app = express();

const { Wit, log } = require("node-wit");
var interactive = require("node-wit").interactive;

// const accessToken = (() => {
//   if (process.argv.length !== 3) {
//     console.log('usage: node examples/basic.js <wit-access-token>');
//     process.exit(1);
//   }
//   return process.argv[2];
// })();

// wit.ai 연결
const client = new Wit({
  accessToken: "4XBSYQJA6RUE6J7GSVLNAS4C5PB3MZCE",
  logger: new log.Logger(log.DEBUG)
});
// interactive(client);
// console
//   .log(client.message("set an alarm tomorrow at 7am"))
//   .then(data => {
//     console.log("Yay, got Wit.ai response: " + JSON.stringify(data));
//   })
//   .catch(console.error);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/sendmsg", messageRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
