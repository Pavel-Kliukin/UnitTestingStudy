'use strict';
//parameter cb is a callback function
function printNiceText(text,cb){
    cb(text);
}

// printNiceText('some text',console.log);

// printNiceText('more text', text=>{
//     console.log('###########');
//     console.log(text);
//     console.log('###########');
// });

function print(text){
    console.log('***************');
    console.log(text);
    console.log('***************');
}

printNiceText('some additional text',print);

function printWhenReady(text,cb){
    setTimeout(()=>cb(text), Math.random()*3000);
}

printWhenReady('xyz',console.log);
printNiceText('some more additional text', print);

function returnNiceText(text,cb){
    let message='#'.repeat(text.length+4);
    message += '\n# '+cb(text) +' #\n' + message;
    return message;
}

console.log(returnNiceText('testing nice text', text=>text.toUpperCase()));

printWhenReady(returnNiceText('new text',text=>text.toUpperCase()),console.log);

function decorator(text){
    return `* ${text} *`;
}

console.log(returnNiceText('aaaaaaaa',decorator));

console.log(returnNiceText(decorator('oooo'),text=>text.toUpperCase()))

function returnDecoratedText(text, cb) {
    const newText = cb(text);
    let message = '#'.repeat(newText.length + 4);
    message += '\n# ' + newText + ' #\n' + message;
    return message;
}

console.log(returnDecoratedText('aaaaaaaa', decorator));

function decorator2(text) {
    return `*** ${text.toUpperCase()} ***`;
}

console.log(returnDecoratedText('aaaaaaaa', decorator2));

printWhenReady(returnDecoratedText('aaaaddddaaaa', decorator2), console.log);