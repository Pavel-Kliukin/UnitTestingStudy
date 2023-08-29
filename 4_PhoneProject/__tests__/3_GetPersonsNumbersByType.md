# Tests cases for getPersonsNumbersByType

### **getPersonsNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of the given `type` belonging to given person with `firstname` and `lastname`.

For example Leila Hökki and work:
```json
["87654321", "05040302"]
```

Matt River and mobile:
```json
["040673458"]
```

if no person with given name is found, an empty array [] is returned.
if no number with given type is found, an empty array [] is returned.
if at least one parameter is missing, an exception `missing parameter` is thrown.

## Tests

All tests use the default data

### Test 1. Leila Hökki and work.

Should return:
```json
["87654321", "05040302"]
```

### Test 2. Matt River and mobile.

Should return:
```json
["040673458"]
```

### Test 3. Wrong type or name

Test with values:
- firstname Matt, lastname River, type x
- firstname Matt, lastname x, type mobile
- firstname x, lastname River, type mobile


Should return:
```json
[]
```


### Test 4. Parameters missing
1 parameter misiing: `Matt`,`River`
2 parameter misiing: `Matt`
All parameter misiing: 

Throw exception `missing parameter`