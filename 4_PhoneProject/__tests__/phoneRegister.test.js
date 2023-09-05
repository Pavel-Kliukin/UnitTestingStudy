'use strict';

const PhoneRegister = require('../phoneRegister')
const phones = require('../phones.json')
const modifiedData = require('./modifiedData.json')

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
    
    const expectedResult = ["home", "", "work"]
    const register = new PhoneRegister(modifiedData)
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

  describe('Test 4. Parameters missing', ()=>{

    test('1 parameter missing', ()=>{
      expect(()=> register.getPersonsNumberByType('Matt', 'River'))
      .toThrow('missing parameter')
    })
    
    test('2 parametrs missing', ()=>{
      expect(()=> register.getPersonsNumberByType('Matt'))
      .toThrow('missing parameter')
    })
    
    test('All parametrs missing', ()=>{
      expect(()=> register.getPersonsNumberByType())
      .toThrow('missing parameter')
    })
  })

  describe('Test 5. Testing empty string as type using modified data', ()=> {

    test('Test firstname: Leila, lastname: Hökki and type:"" ', ()=>{
      const modifiedregister = new PhoneRegister(modifiedData)
      expect(modifiedregister.getPersonsNumberByType('Leila','Hökki',''))
      .toEqual(["87654321"])
    })
  })
})

describe('Testing getAllNumbersByType', ()=>{

  describe('Test with default data', ()=>{
    const register = new PhoneRegister(phones)

    test('Testing type:work with default data', ()=>{
      const expectedResult = [
        {"firstname": "Leila", "lastname": "Hökki", "number":{"type":"work", "tel":"87654321"}},
        {"firstname": "Leila", "lastname": "Hökki", "number":{"type":"work", "tel":"05040302"}},
        {"firstname": "Matt", "lastname": "River", "number":{"type":"work", "tel":"2132314"}}
      ]
      expect(register.getAllNumbersByType('work'))
        .toEqual(expectedResult)
    })
    
    test('Testing type:mobile with default data', ()=>{
      const expectedResult = [
        {"firstname": "Matt", "lastname": "River", "number":{"type":"mobile", "tel":"040673458"}}
      ]
      expect(register.getAllNumbersByType('mobile'))
        .toEqual(expectedResult)
    })
    
    test('Testing type:x with default data', ()=>{
      expect(register.getAllNumbersByType('x'))
        .toEqual([])
    })
    
    test('Testing type:"" with default data', ()=>{
      expect(register.getAllNumbersByType(''))
        .toEqual([])
    })
    
    test('Testing missing parameter', ()=>{
      expect(()=>register.getAllNumbersByType())
        .toThrow('missing parameter')
    })
  })
  
  describe('Testing with modified data', ()=>{
    test('Testing with type:"" ', ()=>{
      const register=new PhoneRegister(modifiedData)
      const expectedResult = [
        {"firstname": "Leila", "lastname": "Hökki", "number":{"type":"", "tel":"87654321"}}
      ]

      expect(register.getAllNumbersByType(''))
        .toEqual(expectedResult)
    })
  })

})

describe('Test cases of getAllNumbers', ()=>{

  test('Testing with default data', ()=>{
    const register=new PhoneRegister(phones)
    expect(register.getAllNumbers())
      .toEqual(phones)
  })

  test('Testing some phones missing', ()=>{
    const testData = [
      {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
          {"type":"home", "number":"12345678"},
          {"type":"work", "number":"87654321"},
          {"type":"work", "number":"05040302"}
        ]
      },
      {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[]
      }
    ]
    const expectedResult = [
      {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
          {"type":"home", "number":"12345678"},
          {"type":"work", "number":"87654321"},
          {"type":"work", "number":"05040302"}
        ]
      }
    ]
    const register = new PhoneRegister(testData)
    expect(register.getAllNumbers())
      .toEqual(expectedResult)
  })
  
  test('Testing some phones missing 2 (first person does not have phones)', ()=>{
    const testData = [
      {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[]
      },
      {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
          {"type":"home", "number":"12345678"},
          {"type":"work", "number":"87654321"},
          {"type":"work", "number":"05040302"}
        ]
      },
      {
        "firstname":"Vera",
        "lastname":"River",
        "phones":[]
      }
    ]

    const expectedResult = [
      {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
          {"type":"home", "number":"12345678"},
          {"type":"work", "number":"87654321"},
          {"type":"work", "number":"05040302"}
        ]
      }
    ]

    const register = new PhoneRegister(testData)

    expect(register.getAllNumbers())
      .toEqual(expectedResult)
  })

  test('Testing all phones missing', ()=>{
    const testData = [
      {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[]
      },
      {
        "firstname":"Vera",
        "lastname":"River",
        "phones":[]
      },
      {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[]
      }
    ]

    const register = new PhoneRegister(testData)

    expect(register.getAllNumbers())
      .toEqual([])
  })
  
  test('Testing all persons missing', ()=>{
    const register = new PhoneRegister([])
    expect(register.getAllNumbers()).toEqual([])
  })

  test('Testing with empty type', ()=>{
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

    const expectedResult = [
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

    const register = new PhoneRegister(testData)
    expect(register.getAllNumbers()).toEqual(expectedResult)
  })
})

describe('Test cases for getName(number)', ()=>{
  
  const register=new PhoneRegister(phones)

  const testValues = [
    // number              expectedResult
    ["12345678", {"firstname":"Leila", "lastname":"Hökki"}],
    ["555555555", {"firstname":"Matt", "lastname":"River"}],
    ["05040302", {"firstname":"Leila", "lastname":"Hökki"}]
  ]

  test.each(testValues)('number %s returnes %p', (number, expectedResult)=>{
    expect(register.getName(number)).toEqual(expectedResult)
  })

  test('Testing with default data and not existing (wrong) number', ()=>{
    expect(register.getName("0000")).toBeNull()
  })
  
  test('Testing with missing parameter', ()=>{
    expect(register.getName()).toBeNull()
  })

})