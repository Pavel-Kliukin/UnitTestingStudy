'use strict'

module.exports = class Dice {
  #upperBound // this is to protect upperBound from changes by users with dice.upperBound = something
  // we also should use this.#upperBound in advance
  #dotCount
  #minimum

  constructor(upperBound=6) {

    if(!Number.isInteger(upperBound)){
      throw new Error('upper bound must be an integer')
    }

    if(upperBound>20){
      throw new Error('upper bound too big')
    }
    
    if(upperBound<2){
      throw new Error('upper bound too small')
    }

    this.#upperBound = upperBound
    this.#dotCount = 0
    this.#minimum = 1
  }

  // METHODS
  roll(){
    this.#dotCount=Math.floor(Math.random()*this.#upperBound)+1
  }

  toString(){
    if(this.#dotCount===0) {
      return 'Not rolled yet'
    } else {
      return `${this.#dotCount}`
    }
    // return this.dotCount===0 ? 'Not rolled yet' : `${this.dotCount}`
  }

// SETTERS (User can set values with setters)

  // This is just an example of what setter is, we don't need it
  
  // set maximumValue(newValue){
  //   this.#upperBound=newValue
  // }


  // GETTERS (we need them for users, so they could read the properties of class, but not change them)

  get dots(){
    return this.#dotCount
  }
  
  get minimumValue(){
    return this.#minimum
  }
  get maximumValue(){
    return this.#upperBound
  }

}