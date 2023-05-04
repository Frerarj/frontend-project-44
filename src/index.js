import readlineSync from 'readline-sync';

export const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
};

const gameInterface = (gameRules, getGameResult) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

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
