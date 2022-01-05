'use strict';

const generate = require(`./generate.js`);
const help = require(`./help.js`);
const version = require(`./version.js`);

const CLI = {
  [generate.name]: generate,
  [help.name]: help,
  [version.name]: version,
};

module.exports = CLI;
