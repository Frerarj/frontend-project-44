import gameInterface, { getRandomNumber } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findGCD = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const divisionRemainder = firstNumber % secondNumber;
    return findGCD(secondNumber, divisionRemainder);
  } return firstNumber;
};

const getGameResult = () => {
  const number = getRandomNumber();
  const secondNumber = getRandomNumber();

  const question = `${number} ${secondNumber}`;
  const rightAnswer = findGCD(number, secondNumber);

  return [question, rightAnswer];
};

const brainGcdGame = () => {
  gameInterface(gameRules, getGameResult);
};

export default brainGcdGame;
