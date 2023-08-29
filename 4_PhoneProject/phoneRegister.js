'use strict'

module.exports = class PhoneRegister {
  #register
  constructor(data){
    if (!data) throw new Error('phone data missing')
    this.#register=data
  }

  // METHODS
  getTypes(){

    const foundTypes =[] // With const we still can push to Array, but not assign any new values

    for(const person of this.#register){
      for(const phone of person.phones){
        if(!foundTypes.includes(phone.type)){
          foundTypes.push(phone.type)
        }
      }
    }
    return foundTypes
  }

  getPersonsNumberByType(firstname, lastname, type){
    if(firstname && lastname && type) {
      const numbersFound=[]
      for (const person of this.#register){
        if(person.firstname===firstname && person.lastname===lastname){
          for(const phone of person.phones){
            if(phone.type===type){
              numbersFound.push(phone.number)
            }
          }
        }
      }
      return numbersFound
    } else {
      
    }
  }
}