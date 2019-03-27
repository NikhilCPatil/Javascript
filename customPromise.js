const codeBlock = () => {

    return Promise.resolve().then( v => {
        let i = 0;
        while (i < 1000000000){i++;}

        return('Billion Loops are done');
    });
}

console.log("Syncronous 1");

console.log(codeBlock());

console.log('Syncronous 2');