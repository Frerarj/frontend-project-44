import readlineSync from 'readline-sync';
import getUserName, { userName } from '../cli.js';

getUserName();

const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * 10);
  return randomNumber;
};

const progressionLength = 10;

const getRandomProgressionElement = () => {
  const randomElement = Math.round(Math.random() * (progressionLength - 1));
  return randomElement;
};

const countProgression = () => {
  const startPoint = getRandomNumber();
  const progressionResult = [startPoint];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    const step = 2;
    progressionResult.push(progressionResult[i] + step);
  }
  return progressionResult;
};

const getProgressionElement = (progressionResult) => {
  const progressionElement = getRandomProgressionElement();
  const result = progressionResult.splice(progressionElement, 1, '..');
  const progressionString = progressionResult.join(' ');
  result.push(progressionString);
  return result;
};

const brainProgressionGame = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const [rightAnswer, progressionString] = getProgressionElement(countProgression());
    console.log(`Question: ${progressionString}`);
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

export default brainProgressionGame;
