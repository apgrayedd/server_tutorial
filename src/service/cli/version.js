'use strict';

const version = require(`../package.json`).version;

module.exports = {
  name: `--version`,
  run() {
    console.info(version);
  }
};
