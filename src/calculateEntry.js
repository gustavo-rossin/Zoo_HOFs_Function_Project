const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const entrants2 = [
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(visitors) {
  if (visitors === undefined || Object.entries(visitors).length === 0) {
    return 0;
  } return {
    adult: visitors.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: visitors.filter((senior) => senior.age >= 50).length,
    child: visitors.filter((child) => child.age < 18).length,
  };
}

console.log((countEntrants(entrants2)));
console.log(Object.entries(data.prices));

function calculateEntry(payers) {
  const zooEntryPrice = Object.values(data.prices);
  const prices = Object.values(countEntrants(payers))
    .reduce((a, c, i) => a + c * zooEntryPrice[i], 0);
  return prices;
}

console.log(calculateEntry(entrants));
console.log(calculateEntry(entrants2));

module.exports = { calculateEntry, countEntrants };
