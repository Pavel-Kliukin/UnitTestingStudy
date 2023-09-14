### **get_a_product_matching_productNumber(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique.

>Parameters:
>>searchKey is the primary key productNumber of the product

>Returns:
>>returns the product object matching the productNumber or null if there is no match

>Throws:
>>if parameter searchKey is missing, throws an exception `'missing parameter'`

## Test 1. Given key matches one of the products.

```json
testValues=[
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
```

## Test 2. Given key doesn't match any product.

Test value: 10
Should return: null

Test value: -1
Should return: null

## Test 3. Parameter is missing.

Should throw an error `'missing parameter'`