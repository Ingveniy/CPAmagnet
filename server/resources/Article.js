import { map } from 'lodash';
import config from 'config';
import fs from 'fs';

module.exports = ({ router, rest, db }) => {
  router.get('/api/v1/articlesCount', async (req, res, next) => {
    try {
      let oldQuery = JSON.parse(req.query.query);
      let query = {};
      map(oldQuery, async (item, index) => {
        try {
          query[index] = item;
        } catch (err) {
          console.log(err);
        }
      });
      res.json(await db.Article.count(query));
    } catch (e) {
      next(e);
    }
  });

  return rest.serve(router, db.Article, {
    postRead: (req, res, next) => {
      next();
    },
    preUpdate: (req, res, next) => {
      next();
    },
    postUpdate: (req, res, next) => {
      next();
    },
    name: 'articles'
  });
};
