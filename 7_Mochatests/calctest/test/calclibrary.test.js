'use strict'

const expect = require('chai').expect;

const {sum} = require('../calclibrary');

describe('Test sum(1,1)=2', function(){
  it('sum(1,1)=2', function(){
    expect(sum(1,1)).to.equal(2)
  })
})

describe('test sum with integer testvalues', function(){
  const testValues = [
    {a: -2, b: -4, expected: -6},
    {a: -2, b:  4, expected:  2},
    {a:  2, b: -4, expected: -2},
    {a:  0, b: 0, expected: 0}
  ]
  testValues.forEach(function(testCase){
    it(`sum(${testCase.a},${testCase.b})=${testCase.expected}`, function(){
      expect(sum(testCase.a,testCase.b)).to.equal(testCase.expected)
    })
  })
})

// Other way with array of arrays instead of objects
describe('test sum with integer testvalues (Array of arrays)', function(){
  const testValues = [
    [-2, -4,   -6],
    [-2,  4,    2],
    [ 2, -4,   -2],
    [ 0,  0,    0]
  ]
  testValues.forEach(function(testCase){
    it(`sum(${testCase[0]},${testCase[1]})=${testCase[2]}`, function(){
      expect(sum(testCase[0],testCase[1])).to.equal(testCase[2])
    })
  })
})

// Other way with array of arrays and "for-of" version
describe('test sum with integer testvalues', function(){
  const testValues = [
    {a: -2, b: -4, expected: -6},
    {a: -2, b:  4, expected:  2},
    {a:  2, b: -4, expected: -2},
    {a:  0, b: 0, expected: 0}
  ]
  for(let testCase of testValues){
    it(`sum(${testCase.a},${testCase.b})=${testCase.expected}`, function(){
      expect(sum(testCase.a,testCase.b)).to.equal(testCase.expected)
    })
  }
})

describe('test sum with floats', function(){
  const testValues = [
    {a: -2.5, b: -2.5, expected: -5.0},
    {a: -2.5, b: 2.5, expected: 0},
    {a: 2.4, b: -2.5, expected: -0.1}
  ]

  // here we should use closeTo instead of equal
  testValues.forEach(function(testCase){
    it(`sum(${testCase.a},${testCase.b})=${testCase.expected}`, function(){
      expect(sum(testCase.a,testCase.b)).to.be.closeTo(testCase.expected,0.01)
    })
  })
})

describe('testing exceptions', function(){
  it('sum(1) throws an exception "parameter missing"', function(){
    expect(function(){
      sum(1)
    }).to.throw('parameter missing')
  })
})