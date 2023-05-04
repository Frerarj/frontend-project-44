import gameInterface, { getRandomNumber } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameResult = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  let rightAnswer;

  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }

  return [question, rightAnswer];
};

const brainEvenGame = () => {
  gameInterface(gameRules, getGameResult);
};

export default brainEvenGame;
