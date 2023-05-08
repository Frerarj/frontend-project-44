import runEngine from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const gameRules = 'What number is missing in the progression?';

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

const getGameResult = () => {
  const [rightAnswer, progressionString] = getProgressionElement(countProgression());
  const question = `${progressionString}`;

  return [question, rightAnswer];
};

const runBrainProgressionGame = () => {
  runEngine(gameRules, getGameResult);
};

export default runBrainProgressionGame;
