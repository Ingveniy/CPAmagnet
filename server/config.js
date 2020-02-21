const path = require("path");
const has = require("lodash/has");
const get = require("lodash/get");
const dotenv = require("dotenv");
const joi = require("joi");

const defaultEnv = "development";
const env = process.env.NODE_ENV || defaultEnv;

if (env === defaultEnv) {
  dotenv.config(path.join(__dirname, ".env"));
}

const isBollean = defaultValue =>
  joi
    .boolean()
    .truthy("TRUE")
    .truthy("true")
    .falsy("FALSE")
    .falsy("false")
    .default(defaultValue);

const envVarsSchema = joi
  .object({
    NODE_ENV: joi.string().valid(["development", "staging", "production"]),
    HOST: joi.string().default("localhost"),
    PORT: joi.default(3001),
    SERVER_URL: joi.string().required(),
    SERVER_BASE_PATH: joi.string().default("/api/v1"),
    MONGODB_URI: joi.string().required(),
    STORAGE_DIR: joi.string().required(),

    // JWT
    JWT_SECRET_KEY: joi.string().required(),
    JWT_EXPIRES_IN: joi.default("12h"),

    APP_DEBUG: isBollean(false),
  })
  .unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env,
  debug: envVars.APP_DEBUG,
  apiKey: "b698d9bb20cb49a7b5cee3f07765c6d9",
  server: {
    port: Number(envVars.PORT),
    host: envVars.HOST,
    url: envVars.SERVER_URL,
    basePath: envVars.SERVER_BASE_PATH,
  },
  mongodb: { uri: envVars.MONGODB_URI },
  storageDir: envVars.STORAGE_DIR,
  jwt: {
    secretKey: envVars.JWT_SECRET_KEY,
    expiresIn: envVars.JWT_EXPIRES_IN,
  },
};

Object.defineProperty(config, "has", {
  value: function(prop) {
    return has(this, prop);
  },
  writable: false,
  configurable: false,
});

Object.defineProperty(config, "get", {
  value: function(prop) {
    if (!this.has(prop)) {
      throw new Error(`Configuration property "${prop}" is not defined`);
    }

    return get(this, prop);
  },
  writable: false,
  configurable: false,
});

module.exports = config;
