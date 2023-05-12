import runEngine from '../index.js';
import getRandomInRange from '../utils/getRandomInRange.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGCD = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const divisionRemainder = firstNumber % secondNumber;
    return findGCD(secondNumber, divisionRemainder);
  } return firstNumber;
};

const generateRound = () => {
  const number = getRandomInRange(0, 10);
  const secondNumber = getRandomInRange(0, 10);

  const question = `${number} ${secondNumber}`;
  const rightAnswer = String(findGCD(number, secondNumber));

  return [question, rightAnswer];
};

const runBrainGcdGame = () => {
  runEngine(gameRules, generateRound);
};

export default runBrainGcdGame;
