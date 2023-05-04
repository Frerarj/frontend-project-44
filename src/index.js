import readlineSync from 'readline-sync';
import getUserName, { userName } from './cli.js';

export const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
};

const gameInterface = (gameRules, getGameResult) => {
  getUserName();
  console.log(gameRules);
  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = getGameResult();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const finalRightAnswer = String(rightAnswer);
    if (userAnswer === finalRightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${finalRightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameInterface;
