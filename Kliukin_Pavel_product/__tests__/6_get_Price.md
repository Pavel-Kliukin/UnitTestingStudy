### **get_Price(productNumber)**
get the price of the product

>Parameters:
>>productNumber of the product which price is to be returned

>Returns:
>>returns the price of a product matching the given productNumber

>Throws:
>>if no product with the given productNumber is  found throws an exeption `'nothing found with given'`

## Test 1. Given productNumber matches one of the products

```json
testValues=[
  // productNumber    expectedResult
  [0, 5],
  [2, 300],
  [7, null]
]
```

## Test 2. Given productNumber doesn't match any products

test Value: 100
Should throw an exception: `'nothing found with given'`

test Value: undefined
Should throw an exception: `'nothing found with given'`

