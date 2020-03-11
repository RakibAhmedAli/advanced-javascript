
//01 - bangla multifly system

const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for (let i= 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push (result);
}
console.log(output);

//02 - Using map

const numbers2 = [3, 4, 5, 6, 7, 8];

// function square (element){
//     return element * element;
// }

// const square = element => element * element; /or 
// const square = x => x * x;

// const result = numbers2.map(function(element){
//     return element * element;
// })

const result = numbers2.map(x => x * x);
console.log(result);

//03  - Using Filter

const bigger = numbers2.filter(x => x > 5);
console.log(bigger);

const smaller = numbers2.filter(x => x < 5);
console.log(smaller);

//04 - Using find

const isThere = numbers2.find(x => x > 5);
console.log(isThere);
