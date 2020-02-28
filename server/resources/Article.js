import { map } from "lodash";
import config from "config";
import fs from "fs";

module.exports = ({ router, rest, db }) => {
  return rest.serve(router, db.Article, {
    preRead: (req, res, next) => {
      next();
    },
    postRead: (req, res, next) => {
      next();
    },
    preCreate: (req, res, next) => {
      next();
    },
    postCreate: (req, res, next) => {
      next();
    },
    preUpdate: (req, res, next) => {
      next();
    },
    postUpdate: (req, res, next) => {
      next();
    },
    preDelete: (req, res, next) => {
      next();
    },
    postDelete: (req, res, next) => {
      next();
    },

    name: "articles",
  });
};
