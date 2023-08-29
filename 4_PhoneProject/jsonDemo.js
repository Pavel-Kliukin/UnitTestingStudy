'use strict'

const register = require('./phones.json') // this is how we can get something from json file

console.log(register[0]);
console.log('---------------------');
console.log(register[0].firstname);
console.log('---------------------');
console.log(register[0].phones[1]);

for(const person of register) {
  console.log();
  console.log(`${person.firstname} ${person.lastname}:`);
  for(const phone of person.phones){
    console.log(`  ${phone.type}: ${phone.number}`);
  }
  console.log();
}