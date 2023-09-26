'use strict'

// Now it's a function that returns a promise object (not an object as in demoB.js)
function randomPromiseObject(){
  return new Promise((resolve,reject)=>{
    // One of these two functions will be called randomly
    setTimeout(()=>resolve('resolves with delay'), Math.random()*2000)
  
    setTimeout(()=>reject('rejects with timeout'), Math.random()*2000)
  })
} 

// Here we runs the function that returns a promise object
// So the result will be different each time (unlike in demoB.js)
randomPromiseObject().then(console.log).catch(console.log)

randomPromiseObject()
  .then(message=>console.log(message))
  .catch(err=>console.log(err))

randomPromiseObject()
  .then(message=>console.log(message))
  .catch(err=>console.log(err))