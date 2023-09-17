### **get_All_products_By_type(searchValue)**
searches products with given type

>Parameters:
>>searchValue is the type of the product to be searched

>Returns:
>>Returns an array of product objects of given type. If no product of given type is found, returns an empty array.

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

## Test 1. Given type matches some of the products.

```json
testValues=[
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
```

## Test 2. Given key doesn't match any product's type.

Test value: "x"
Should return: []

Test value: 100
Should return: []

## Test 3. Parameter is missing.

Should throw an error `'missing parameter'`