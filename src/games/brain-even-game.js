import readlineSync from 'readline-sync';
import getUserName, { userName } from '../cli.js';

getUserName();

const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
};

const brainEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    let rightAnswer = '';
    if (number % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEvenGame;
