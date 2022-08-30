const data = require('../data/zoo_data');

const { employees } = data;
// console.log(employees);

function getEmployeeByName(employee) {
  const worker = employees.find((n) => n.firstName === employee || n.lastName === employee);
  if (employee === undefined) { return {}; }
  return worker;
}

console.log(getEmployeeByName('Wishart'));
console.log(getEmployeeByName('Emery'));
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
