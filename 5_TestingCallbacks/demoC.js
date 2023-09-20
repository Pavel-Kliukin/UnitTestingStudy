'use strict';

const search=require('./carStorageFileCallbackV2');
try{
    search(console.log);
    console.log('one');
    search('model', 'Bored T-model', console.log);
    console.log('two');


    search('licence', 'ABC-1',data=>console.log(data));

    search('licence', 'ABC-1',data=>{
        const car=data[0];
        console.log(`model:${car.model}: ${car.licence}`);
    });

    function printData(data){
        console.log('###############');
        for(const car of data){
            console.log(`${car.model}: ${car.licence}`);
        }
        console.log('###############');
    }

    search(printData);
}
catch (err) {
    console.log(err)
}