import gameInterface, { getRandomNumber } from '../index.js';

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

const getGameResult = () => {
  const randomNumber = getRandomNumber();

  const question = `${randomNumber}`;
  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const runBrainPrimeGame = () => {
  gameInterface(gameRules, getGameResult);
};

export default runBrainPrimeGame;
