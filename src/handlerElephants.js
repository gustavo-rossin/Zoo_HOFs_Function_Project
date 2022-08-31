const { species } = require('../data/zoo_data');

const getElephants = () =>
  species.find((specie) => specie.name === 'elephants');

const averageAge = ({ residents }) =>
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;

const computeData = (param, elephants) => {
  switch (param) {
  case 'count':
    return elephants.residents.length;
  case 'names':
    return elephants.residents.map((elephant) => elephant.name);
  case 'averageAge':
    return averageAge(elephants);
  default:
    return null;
  }
};

const handlerElephants = (param) => {
  if (param === undefined) {
    return undefined;
  }
  if (typeof param !== 'string') {
    return 'Parâmetro inválido, é necessário uma string';
  }
  const elephants = getElephants();
  if (Object.keys(elephants).includes(param)) {
    return elephants[param];
  }
  return computeData(param, elephants);
};

// console.log(getElephants().residents);
// console.log(computeData());
// console.log(computeData('names', species[7]));
// console.log(computeData('averageAge', species[7]));
// console.log(typeof getElephants);
console.log(handlerElephants('i'));
// console.log(handlerElephants('name'));
// console.log(handlerElephants('popularity'));
// console.log(handlerElephants('location'));
// console.log(handlerElephants('availability'));
// console.log(handlerElephants('residents'));

module.exports = { handlerElephants, getElephants, computeData };
