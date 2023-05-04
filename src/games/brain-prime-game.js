import readlineSync from 'readline-sync';
import getUserName, { userName } from '../cli.js';

getUserName();

const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
};

const isPrime = (num) => {
  if (num === 1 || num === 0) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const brainPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    if (userAnswer == rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainPrimeGame;
