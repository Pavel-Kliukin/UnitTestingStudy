'use strict'

const randomPromiseObject = new Promise((resolve,reject)=>{
  // One of these two functions will be called randomly
  setTimeout(()=>resolve('resolves with delay'), Math.random()*2000)

  setTimeout(()=>reject('rejects with timeout'), Math.random()*2000)
})

// We created only one promise object. 
// So when the state is reached it can't be changed after.
// All calls result the same, because it's the same object.
randomPromiseObject.then(console.log).catch(console.log)

randomPromiseObject
  .then(message=>console.log(message))
  .catch(err=>console.log(err))

randomPromiseObject
  .then(message=>console.log(message))
  .catch(err=>console.log(err))