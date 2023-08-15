'use strict'

const {divide} = require('../calclibrary')

describe('Testing division', ()=>{
  const testValues=[
    [0,0, Number.NaN],
    [2,0, Number.POSITIVE_INFINITY],
    [-2, 0, Number.NEGATIVE_INFINITY]
  ]

  test.each(testValues)('divide(%s,%s) = %s', (a,b,expected)=>{
    expect(divide(a,b)).toBe(expected)
  })
})