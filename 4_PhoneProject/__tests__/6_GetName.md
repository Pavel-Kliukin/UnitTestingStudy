# Test cases for getName(number)

### **getName(number)**

The method searches the given phone number from the regisrty. If the number is found, method returns the owner of that number as an object:

```json
 {"firstname":"", "lastname":""}
```

If no phone with given number is found, the method returnes `null`.
If the parameter is missing, `null` is also returned.

## Tests

### Testing with default data and existing number (multiple numbers to test)

```json
testValues=[
  // number              expectedResult
  ["12345678", {"firstname":"Leila", "lastname":"Hökki"}],
  ["555555555", {"firstname":"Matt", "lastname":"River"}],
  ["05040302", {"firstname":"Leila", "lastname":"Hökki"}]
]
```

### Testing with default data and not existing number

number = "0000"

returnes `null`


### Testing with missing parameter

returnes `null`