'use strict';
const fs=require('fs');
const storageFile='./cars.json';

//cb is the callback function
module.exports=(cb, key,value)=>{
    fs.readFile(storageFile,'utf8', (err,data)=>{
        if(err){
            cb(err);
        }
        else{
            let found=[];
            const cars=JSON.parse(data);
            if(key && value){
                for(const car of cars){
                    if(car[key]===value){
                        found.push(car);
                    }
                }
            }
            else{
                found=cars;
            }
            // console.log(found)
            cb(found);
        }
    });
}