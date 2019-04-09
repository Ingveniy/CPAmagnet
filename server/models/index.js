import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import config from 'config';
import autoIncrement from 'mongoose-auto-increment';

mongoose.Promise = require('bluebird');

module.exports = () => {
  mongoose.set('debug', config.get('debug'));
  mongoose.connect(config.get('mongodb.uri'));

  autoIncrement.initialize(mongoose);
  fs
    .readdirSync(__dirname)
    .filter(
      file =>
        file.indexOf('.') !== 0 && file !== 'index.js' && file !== 'schemas'
    )
    .forEach(file => {
      const mod = path.join(__dirname, file);
      const model = require(mod);

      model(mongoose);
    });

  return mongoose.models;
};
