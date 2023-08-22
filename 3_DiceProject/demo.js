'use strict'

// This is the demo how to create array of arrays with for loop

const ubounds=[]

for (let i=2; i<=20; i++) {
  ubounds.push([i])
}

console.log(ubounds);





// STEPS FOR EXAMPLE

// const temp=new Array(19).fill(2)
// console.log(temp);

// const mapped = temp.map(value => value+5)
// console.log(mapped);

// const mappedWithInd = temp.map((value, ind) => [value+ind])
// console.log(mappedWithInd);


// How to create array of arrays in on line and fill it from 2 to 20
const bounds = new Array(19).fill(2).map((value, ind) => [value+ind])

//run in terminal: node demo