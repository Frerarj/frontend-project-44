import runEngine from '../index.js';
import getRandomInRange from '../utils/getRandomInRange.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (startPoint, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startPoint + step * i);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = 10;
  const step = 2;
  const startPoint = getRandomInRange(0, 10);

  const progression = generateProgression(startPoint, step, progressionLength);
  const hiddenIndex = getRandomInRange(0, progressionLength - 1);
  const rightAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const runBrainProgressionGame = () => {
  runEngine(gameRules, generateRound);
};

export default runBrainProgressionGame;
