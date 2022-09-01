const data = require('../data/zoo_data');

const { species } = data;
const allAnimals = {
  lions: species[0].residents.length,
  tigers: species[1].residents.length,
  bears: species[2].residents.length,
  penguins: species[3].residents.length,
  otters: species[4].residents.length,
  frogs: species[5].residents.length,
  snakes: species[6].residents.length,
  elephants: species[7].residents.length,
  giraffes: species[8].residents.length,
};

const penguin = { specie: 'penguins', sex: 'female' };

function countAnimals(animal) {
  if (animal === undefined) {
    return allAnimals;
  }
  if (Object.keys(animal).length === 1) {
    const qtdAnimals = Object.entries(allAnimals).find((element, index) => {
      if (element[0] === Object.values(animal)[0]) {
        return Object.values(allAnimals)[index];
      }
      return 0;
    });
    return qtdAnimals[1];
  }
  if (Object.keys(animal.length === 2)) {
    return species.find((el) => el.name === animal.specie)
      .residents.filter((s) => s.sex === animal.sex).length;
  }
}

// console.log(Object.values(penguin)[0]);
// console.log(Object.entries(allAnimals));

// console.log(countAnimals());
console.log(countAnimals(penguin));

module.exports = countAnimals;
