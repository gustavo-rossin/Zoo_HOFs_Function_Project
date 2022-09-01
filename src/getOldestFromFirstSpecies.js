const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const idMainAnimal = employees.find((el1) => el1.id === id).responsibleFor[0];
  const keyAnimal = species.find((el2) => el2.id === idMainAnimal)
    .residents.sort((a, b) => b.age - a.age)[0];
  return [keyAnimal.name, keyAnimal.sex, keyAnimal.age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
