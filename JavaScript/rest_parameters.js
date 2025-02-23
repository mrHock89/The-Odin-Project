// // function sum(...theArgs) {
// //   let total = 0;
// //   for (const arg of theArgs) {
// //     total += arg;
// //   }
// //   return total;
// // }
// // const total = sum(2, 3, 3, 2);
// // console.log(total);

// function myFun(a, b, ...manyMoreArgs) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("manyMoreArgs", manyMoreArgs);
// }
// myFun("one", "two", "three", "four", "five");

// function ignoreFirst(...[, b, c]) {
//   return b + c;
// }
// console.log(ignoreFirst());

// function sum(...args) {
//   const myArgArray = args;
//   console.log(myArgArray);
//   console.log(myArgArray[2]);
// }
// sum(1, 3, 4, 5, 2);
// const removeFromArray = function (arr, ...num) {
//   const myArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!num.includes(arr[i])) {
//       myArr.push(arr[i]);
//     }
//   }
//   return myArr;
// };

// console.log(removeFromArray([1, 2, 3, 4], 3, 2));

console.log(Math.round(12.76 * 10) / 10);
console.log(Math.round(124.6));
