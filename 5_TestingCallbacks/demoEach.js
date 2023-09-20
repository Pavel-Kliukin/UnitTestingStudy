'use strict';

function each(dataArray){
    return function(message){
        console.log(message + ': ' +dataArray.join(', '));
    }
}

// each([1,2,3,4])('Testing');

// const e=each([9,8,7,6]);
// e('values');

function testAll(testValues){
    return function(message, cb){
        for(let row of testValues){
            console.log(message);
            cb(...row);
        }
    }
}

const t=[
    [1,2,3],
    [4,5,6]
];

testAll(t)('xyz', (a,b,c)=>console.log(a,b,c));

const a=testAll(t);
a('qwe', (a,b,c)=>console.log(a,b,c))

testAll([
    [1,2],
    [3,4]])('ab',(a,b)=>console.log(a,b));