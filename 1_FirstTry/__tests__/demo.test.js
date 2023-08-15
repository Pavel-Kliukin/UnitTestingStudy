'use strict';

//This script executes before all tests
beforeAll(()=>{
  console.log('beforeAll', 'init before all tests'.toUpperCase());
})

//This script executes after all tests
afterAll(()=>{
  console.log('afterAll', 'cleaning after all tests'.toUpperCase());
})

// TESTS
test('This is the first test', ()=>{
  console.log('first test');
})

it('This is the second test', ()=>{
  console.log('second test');
})

//A group of tests with description
describe('This is a first group A', ()=>{

  // in case if you need to do something before each test (for example, add something to DB)
  beforeEach(()=>{
    console.log('beforeEach', 'before each test in group A'.toUpperCase());
  })
  
  // in case if you need to do something after each test
  afterEach(()=>{
    console.log('afterEach', 'after each test in group A'.toUpperCase());
  })
  
  test('first test in group A', ()=>{
    console.log('first in A');
  })

  test('second test in A', ()=>{
    console.log('second in A');
  })
})

// Example of enclosure (вложенность)
describe('This is group B', ()=>{

  beforeAll(()=> {
    console.log('Before all in B');
  })

  describe('This is group 1 in B', ()=>{
    test('test 1 in B', ()=>{
      console.log('1 in B');
    })
  })

  describe('This is group 2 in B', ()=>{
    test('test 2 in B', ()=>{
      console.log('2 in B');
    })
  })

})

describe('test concatenation function', ()=>{
  const concat = (partA, partB) => '' + partA + partB

  test('testing that `first` and `second` results `firstsecond`', ()=>{
    expect(concat('first', 'second')).toBe('firstsecond')
  })

  test('testing concat(1,2) returns 12', ()=> {
    expect(concat(1,2)).toBe('12')
  })
})

describe('this is testing for an exception', ()=>{
  function testFunction(){
    throw Error('This is an exception')
  }

  test('function throws an exception', ()=>{
    // don't forget to use ()=> before function:
    expect(()=>testFunction()).toThrow('This is an exception')
  })
})