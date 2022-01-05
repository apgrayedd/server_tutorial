'use strict';

const CLI = require(`./cli/index.js`);
const {DEFAULT_COMMAND} = require(`./const.js`);

const userCommand = process.argv.slice(2)[0];
CLI[userCommand || DEFAULT_COMMAND].run(process.argv.slice(2)[1]);
