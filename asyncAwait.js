const getFruit = async (name) => {
    const fruits = {
        'pineapple' : 'green',
        'apple' : 'red',
        'mango' : 'yellow'
    }

    return fruits[name];
}


const makeSmoothee = async () => {
    const a =  getFruit('pineapple');
    const b =  getFruit('apple');
    const smoothee = await Promise.all([a,b]);
    return smoothee;
    // return [a,b]
}
console.log(makeSmoothee().then( v => console.log(v)));