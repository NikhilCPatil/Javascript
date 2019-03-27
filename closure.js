/**
 * Closures are a combination of functions and lexical environment withen which the function was decared
 * Lexical scoping uses the location where the varible was decalred in the source code to determine where the
 * variable is available
 * @return {display}
 */

//Example 1

const closures = () => {
    debugger;
    let name = 'nikhil';
    const display = () => {
        debugger;
        console.log(name);
    }

    return display;
}

const make  = closures();
make();

//Example 2

const add = (x) => {
    debugger;
    return add1 = (y) => {
        debugger;
        return x + y;
    }
}

const add3 = add(3);
const add5 = add(5);

console.log(add3(45));
console.log(add5(65));