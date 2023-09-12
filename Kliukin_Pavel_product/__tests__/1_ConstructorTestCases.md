# Test cases for constructor

### **constructor(data)**

Initializes ProductStorage object

>Parameters:
>>The data storage json object is passed as a parameter to the constructor.

>Returns:
>>

>Throws:
>>If the parameter is missing, constructor throws an error `'data storage missing'`

## Test 1: If data passed to consctructor it should return nothing


## Test 2: missing parameter throws an exception
```js
new ProductStorage();
```

expect:

This will throw an exception `'data storage missing'`