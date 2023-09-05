### **getAllNumbers()**

Returnes all phone numbers in an array, each as an object of form:

```json
 {"firstname":"", "lastname":"", "phones":[]}
```

The phone object in phones array is of form:

```json
 {"type":"", "number":""}
```

If a person doesn't have a phone (the phone field is an empty array), then the person is not added into the result array. If all persons are missing, an empty array is returned.

## Tests

### Testing with default data

returns the same array that was used to create the register

### Testing some phones missing

testData:

```json
[
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
```

returnes
```json
[
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
```

### Testing some phones missing 2 (first person doesn't have phones)

testData:

```json
[
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
  }
]
```

returnes
```json
[
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
```

### Testing all phones missing

testData:

```json
[
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
```

returns an empty array []


### Testing all persons missing

testData is an empty array []
returns an empty array []


### Testing with empty type

testData:

```json
[
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
```

returns

```json
[
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
```
