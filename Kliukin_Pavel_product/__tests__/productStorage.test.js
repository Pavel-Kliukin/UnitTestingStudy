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
            [5,   undefined],
            [0,   undefined]
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

describe ('Testing get_a_product_matching_productNumber', ()=> {
  
  const products = new ProductStorage(productsStorage);

  const testValues=[
    // searchKey    expectedResult
            [1,   {
                    "productNumber": 1,
                    "productname": "NexGen 2",
                    "type": "radio",
                    "price": 300,
                    "stock": 10,
                    "colors": [
                      "white",
                      "yellow",
                      "orange"
                    ],
                    "info": {
                      "energyclass": "E",
                      "model": "chrome",
                      "comments": "high capacity"
                    }
                  }],
  
            [2,   {
                    "productNumber": 2,
                    "productname": "NexGen 2",
                    "type": "phone",
                    "price": 300,
                    "stock": 25,
                    "colors": [
                      "blue",
                      "white",
                      "red"
                    ],
                    "info": {
                      "energyclass": "A+",
                      "model": "GT",
                      "comments": "-"
                    }
                  }],
            [5,   {
                    "productNumber": 5,
                    "productname": "Mercury",
                    "type": "toaster",
                    "price": 15,
                    "stock": 100,
                    "colors": [
                      "white",
                      "green",
                      "yellow"
                    ]
                  }],
            [0,   {
                    "productNumber": 0,
                    "productname": "Apple",
                    "type": "food",
                    "price": 5,
                    "stock": 11,
                    "colors": [
                      "red",
                      "green"
                    ]
                  }]
  ]

  test.each(testValues)('%s returns %s', (searchKey, result) => {
    expect(products.get_a_product_matching_productNumber(searchKey))
      .toEqual(result)
  })

  test('No matching product with searcKey = 10', () => {
    expect(products.get_a_product_matching_productNumber(10))
      .toEqual(null)
  })
  
  test('No matching product with searcKey = -1', () => {
    expect(products.get_a_product_matching_productNumber(-1))
      .toEqual(null)
  })

  test('Parameter is missing', () => {
    expect(() => products.get_a_product_matching_productNumber())
      .toThrow('missing parameter')
  })
})

describe('Testing get_All_products_By_type', ()=> {
    
  const products = new ProductStorage(productsStorage);
  
  const testValues=[
                // searchKey    expectedResult
                ["radio",   [
                  {
                    "productNumber": 1,
                    "productname": "NexGen 2",
                    "type": "radio",
                    "price": 300,
                    "stock": 10,
                    "colors": [
                      "white",
                      "yellow",
                      "orange"
                    ],
                    "info": {
                      "energyclass": "E",
                      "model": "chrome",
                      "comments": "high capacity"
                    }
                  }
                ]
                ],

                ["toaster",   [
                          {
                            "productNumber": 4,
                            "productname": "Beast II",
                            "type": "toaster",
                            "price": 200,
                            "stock": 20,
                            "colors": [
                              "black",
                              "orange",
                              "green"
                            ],
                            "info": {
                              "energyclass": "C",
                              "model": "gold",
                              "comments": "-"
                            }
                          },
                          {
                            "productNumber": 5,
                            "productname": "Mercury",
                            "type": "toaster",
                            "price": 15,
                            "stock": 100,
                            "colors": [
                              "white",
                              "green",
                              "yellow"
                            ]
                          },
                          {
                            "productNumber": 7,
                            "productname": "Mercury3",
                            "type": "toaster",
                            "price": null,
                            "stock": 100,
                            "colors": [
                              "white",
                              "green",
                              "yellow"
                            ]
                          }
                      ]
                ],
                ["food", [
                        {
                            "productNumber": 0,
                            "productname": "Apple",
                            "type": "food",
                            "price": 5,
                            "stock": 11,
                            "colors": [
                              "red",
                              "green"
                            ]
                          }
                      ]
                ]
  ]

  test.each(testValues)('%s returns %s', (searchValue, result) => {
    expect(products.get_All_products_By_type(searchValue))
      .toEqual(result)
  })

  test('No matching product with searcKey = "x"', () => {
    expect(products.get_All_products_By_type("x"))
      .toEqual([])
  })
  
  test('No matching product with searcKey = 100', () => {
    expect(products.get_All_products_By_type(100))
      .toEqual([])
  })

  test('Parameter is missing', () => {
    expect(() => products.get_All_products_By_type())
      .toThrow('missing parameter')
  })
})

describe('Testing get_Price', ()=> {
      
    const products = new ProductStorage(productsStorage);
    
    const testValues=[
    // productNumber  expectedResult
                [0, 5],
                [2, 300],
                [7, null]
    ]
  
    test.each(testValues)('%s returns %s', (productNumber, result) => {
      expect(products.get_Price(productNumber))
        .toEqual(result)
    })
  
    test('No matching product with productNumber = 100', () => {
      expect(() => products.get_Price(100))
        .toThrow('nothing found with given')
    })
  
    test('Parameter is missing', () => {
      expect(() => products.get_Price())
        .toThrow('nothing found with given')
    })
})