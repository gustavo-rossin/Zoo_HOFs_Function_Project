const data = require('../data/zoo_data');

const { species, employees } = data;

const getSpecies = ([...id]) => id.map((arr) => species.find((fil) => arr === fil.id).name);

const getLocationById = ([...id]) => id.map((arr) => species
  .find((fil) => arr === fil.id).location);

const workersInfo = () => employees.map((arr) => ({
  id: arr.id,
  fullName: `${arr.firstName} ${arr.lastName}`,
  species: getSpecies(arr.responsibleFor),
  locations: getLocationById(arr.responsibleFor),
}));

function getEmployeesCoverage(employee) {
  if (!employee) {
    return workersInfo();
  }
  const findEmployee = employees.find((string) => string.id === employee.id
    || string.firstName === employee.name
    || string.lastName === employee.name);
  if (!findEmployee) {
    throw new Error('Informações inválidas');
  }
  const coverage = {
    id: findEmployee.id,
    fullName: `${findEmployee.firstName} ${findEmployee.lastName}`,
    species: getSpecies(findEmployee.responsibleFor),
    locations: getLocationById(findEmployee.responsibleFor),
  };
  if (findEmployee) {
    return coverage;
  }
}
// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Nelson' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
console.log(getEmployeesCoverage({ id: 'Id inválido' }));
module.exports = getEmployeesCoverage;
