//double equal don't check variable data types just check value
//but triple equal checked
//0 means false & 1 means true. thatswhy 1=true result will be true & 0=false result will be true, if you use double equal (==)


//01

const first = 2;
const second = "2";

if (first == second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//02

const first2 = 0;
const second2 = false;

if (first2 == second2){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//03

const first3 = 0;
const second3 = false;

if (first3 === second3){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

