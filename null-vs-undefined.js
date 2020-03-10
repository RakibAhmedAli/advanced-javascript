// undefined er condition
// 01 - without set value
// 02 - without return value set
// 03 - without pass parameter
// 04 - without existence value declare

//01 

let buddy;
console.log(buddy);

//02

function add(num1, num2){
    console.log(num1 + num2);
}

const result = add(13, 13);
console.log(result);

//03

function add2(num1, num2){
    console.log(num1, num2);
}

const result2 = add2(13);
console.log(result2);

//04

const premik = {name: "smart dude", phone: 2441129};
console.log(premik.gf);

// 05

let fun = undefined;
console.log(fun);

//06

let ages = [2, 4, 6, 9, 11];
console.log(ages[11]);
