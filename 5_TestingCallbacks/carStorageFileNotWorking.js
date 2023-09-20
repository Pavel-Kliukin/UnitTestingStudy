'use strict';
const fs=require('fs');
const storageFile='./cars.json';

module.exports=(key,value)=>{
    fs.readFile(storageFile,'utf8', (err,data)=>{
        if(err){
            return err;
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
            return found;
        }
    });
}