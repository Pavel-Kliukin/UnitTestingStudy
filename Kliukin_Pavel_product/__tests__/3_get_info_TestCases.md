### **get_info(searchKey)**
searches the product matching the searchKey and if match is found returns the info object otherwise null is returned

>Parameters:
>>searchKey is the productNumber of the product

>Returns:
>>returns the info object of the product matching the searchKey. If no product matching the given searchKey is found or searchKey is missing, null will be returned

>Throws:
>>

## Test 1. Test case when given searchKey is matching with one of the products. When matching product has no info object then "undefined" will be returned.

```json
testValues=[
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
          [5,   null]
]
```

## Test 2. Test case when no matching products were found.

testValue = 25

Should return: null

## Test 3. Test case when no parameter was passed.

Should return: null