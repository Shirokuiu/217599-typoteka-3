'use strict';

const fs = require(`fs`).promises;

const readFile = async (filePath) => {
  try {
    return await fs.readFile(filePath, `utf8`);
  } catch (err) {
    throw err;
  }
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (someArray) => {
  const someArrayCopied = [...someArray];

  for (let i = someArrayCopied.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [someArrayCopied[i], someArrayCopied[randomPosition]] = [someArrayCopied[randomPosition], someArrayCopied[i]];
  }

  return someArrayCopied;
};

const runParallel = async (...cb) => Promise.all([...cb]);

const parseJSONFile = async (filePath) => {
  try {
    const fileContent = await readFile(filePath);

    return JSON.parse(fileContent);
  } catch (err) {
    throw err;
  }
};

const parseTXTFile = async (filePath) => {
  try {
    const content = await readFile(filePath);

    if (!content.trim().length) {
      throw new Error(`Файл пуст`);
    }

    return content.trim().split(`\n`);
  } catch (err) {
    throw err;
  }
};

const compareArrayToAnotherArray = (arr, masterArr) =>
  Boolean(arr.filter((item) => masterArr.indexOf(item) === -1).length);

module.exports = {
  getRandomInt,
  shuffle,
  runParallel,
  parseTXTFile,
  parseJSONFile,
  compareArrayToAnotherArray
};
