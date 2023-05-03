import readlineSync from 'readline-sync';
import getUserName, { userName } from '../cli.js';

getUserName();

const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
};

const findGCD = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const divisionRemainder = firstNumber % secondNumber;
    return findGCD(secondNumber, divisionRemainder);
  } return firstNumber;
};

const brainGcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    const secondNumber = getRandomNumber();
    console.log(`Question: ${number} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const rightAnswer = findGCD(number, secondNumber);

    if (userAnswer == rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainGcdGame;
