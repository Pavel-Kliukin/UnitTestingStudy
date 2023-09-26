'use strict'

function start(){
  return new Promise((resolve,reject)=>
    setTimeout(()=>resolve('Task started'), 2000)
  )
}

function middle(data){
  return new Promise((resolve,reject)=>
    setTimeout(()=>resolve(`${data}, we are in the middle`), 3000)
  )
}

function end(data){
  return new Promise((resolve,reject)=>
    setTimeout(()=>resolve(`${data}, end of task`), 1000)
  )
}

// start()
//   .then(data=>middle(data))
//   .then(result=>end(result))
//   .then(message=>console.log(message+'. We are done!'))


// async function doTasks(){
//   const data = await start()
//   console.log(data+ '. Moving to the next phase...');
//   const result = await middle(data)
//   console.log(result+ '. Moving to the next phase...');
//   const message = await end(result)
//   console.log(message+'. We are done!')
// }
// doTasks()

// This anonomous function starts automatically unlike doTask that we have to start with doTask()
(async ()=>{
  const data = await start()
  console.log(data+ '. Moving to the next phase...');
  const result = await middle(data)
  console.log(result+ '. Moving to the next phase...');
  const message = await end(result)
  console.log(message+'. We are done!')
})()