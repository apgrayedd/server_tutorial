'use strict';

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

module.exports = {
  shuffle,
  getRandomInt,
};
