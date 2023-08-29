'use strict'

const Dice = require('./dice')

const diceA=new Dice()
const diceB=new Dice()

// console.log(diceA.dots);
// console.log(diceA.minimum);
// console.log(diceA.upperBound); // this one can't be read by user, because we protected it with # in the constructor
// console.log(diceA.maximumValue);

// diceA.minimum = -19
// diceA.dotCount = 20
// console.log(diceA.minimumValue);
// console.log(diceA.dots);

// diceA.upperBound = 25 // this one can't be changed by user because we protected it with # in the constructor
// console.log(diceA.maximumValue);


//Examples of output
console.log(diceA);
console.log('DiceA: ', diceA); // this will give an object
console.log('DiceB: ' + diceB); // this will give a string
console.log(diceA.toString());
console.log(`DiceA:  ${diceA}, DiceB:  ${diceB}`); 


//THE GAME

if (diceA.dots > diceB.dots) {
  console.log('A wins');
} else if (diceA.dots < diceB.dots) {
  console.log('B wins');
} else {
  console.log('Nobody wins');
}

const diceArray = [new Dice(), new Dice(), new Dice()]

diceArray.forEach(dice=>console.log(dice.toString()))
diceArray.forEach(dice=>dice.roll())
diceArray.forEach(dice=>console.log(dice.toString()))