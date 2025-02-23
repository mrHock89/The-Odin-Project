// Sum of all array elemtnts
const arr = [1, 2, 5, 3, 4];
const productOfAllNums = arr.reduce(
  (total, currentItem) => total * currentItem,
  1
);
console.log(productOfAllNums);
console.log(arr);
