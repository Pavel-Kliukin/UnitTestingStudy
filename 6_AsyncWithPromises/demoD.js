'use strict'

function start(){
  return Promise.resolve('Task started')
}

function middle(data){
  return Promise.resolve(data+' we are in the middle')
}

function end(data){
  return Promise.resolve(data+' end of task')
}

// It works as a chain
start()
  .then(data=>middle(data))
  .then(result=>end(result))
  .then(message=>console.log(message+'. We are done!'))

// The below is the same as above
async function doTasks(){
  const data = await start()
  const result = await middle(data)
  const message = await end(result)
  console.log(message+'. We are done!')
}
doTasks()


start()
  .then(data=>{
    console.log(data+ '. Moving to the next phase');
    return middle(data) // we need this return to pass the data to the next then
  })
  .then(result=>end(result))
  .then(message=>console.log(message+'. We are done!'))