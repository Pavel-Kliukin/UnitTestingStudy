'use strict'

const {search} = require('./carstorageFilePromises');

search('licence','ABC-1').then(console.log).catch(console.log)

// This one should return all cars
search().then(console.log).catch(console.log)