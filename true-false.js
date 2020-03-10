// false condition 

// -01= 0
// -02 = ""
// -03 = undefined
// -04 = null
// -05 = NaN
// -06 = false

// Truthy condition

// '0'; ' '; []; {}; 


//01

const age = 4;

if(age>0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

//02

const name = 'Solaiman';

if(name.length > 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

//03

const blankName = "0";

if(blankName){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

//04

let name2;
console.log(name2);

if(name2){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

//05

let name3 = null;
console.log(name3);

if(name3){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

// 06

let name4 = 0;

if(name4 || name4 == 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}