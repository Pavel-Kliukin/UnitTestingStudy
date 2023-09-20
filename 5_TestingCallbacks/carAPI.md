# Carstorage API

## cars.json
```json
[
    {"model":"Bored T-model", "licence":"ABC-1"},
    {"model":"Nova", "licence":"XYZ-123"},
    {"model":"Bored T-model", "licence":"GTF-10"},
    {"model":"XCT", "licence":"B-1"}
]
```

## **search(key, value)**

function returns an array of cars that matches the given criterion. If no match, returns an empty array.

if parameters are missing, returns all cars in an array.

parameters:
- key: model or licence
- value: value to be searched

When implemented with callback, add one parameter to the list for the callback function.
either **search(cb, key, value)** or **search(key, value, cb)**