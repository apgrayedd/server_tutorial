'use strict';

const generate = require(`./generate`);
const version = require(`./version`);

const commands = [
  generate,
  version,
];

module.exports = {
  name: `--help`,
  run() {
    commands.forEach((command) => {
      console.info(command.name);
    });
  }
};
