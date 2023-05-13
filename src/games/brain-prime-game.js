import runEngine from '../index.js';
import getRandomInRange from '../utils/getRandomInRange.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1 || num === 0) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateRound = () => {
  const randomNumber = getRandomInRange(0, 45);
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  const question = `${randomNumber}`;
  return [question, rightAnswer];
};

const runBrainPrimeGame = () => {
  runEngine(gameRules, generateRound);
};

export default runBrainPrimeGame;
