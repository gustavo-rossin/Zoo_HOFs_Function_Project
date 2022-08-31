const data = require('../data/zoo_data');

// console.log(data.employees[0].managers);

function isManager(id) {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  if (id === stephanieId || id === olaId || id === burlId) {
    return true;
  }
  return false;
}
const { employees } = data;

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const getManager = employees.filter((manager) => manager.managers.includes(managerId));
    return getManager.map((worker) => `${worker.firstName} ${worker.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = { isManager, getRelatedEmployees };
