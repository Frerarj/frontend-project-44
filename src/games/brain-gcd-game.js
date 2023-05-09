import runEngine from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGCD = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const divisionRemainder = firstNumber % secondNumber;
    return findGCD(secondNumber, divisionRemainder);
  } return firstNumber;
};

const generateRound = () => {
  const number = getRandomNumber();
  const secondNumber = getRandomNumber();

  const question = `${number} ${secondNumber}`;
  const rightAnswer = findGCD(number, secondNumber);

  return [question, rightAnswer];
};

const runBrainGcdGame = () => {
  runEngine(gameRules, generateRound);
};

export default runBrainGcdGame;
