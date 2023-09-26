function randomPromiseObject(){
  return new Promise((resolve,reject)=>{
    // One of these two functions will be called randomly
    setTimeout(()=>resolve('resolves with delay'), Math.random()*2000) 
    setTimeout(()=>reject('rejects with timeout'), Math.random()*2000)
  })
} 

const promises = [
  randomPromiseObject(),
  randomPromiseObject(),
  randomPromiseObject()
]

// const promises = [
//   Promise.resolve('first ok'),
//   Promise.reject('second rejected'),
// ]

// Promise.all(promises)
//   .then(result=>console.log(result))
//   .catch(err=>console.log('All rejected. '+err))

async function runAll(promiseArray){
  try{
    const result = await Promise.all(promiseArray)
    for(const item of result){
      console.log(item)
    }
  }
  catch(err){
    console.log('All rejected.');
  }
}

runAll(promises)