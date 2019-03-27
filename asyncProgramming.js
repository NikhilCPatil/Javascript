console.log('Syncoconous 1');

setTimeout(_=> console.log('Timeout 2'),0);

Promise.resolve().then(_=>console.log('Promise'));

console.log('Syncoronous 4');

