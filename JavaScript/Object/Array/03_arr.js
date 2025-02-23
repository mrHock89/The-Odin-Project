let arr = [1, 5, 3, 89, 32];
// splice()
// deteting in a range
let arr1 = arr.splice(1, 1); // will remove 5 onle [1, 3, 89, 32]
let arr2 = arr.splice(1, 2); // will remove 3 and 89 [1, 32]
console.log(arr);
console.log(arr1);
console.log(arr2);

// remove and replace using splice()
let myArr = ["I", "study", "JavaScript", "right", "now"];
myArr.splice(0, 3, "Let's", "dance");
console.log(myArr);

// insert element using splice()
let numArr = [1, 2, 3, 8, 9];
numArr.splice(4, 0, 4, 5, 6, 7);
console.log(numArr);

// Negative indexes allowed
let arr5 = [1, 2, 5];
arr5.splice(-1, 0, 3, 4);
console.log(arr5);

// slice

let arr6 = ["t", "e", "s", "t"];
console.log(arr6.slice(1, 3));
console.log(arr6);
console.log(arr6.slice(-2));
