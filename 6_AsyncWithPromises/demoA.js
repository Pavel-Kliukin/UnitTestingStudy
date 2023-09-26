'use strict'

function check(number){
  return new Promise((resolve,reject)=>{
    if(number < 10){
      reject(`number ${number} is less than 10`)
    }
    else{
      resolve(`number ${number} is 10 or more`)
    }
  })
}

// check(1)
//   .then(message=>console.log(message))
//   .catch(err=>console.log(err))

//async-await
async function test(){
  try{
    const result = await check(15)
    console.log('try: ',result)
    const result2 = await check(1)
    console.log('try: ',result)
    const result3 = await check(10)
    console.log('try: ',result)
  }
  catch(err){
    console.log('err: ',err);
  }
}

test()