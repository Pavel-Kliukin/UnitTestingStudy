# Test cases of getAllNumbersByType

### **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of given type is found, an empty array [] is returned.
If a person have multiple numbers of the same type, each of them will be in it's own object.

If parameter is missing, the method throws an exepction `missing parameter`.

The format of returned object is:
```json
{"firstname": "", "lastname": "", "number":{"type":"", "tel":""}}
```

#### Example
`type` work

```json
[
  {"firstname": "Leila", "lastname": "Hökki", "number":{"type":"work", "tel":"87654321"}},
  {"firstname": "Leila", "lastname": "Hökki", "number":{"type":"work", "tel":"05040302"}},
  {"firstname": "Matt", "lastname": "River", "number":{"type":"work", "tel":"2132314"}}
]
```

## Tests

### Testing type: work with default data

### type: work

returns
```json
[
  {"firstname": "Leila", "lastname": "Hökki", "number":{"type":"work", "tel":"87654321"}},
  {"firstname": "Leila", "lastname": "Hökki", "number":{"type":"work", "tel":"05040302"}},
  {"firstname": "Matt", "lastname": "River", "number":{"type":"work", "tel":"2132314"}}
]
```

### type: mobile

returns
```json
[
  {"firstname": "Matt", "lastname": "River", "number":{"type":"mobile", "tel":"040673458"}}
]
```

### type: x
returns []

### type: ""
returns [] when the default data is used

### testing missing parameter
throws an exception `missing parameter`

## testing type with modified data

### type: ""

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
  {"firstname": "Leila", "lastname": "Hökki", "number":{"type":"", "tel":"87654321"}}
]
```