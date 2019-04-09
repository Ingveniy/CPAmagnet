import fs from 'fs';
import path from 'path';
import express from 'express';
import rest from 'express-restify-mongoose';

module.exports = function(app, db) {
  const router = express.Router();
  app.use(router);

  rest.defaults({
    plural: true,
    lowercase: true,
    totalCountHeader: true,
    findOneAndUpdate: false,
    findOneAndRemove: false,
    onError: function(err, req, res, next) {
      console.log(err);
      next(new Error(err));
    },
  });

  fs
    .readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
    .forEach(file => {
      require(path.join(__dirname, file))({
        router,
        rest,
        db,
      });
    });
};
