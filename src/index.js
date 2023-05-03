import readlineSync from 'readline-sync';
import getUserName, { userName } from './cli.js';

const gameInterface = (gameRules) => {
  console.log('Welcome to the Brain Games!');
  getUserName();
  console.log(gameRules);
  for (let i = 0; i < 3; i += 1) {
    // Логика вопроса и высчитывания верного ответа
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer == rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameInterface;
