let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    console.log (bonus);
    console.log (result);
    if(result > bonus){
        const mood = "Yaee,, Happy";
        console.log(mood)
    }
    return result;
}

const output = sum(3, 12);
console.log (output);


// hoisting in javascript

let bonusVata = 20;

function add(valueFirst, valueSecond){
    let result2 = valueFirst + valueSecond + bonusVata;
    if(result2 > bonusVata){
        var moody = "Yaee,, Happy";
        moody = "Hae, bro, I am very Happy";
        moody = "Hae, bro, I am very Excited";
        console.log(moody);
    }
    console.log(moody);


    let day = "friday";
    console.log(day);


    return result2;
}

const output2 = add(3, 12);
console.log (output2);