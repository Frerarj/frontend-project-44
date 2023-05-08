import _ from 'lodash';
import runEngine from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const getGameResult = () => {
  const mathSigns = ['+', '-', '*'];
  const randomMathSign = _.sample(mathSigns);
  const number = getRandomNumber();
  const secondNumber = getRandomNumber();

  const question = `${number} ${randomMathSign} ${secondNumber}`;
  let rightAnswer;

  switch (randomMathSign) {
    case '+':
      rightAnswer = number + secondNumber;
      break;
    case '-':
      rightAnswer = number - secondNumber;
      break;
    case '*':
      rightAnswer = number * secondNumber;
      break;
    default:
      rightAnswer = 0;
      break;
  }

  return [question, rightAnswer];
};

const runBrainCalcGame = () => {
  runEngine(gameRules, getGameResult);
};

export default runBrainCalcGame;
