# Dice API

This is Dice class for dice games. Dice holds the number of dots. 
The number of dots is between 1 and given upper bound (included). 
The minimum upper bound is 2.
The maximum upper bound is 20.

If the dice hasn't been rolled, the number of dots is 0 (the first initial state).
After the dice has been rolled, the dot count can't become zero again.

## Operations

### **constructor(upperbound)**

- initializes the dice upper bound that is passed as parameter
- if no upper bound is given, the default upper bound will be 6
- initializes the dot count to 0

- if upper bound is not a number and not an integer, throw an exception
  `upper bound must be an integer`

- if the upper bound is not between 2 and 20, an exception is thrown:
  - upper bound <2: `upper bound too small`
  - upper bound >20: `upper bound too big`

### methods

#### **roll**
- rolls the dice
- when rolled, the dot count become a random number between 1 and upper bound
- returns nothing (just sets the count)

#### **toString**
- returns dot count as a string. For example: `'4'`
- if dice hasn't been rolled yet, returns a text `'Not rolled yet'`

### Getters

#### **dots**
- returns the number of dots

#### **minimumValue**
- returns the minimum number of dots. It should be 1.

#### **maximumValue**
- returns the upper bound of dice.