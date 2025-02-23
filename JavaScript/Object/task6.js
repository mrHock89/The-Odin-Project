// find sum of triple evens number
function sumOfTripleEvens(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

let myArr = [1, 2, 4, 5, 6, 9];
console.log(sumOfTripleEvens(myArr));
