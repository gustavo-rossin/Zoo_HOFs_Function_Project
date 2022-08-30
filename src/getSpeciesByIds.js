const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((stringId) => data.species.find((animal) => animal.id === stringId));
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
