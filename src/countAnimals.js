const data = require('../data/zoo_data');

const { species } = data;
// const { name, popularity } = species;

function countAnimals(animal) {
  species.map((qtd) => {
    const key = {
      animal: qtd.popularity,
    };
    return key;
  });
}

// console.log(countAnimals());

module.exports = countAnimals;
