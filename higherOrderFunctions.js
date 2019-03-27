/* map */
/* map creates a new array by calling the provided function on each element */
const peoples = [2,4,6,8];

const multiplyPeople = peoples.map(people=>
    people * 2
);

console.log(multiplyPeople);


/*filter*/

/*filter creates a new array with all elements that pass the test implemented in the provided finction */

const greaterPeople = peoples.filter(people =>
    people > 5
);

console.log(greaterPeople);

/* reduce */

/*executes a reducer function on each and returnes a single output*/

const reducer = (accumulator, currentValue) =>  accumulator + currentValue ;

console.log(peoples.reduce(reducer,5));

//reduce for async

let fruites = ['pineapple', 'apple', 'orange'];

const getfruits = async (name) => {
    const fruitcolour = {
        'pineapple' : 'green',
        'apple' : 'red',
        'orange' : 'orange'
    }

    console.log(fruitcolour[name]);
    return fruitcolour[name];
}

// fruites.reduce((previousPromice, currentFruit)=>{
//     return previousPromice.then(()=>{
//         return getfruits(currentFruit);
//     })
// },Promise.resolve())

fruites.reduce(async (previousPromice, currentFruit)=>{
    await previousPromice.then(()=>{
        return getfruits(currentFruit);
    })
},Promise.resolve());

