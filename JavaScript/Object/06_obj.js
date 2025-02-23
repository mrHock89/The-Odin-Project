function isOdd(num) {
  return num % 2 !== 0;
}

const arr = [1, 2, 3, 4, 5, 6];
// const oddNums = arr.filter(num);
const oddNums = arr.filter((num) => num % 2 !== 0);

console.log(oddNums);
console.log(arr);
