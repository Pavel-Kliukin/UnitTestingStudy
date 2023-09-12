Pavel Kliukin


# **End assignment** (product)


## Task: Create and test ProductStorage class
Create a class `ProductStorage` for product data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage. You may need to modify the data or add more versions for testing. 

### datastorage.json

```json
[
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
  },
  {
    "productNumber": 2,
    "productname": "NexGen 2",
    "type": "phone",
    "price": 300,
    "stock": 25,
    "colors": [
      "blue",
      "white",
      "red"
    ],
    "info": {
      "energyclass": "A+",
      "model": "GT",
      "comments": "-"
    }
  },
  {
    "productNumber": 3,
    "productname": "MaxEffect 2000",
    "type": "tv",
    "price": 123,
    "stock": 100,
    "colors": [
      "white",
      "yellow",
      "blue"
    ],
    "info": {
      "energyclass": "D",
      "model": "XL",
      "comments": "high capacity"
    }
  },
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
  }
]
```


# ProductStorage API

## Constructor

### **constructor(jsondata)**
Initializes ProductStorage object

>Parameters:
>>The data storage json object is passed as a parameter to the constructor.

>Returns:
>>

>Throws:
>>If the parameter is missing, constructor throws an error `'data storage missing'`


## Methods


### **get_total_price_of_products_by_type(searchValue)**
returns the total price of all products that have the same type than the given searchValue

>Parameters:
>>searchValue is the type of the product to be searched

>Returns:
>>total cumulative price of products matching the searchValue

>Throws:
>>if no product with the given searchValue is  found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_info(searchKey)**
searches the product matching the searchKey and if match is found returns the info object otherwise null is returned

>Parameters:
>>searchKey is the productNumber of the product

>Returns:
>>returns the info object of the product matching the searchKey. If no product matching the given searchKey is found or searchKey is missing, null will be returned

>Throws:
>>

### **get_a_product_matching_productNumber(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique.

>Parameters:
>>searchKey is the primary key productNumber of the product

>Returns:
>>returns the product object matching the productNumber or null if there is no match

>Throws:
>>if parameter searchKey is missing, throws an exception `'missing parameter'`

### **get_All_products_By_type(searchValue)**
searches products with given type

>Parameters:
>>searchValue is the type of the product to be searched

>Returns:
>>Returns an array of product objects of given type. If no product of given type is found, returns an empty array.

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_Price(productNumber)**
get the price of the product

>Parameters:
>>productNumber of the product which price is to be returned

>Returns:
>>returns the price of a product matching the given productNumber

>Throws:
>>if no product with the given productNumber is  found throws an exeption `'nothing found with given'`

# The project

## Create a folder for the testproject
- the name of the folder should be `Kliukin_Pavel_product`
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder `__tests__` for tests
- edit the test script in the **package.json**
- use **datastorage.json** as a data source

## Design test cases in separate .md -file
## Implement all tests and test them to fail
## Implement corresponding methods
## Test the project until all tests pass

## Submit the project folder
Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file