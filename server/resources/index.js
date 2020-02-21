import fs from "fs";
import path from "path";
import express from "express";
import rest from "express-restify-mongoose";

module.exports = function(app, db) {
  const router = express.Router();
  app.use(router);

  rest.defaults({
    plural: true,
    lowercase: true,
    contentType: "application/json",
    totalCountHeader: true,
    findOneAndUpdate: true,
    findOneAndRemove: true,
    onError: function(err, req, res, next) {
      console.log(err, "err");
      console.log(req, "req");
      next(new Error(err));
    },
  });

  router.get("/", async (req, res, next) => {
    try {
      res.send("<h1>Welcome to cpaMagnet api service</h1>");
    } catch (e) {
      next(e);
    }
  });

  fs.readdirSync(__dirname)
    .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
    .forEach(file => {
      require(path.join(__dirname, file))({
        router,
        rest,
        db,
      });
    });
};
