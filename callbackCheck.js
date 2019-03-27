const main = (x,y,callback) => {
    setTimeout(()=>{
        let z = x + y;
        return callback(z);
    },3000);
}
const calBak =(result) =>{
    console.log("This is the result " + result);
}
main(23,78,calBak);

console.log("I am out and waiting for result");

a = 'myfunction';

const myfunction = () => {
    console.log("Hello I am called");
}

