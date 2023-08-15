'use strict'

const {sum} = require('../calclibrary')

describe('Testing sum with integers', ()=> {

  test('sum(1,1) returns 2', ()=>{
    expect(sum(1,1)).toBe(2)
  })

  test('sum(2,3) returns 5', ()=>{
    expect(sum(2,3)).toBe(5)
  })

  const testValues=[
  // a,   b, expected
    [-2, -4,   -6],
    [-2,  4,    2],
    [ 2, -4,   -2],
    [ 0,  0,    0],
    [ 0,  3,    3],
    [ 3,  0,    3],
    [ 0, -3,   -3],
    [-3,  0,   -3],
    [123, 200, 323]
  ]

  test.each(testValues)('sum(%s,%s) = %s', (a,b,expected)=>{
    expect(sum(a,b)).toBe(expected)
  })

})

describe('Testing sum with floats', ()=>{
  const testValues=[
  // a,   b, expected
    [10,  11.5, 21.5],
    [2.5,  3,  5.5],
    [-2.5, 3,  0.5],
    [3,  -2.5,  0.5],
    [-2.5, -3, -5.5],
    [-2.5, -2.5, -5.0],
    [-2.5, 2.5,  0],
    [2.4, -2.5,  -0.1]
  ]

  // %s is a placeholder for a string (you can read it in documentation for test.each)
  test.each(testValues)('sum(%s,%s) = %s', (a,b,expected)=>{
    expect(sum(a,b)).toBeCloseTo(expected)
    // we use toBeCloseTo because JS calculate 2.4 - 2.5 = -0.10000000000000009 and gives a fail of the test
  })
})

describe('Testing parameter is missing', ()=>{

  test('sum() throws an exception', ()=>{
    expect(()=> sum()).toThrow('parameter missing')
  })
  
  test('sum(1) throws an exception', ()=>{
    expect(()=> sum(1)).toThrow('parameter missing')
  })

  describe('Testing with test.each', ()=>{
    const testValues=[
      [1],
      ['a'],
      ['']
    ]

    test.each(testValues)('sum(%s) throws "parameter missing"', (a)=>{
      expect(()=> sum(a)).toThrow('parameter missing')
    })

  })
})

describe('Testing parameters are not numbers', ()=>{
  const testValues=[
    ['1','2'],
    ['a',1],
    [1,'a'],
    ['a','b'],
    ['','']
  ]

  test.each(testValues)('sum(%s,%s) throws "only numbers allowed"', (a,b)=>{
    expect(()=>sum(a,b)).toThrow('only numbers allowed')
  })
})

// We shoul change naming of describe if we don't want them to be shown in the same block
// This version is nicer to read in the report
describe('Testing parameters are not numbers. Version2.', ()=>{
  const testValues=[
    ["sum('1','2')",'1','2'],
    ["sum('a',1)",'a',1],
    ["sum(1,'a')",1,'a'],
    ["sum('a','b')",'a','b'],
    ["sum('','')",'','']
  ]

  test.each(testValues)('%s throws "only numbers allowed"',(label,a,b)=>{
    expect(()=>sum(a,b)).toThrow('only numbers allowed')
  })
})
