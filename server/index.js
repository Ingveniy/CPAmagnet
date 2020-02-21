import fs from "fs";
import path from "path";
import cors from "cors";
import yargs from "yargs";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import promise from "bluebird";
import jwt from "express-jwt";
import config from "config";

const argv = yargs
  .default("port", config.get("server.port"))
  .default("host", config.get("server.host"))
  .alias("p", "port")
  .alias("h", "host").argv;

const db = require("./models")();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    exposedHeaders: "x-total-count",
  }),
);
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("public"));
// app.use(require('./jwtMiddleware')());
// app.use(
//   jwt({
//     secret: config.get('jwt.secretKey'),
//     credentialsRequired: false,
//     getToken: req => req.headers['x-access-token'] || null,
//   }).unless({ path: ['/api/v1/login'] })
// );

require("./resources")(app, db);

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err);
  res.status(500).json({ message: "Unexpected error occurred" });
});

process.on("uncaughtException", err => {
  console.error(err);
});

app.listen(argv.port, argv.host, () => {
  console.log(
    `${config.get("env")} server started at ${argv.host}: ${argv.port}`,
  );
});
