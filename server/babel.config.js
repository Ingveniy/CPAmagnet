// babel.config.js
'use strict';

module.exports = {
  env: {
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            debug: false,
            targets: {
              node: '9',
            },
          },
        ],
      ],
      ignore: ['node_modules'],
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-async-to-generator',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        [
          'babel-plugin-module-resolver',
          {
            root: ['./'],
            alias: {
              config: './config',
              exceptions: './exceptions',
              lib: './lib',
              utils: './lib/utils',
            },
          },
        ],
      ],
      sourceMaps: 'inline',
      inputSourceMap: false,
    },
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: '9',
            },
          },
        ],
      ],
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-async-to-generator',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        [
          'babel-plugin-module-resolver',
          {
            root: ['./'],
            alias: {
              config: './config',
              exceptions: './exceptions',
              lib: './lib',
              utils: './lib/utils',
            },
          },
        ],
      ],
    },
  },
};

