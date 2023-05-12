import runEngine from '../index.js';
import getRandomInRange from '../utils/getRandomInRange.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const number = getRandomInRange(0, 100);
  const question = `${number}`;
  const rightAnswer = isEven(number);

  return [question, rightAnswer];
};

const runBrainEvenGame = () => {
  runEngine(gameRules, generateRound);
};

export default runBrainEvenGame;
