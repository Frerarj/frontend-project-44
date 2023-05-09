import runEngine from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
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

const runBrainEvenGame = () => {
  runEngine(gameRules, generateRound);
};

export default runBrainEvenGame;
