### **get_total_price_of_products_by_type(searchValue)**
returns the total price of all products that have the same type than the given searchValue

>Parameters:
>>searchValue is the type of the product to be searched

>Returns:
>>total cumulative price of products matching the searchValue

>Throws:
>>if no product with the given searchValue is  found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

## All tests will be using modified data:
The modified data will be based on the default data with three objects added. First object will have empty type `type: ""`. The second object will have undefined price `price: null`. The third object will have undefined stock `stock: null`.

```json
[
  {
    "productNumber": 6,
    "productname": "Mercury2",
    "type": "",
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
  },
  {
    "productNumber": 8,
    "productname": "Blade",
    "type": "knife",
    "price": 25,
    "stock": null,
    "colors": [
      "white",
      "green",
      "yellow"
    ]
  }
]
```


## Test 1: Test with modified data. If price or stock are null the result of their multiplication should be 0

```json
testValues=[
  // searchValue    expectedResult
          ["toaster", 5500],
          ["knife", 0],
          ["", 1500],
          ["tv", 12300]
]
```

## Test 2: The product with given type doesn't exist
given parameter: `x`

Throws an error: `'nothing found with given'`

## Test 3: Parameter is missing
No parameter given

Throws an error: `'missing parameter'`