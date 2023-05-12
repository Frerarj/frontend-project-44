import runEngine from '../index.js';
import getRandomInRange from '../utils/getRandomInRange.js';

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '*', '-'];
  return operators[getRandomInRange(0, operators.length - 1)];
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
  const number = getRandomInRange(0, 100);
  const secondNumber = getRandomInRange(0, 100);
  const operator = getRandomOperator();
  const question = `${number} ${operator} ${secondNumber}`;
  const rightAnswer = String(calculate(number, secondNumber, operator));

  return [question, rightAnswer];
};

const runBrainCalcGame = () => {
  runEngine(gameRules, generateRound);
};

export default runBrainCalcGame;
