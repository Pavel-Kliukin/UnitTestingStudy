'use strict'

const ProductStorage = require('../productStorage')
const productsStorageByDefault = require('../datastorage.json')
const productsStorage = require('../modifiedDataStorage.json')

describe('Testing constructor', ()=>{
  
  test('Test with data (should return nothing)', ()=>{
    const products = new ProductStorage(productsStorageByDefault);
    expect(products).toEqual({})
  })
  
  test('Missing parameter throws an exception', ()=>{
    expect(()=> new ProductStorage())
      .toThrow('data storage missing')
  })
})

describe('Testing get_total_price_of_products_by_type', ()=> {

    const products = new ProductStorage(productsStorage);
    
    const testValues = [
    // searchValue    expectedResult
        ["toaster",   5500],
        ["knife",     0],
        ["",          1500],
        ["tv",        12300]
    ]

  test.each(testValues)('%s, returns %s', (type, result)=> {
    expect(products.get_total_price_of_products_by_type(type))
      .toEqual(result)
  })

  test('Test when product with given type does not exist', ()=> {
    expect(()=> products.get_total_price_of_products_by_type("x"))
      .toThrow('nothing found with given')
  })
  
  test('Test whit missing parameter', ()=> {
    expect(()=> products.get_total_price_of_products_by_type())
      .toThrow('missing parameter')
  })
})

describe('Testing get_info', ()=> {

  const products = new ProductStorage(productsStorage);

  const testValues=[
    // searchKey    expectedResult
            [1,   {
                    "energyclass": "E",
                    "model": "chrome",
                    "comments": "high capacity"
                  }],
  
            [2,   {
                    "energyclass": "A+",
                    "model": "GT",
                    "comments": "-"
                  }],
            [5,   undefined]
  ]

  test.each(testValues)('%s, returns %s', (searchKey, result)=> {
    expect(products.get_info(searchKey))
      .toEqual(result)
  })

  test('Test whith no matching product', ()=> {
    expect(products.get_info(25))
      .toEqual(null)
  })
  
  test('Test whith no parameter passed', ()=> {
    expect(products.get_info())
      .toEqual(null)
  })

})