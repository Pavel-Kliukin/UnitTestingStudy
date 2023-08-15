'use strict'

const {subtract} = require('../calclibrary')

describe('Testing subtract with integers', ()=> {

  const testValues=[
  // a,   b, expected
    [1,   1,    0],
    [3,   2,    1],
    [-2, -4,    2],
    [-2,  4,   -6],
    [ 2, -4,    6],
    [ 0,  0,    0],
    [ 0,  3,   -3],
    [ 3,  0,    3],
    [ 0, -3,    3],
    [-3,  0,   -3],
    [123, 200, -77]
  ]

  test.each(testValues)('subtract(%s,%s) = %s', (a,b,expected)=>{
    expect(subtract(a,b)).toBe(expected)
  })

})

describe('Testing subtract with floats', ()=>{
  const testValues=[
  // a,   b, expected
    [10,  11.5, -1.5],
    [2.5,  3,   -0.5],
    [-2.5, 3,  -5.5],
    [3,  -2.5,  5.5],
    [-2.5, -3,  0.5],
    [-2.5, -2.5,  0],
    [-2.5, 2.5,  -5],
    [2.4,  2.5,  -0.1]
  ]

  // %s is a placeholder for a string (you can read it in documentation for test.each)
  test.each(testValues)('subtract(%s,%s) = %s', (a,b,expected)=>{
    expect(subtract(a,b)).toBeCloseTo(expected)
    // we use toBeCloseTo because JS calculate 2.4 - 2.5 = -0.10000000000000009 and gives a fail of the test
  })
})

describe('Testing parameter is missing', ()=>{

  test('subtract() throws an exception', ()=>{
    expect(()=> subtract()).toThrow('parameter missing')
  })
  
  test('subtract(1) throws an exception', ()=>{
    expect(()=> subtract(1)).toThrow('parameter missing')
  })

  describe('Testing with test.each', ()=>{
    const testValues=[
      [1],
      ['a'],
      ['']
    ]

    test.each(testValues)('subtract(%s) throws "parameter missing"', (a)=>{
      expect(()=> subtract(a)).toThrow('parameter missing')
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

  test.each(testValues)('subtract(%s,%s) throws "only numbers allowed"', (a,b)=>{
    expect(()=>subtract(a,b)).toThrow('only numbers allowed')
  })
})

// We shoul change naming of describe if we don't want them to be shown in the same block
// This version is nicer to read in the report
describe('Testing parameters are not numbers. Version2.', ()=>{
  const testValues=[
    ["subtract('1','2')",'1','2'],
    ["subtract('a',1)",'a',1],
    ["subtract(1,'a')",1,'a'],
    ["subtract('a','b')",'a','b'],
    ["subtract('','')",'','']
  ]

  test.each(testValues)('%s throws "only numbers allowed"',(label,a,b)=>{
    expect(()=>subtract(a,b)).toThrow('only numbers allowed')
  })
})