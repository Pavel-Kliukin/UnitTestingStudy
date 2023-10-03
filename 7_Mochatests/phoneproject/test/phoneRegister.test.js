'use strict'

const expect = require('chai').expect;

const PhoneRegister = require('../phoneRegister');
const phones = require('../phones.json')

describe('test getTypes', function(){
  it('using default data', function(){
    const register = new PhoneRegister(phones)
    expect(register.getTypes()).to.deep.equal(['home', 'work', 'mobile'])
  })

  it('emty register', function(){
    const register = new PhoneRegister([])
    expect(register.getTypes()).to.deep.equal([])
  })
 
  // The same and more readable way
  it('emty register', function(){
    const register = new PhoneRegister([])
    expect(register.getTypes()).to.be.empty
  })
})

describe('test getName()', function(){
  const register = new PhoneRegister(phones)

  it('test number "12345678"', function(){
    expect(register.getName('12345678')).to.deep.equal({firstname: 'Leila', lastname: 'Hökki'})
  })

  it('test number "0000"', function(){
    expect(register.getName('0000')).to.be.null
  })
})

describe('test hasNumber()', function(){
  const register = new PhoneRegister(phones)

  it('test number "12345678"', function(){
    expect(register.hasNumber('12345678')).to.be.true
  })

  it('test number "0000"', function(){
    expect(register.hasNumber('0000')).to.be.false
  })
})
