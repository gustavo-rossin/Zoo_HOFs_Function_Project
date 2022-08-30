const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((specie) => specie.name === animal).residents;

  const booleanSpeciesAge = findAnimal.every((aging) => aging.age >= age);

  return booleanSpeciesAge;
}

console.log(getAnimalsOlderThan('otters', 7));
console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
