'use strict';

const search = require('../carStorageFileCallbackV2');

describe('testing callback', ()=>{
    test('search with licence "ABC-1"' , done=>{
        
        function cb(data){
            try{
                expect(data).toEqual([
                    { "model": "Bored T-model", "licence": "ABC-1" }
                ]);
                done();
            }
            catch(error){
                done(error);
            }
        }

        search('licence','ABC-1',cb);

    });
});
describe('testing with testEach', ()=>{
    const testValues=[
        //key,    value, expected
        ['licence','xyz',[]],
        ['model','Bored T-model',[
            { "model": "Bored T-model", "licence": "ABC-1" },
            { "model": "Bored T-model", "licence": "GTF-10" }
        ]]
    ];

    test.each(testValues)('%s,%s',(key,value,expected,done)=>{
        function cb(data) {
            try {
                expect(data).toEqual(expected);
                done();
            }
            catch (error) {
                done(error);
            }
        }
        search(key,value,cb);
    })
    
})