'use strict';

const PhoneRegister = require('../phoneRegister')
const phones = require('../phones.json')

describe('Testing constructor', ()=>{
  test('Missing parameter throws an exception', ()=>{
    expect(()=> new PhoneRegister()).toThrow('phone data missing')
  })
})

describe('Tests for getTypes', ()=>{

  test('getTypes with default data json', ()=>{
    const register = new PhoneRegister(phones)
    expect(register.getTypes()).toEqual(["home", "work", "mobile"]) //There is a difference between .toBe and .toEqual 
  })

  test('getTypes with empty type modified data json', ()=>{
    
    const testData = [
      {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
          {"type":"home", "number":"12345678"},
          {"type":"", "number":"87654321"},
          {"type":"home", "number":"05040302"}
        ]
      },
      {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[
          {"type":"work", "number":"2132314"}
        ]
      }
    ]

    const expectedResult = ["home", "", "work"]
    const register = new PhoneRegister(testData)
    expect(register.getTypes()).toEqual(expectedResult)
  })

  test('Only home phones', ()=>{
    const testData = [
      {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
          {"type":"home", "number":"12345678"},
          {"type":"home", "number":"05040302"}
        ]
      },
      {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[
          {"type":"home", "number":"2132314"}
        ]
      }
    ]

    const register = new PhoneRegister(testData)
    expect(register.getTypes()).toEqual(["home"])
  })

  test('Person have no phones', ()=>{
    const testData = [
      {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[]
      },
      {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[]
      }
    ]

    const register = new PhoneRegister(testData)
    expect(register.getTypes()).toEqual([])
  })

  test('No persons', ()=> {
    const register = new PhoneRegister([])
    expect(register.getTypes()).toEqual([])
  })
})

describe ('Testing getPersonsNumbersByType', ()=>{
  const register = new PhoneRegister(phones)

  describe('Test 1-3', ()=>{
    const testValues=[
      // fn       ln      type      result
      ['Leila', 'Hökki', 'work', ["87654321", "05040302"]],
      ['Matt', 'River', 'mobile', ["040673458"]],
      ['Matt', 'River', 'x', []],
      ['Matt', 'x', 'mobile', []],
      ['x', 'River', 'mobile', []],
    ]

    test.each(testValues)('%s, %s, %s returns %s', (fn, ln, type, result)=>{
      expect(register.getPersonsNumberByType(fn, ln, type)).toEqual(result)
    })
  })

})