import _ from 'lodash';
import runEngine from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const mathSigns = ['+', '-', '*'];
  const randomMathSign = _.sample(mathSigns);

  return randomMathSign;
};

const calculate = (number, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return number + secondNumber;
    case '-':
      return number - secondNumber;
    case '*':
      return number * secondNumber;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const generateRound = () => {
  const number = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${number} ${operator} ${secondNumber}`;
  const rightAnswer = String(calculate(number, secondNumber, operator));

  return [question, rightAnswer];
};

const runBrainCalcGame = () => {
  runEngine(gameRules, generateRound);
};

export default runBrainCalcGame;
