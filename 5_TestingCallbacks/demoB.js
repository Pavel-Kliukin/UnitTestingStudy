'use strict';

const search=require('./carStorageFileCallback');

search(console.log);
console.log('one');
search(console.log, 'model','Bored T-model');
console.log('two');


search(data=>console.log(data),'licence','ABC-1');

search(data=>{
    const car=data[0];
    console.log(`model:${car.model}: ${car.licence}`);
}, 'licence', 'ABC-1');

function printData(data){
    console.log('###############');
    for(const car of data){
        console.log(`${car.model}: ${car.licence}`);
    }
    console.log('###############');
}

search(printData);
