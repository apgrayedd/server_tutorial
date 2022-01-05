'use strict';


const fs = require(`fs`);
const {
  getRandomInt
} = require(`../util.js`);
const {
  DEFAULT_COUNTER,

  title,
  createdDate,

  shuffleFullText,
  shuffleAnnounce,
  shuffleCategory,
} = require(`../const.js`);

const createTextPublication = (count) => (
  Array(count).fill({}).map(() => ({
    'title': title[getRandomInt(0, title.length)],
    'announce': shuffleAnnounce(getRandomInt(1, 5)).join(),
    'fullText': shuffleFullText().join(),
    'createdDate': createdDate[getRandomInt(0, createdDate.length)],
    'category': shuffleCategory().join(),
  }))
);

module.exports = {
  name: `--generate`,
  run(args) {
    const count = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNTER;
    const content = JSON.stringify(createTextPublication(countOffer));

    fs.writeFile(`mock.json`, content, (err) => {
      if (err) {
        return console.error(`Can't write data to file...`);
      }
      return console.info(`Operation success. File created.`);
    });
  },
};
