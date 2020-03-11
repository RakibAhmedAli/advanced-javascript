const students = [
    {id: 1, name: 'Abu bakar ra'},
    {id: 2, name: 'Omor Faruk ra'},
    {id: 3, name: 'Osman ra'},
    {id: 4, name: 'Ali ra'}
];

// for loop example 

// for(let i = 0; i < students.length; i++){
//     let element = students[i];
//     console.log(element)
// }

//Using map in object

const names = students.map( s => s.name);
const ids = students.map( s => s.id);

console.log(names);
console.log(ids);


//Using filter in object

const biggerIds = students.filter(s => s.id > 1);
console.log(biggerIds);


//Using filter in object


const isThere = students.find(x => x.id > 2);
console.log(isThere);

