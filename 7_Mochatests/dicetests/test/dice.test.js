'use strict'

const expect = require('chai').expect;

const Dice = require('../dice');

describe('methods defined', function(){
  const dice=new Dice()

  it('getter maximumValue is defined', function(){
    expect(dice).to.have.a.property('maximumValue') // we can write "to.have.a.property" or "to.have.property" It's the same
  })

  it('method roll is defined', function(){
    expect(dice).to.have.property('roll')
  })
})

describe('test roll', function(){
  let dice

  beforeEach(function(){
    dice = new Dice()
  })

  it('test not rolled yet', function(){
    expect(dice.dots).to.equal(0)
  })

  it('dice rolled', function(){
    dice.roll()
    expect(dice.dots).to.be.within(1,6)
  })
})

describe('test toString', function(){
  let dice

  beforeEach(function(){
    dice = new Dice()
  })

  it('test not rolled yet', function(){
    expect(dice.toString()).to.equal('Not rolled yet')
  })

  it('dice rolled', function(){
    dice.roll()
    expect(dice.toString()).to.equal(`${dice.dots}`)
  })
})