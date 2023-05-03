import _ from 'lodash';
import readlineSync from 'readline-sync';
import getUserName, { userName } from '../cli.js';

getUserName();

const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
};

const brainCalcGame = () => {
  const mathSigns = ['+', '-', '*'];
  const randomMathSign = _.sample(mathSigns);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    const secondNumber = getRandomNumber();
    console.log(`Question: ${number} ${randomMathSign} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

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

    if (userAnswer == rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainCalcGame;
