'use strict'

const {search} = require('../carstorageFilePromises');

describe('Testing with key "licence" and value "ABC-1" to resolve', ()=>{
  const result = [{"model":"Bored T-model", "licence":"ABC-1"}]

  // First the test with .then
  test('then', ()=>{
    return search('licence','ABC-1')
      .then(data=>expect(data).toEqual(result))
  })

  // Now the same test, but with async/await
  test('async-await', async ()=>{
    const data = await search('licence','ABC-1')
    expect(data).toEqual(result)
  })

  // Now the same test, but with resolves
  // In this case we need "return" before "expect" because we are not using .then
  test('resolves', ()=>{
    return expect(search('licence','ABC-1')).resolves.toEqual(result)
  })

  // Now the same test, but with async/await and resolves
  test('resolves with async-await', async ()=>{
    await expect(search('licence','ABC-1')).resolves.toEqual(result)
  })
})

describe('Testing with key "licence" and value "ABC-1" to reject', ()=>{

  test('catch', ()=>{
    expect.assertions(1) // This is needed to make sure that the catch is called
    return search()
      .catch(err => expect(err)
      .toBe('parameter missing'))
  })

  test('async-await', async ()=>{
    try{
      await search()
    }
    catch(err){
      expect(err).toBe('parameter missing')
    }
  })

  test('rejects', ()=>{
    return expect(search()).rejects.toBe('parameter missing')
  })

  test('rejects with async-await', async ()=>{
    await expect(search()).rejects.toBe('parameter missing')
  })
})

describe('test with key "model"', ()=>{
  const resultForBoredTmodel = [
    {"model":"Bored T-model", "licence":"ABC-1"},
    {"model":"Bored T-model", "licence":"GTF-10"}
  ]

  const resultForNova = [
    {"model":"Nova", "licence":"XYZ-123"}
  ]

  test('model "Bored T-model"', ()=>{
    return expect(search('model','Bored T-model'))
      .resolves.toEqual(resultForBoredTmodel)
  })

  test('model "Nova"', ()=>{
    return expect(search('model','Nova'))
      .resolves.toEqual(resultForNova)
  })

  test('one parameter missing', ()=>{
    return expect(search('model'))
      .rejects.toBe('parameter missing')
  })

  test('search with licence "X"', ()=>{
    return expect(search('licence','X'))
      .resolves.toEqual([])
  })
})