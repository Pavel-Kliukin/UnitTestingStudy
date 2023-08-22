'use strict'

const Dice = require('./dice')

const diceA=new Dice(8)

console.log(diceA.dots);
console.log(diceA.minimum);
console.log(diceA.upperBound); // this one can't be read by user, because we protected it with # in the constructor
console.log(diceA.maximumValue);

diceA.minimum = -19
diceA.dotCount = 20
console.log(diceA.minimumValue);
console.log(diceA.dots);

diceA.upperBound = 25 // this one can't be changed by user because we protected it with # in the constructor
console.log(diceA.maximumValue);