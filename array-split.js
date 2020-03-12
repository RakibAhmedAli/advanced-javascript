// Slice can cuts element but not remove.
// Splice can removed number of element & can do inject some items.
// Join can do many diffrent number & elements get together.


const nums = [5, 7, 4, 10, 6, 9, 8, 11];
const part = nums.slice(2, 5);

const removed = nums.splice(3, 4, 44, 33, 22);

// console.log(removed);
// console.log(part);
// console.log(nums); 

const together = nums.join(", ");
console.log(together);