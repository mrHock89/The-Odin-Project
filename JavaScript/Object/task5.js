function sumOfTripleEvens(arr) {
  let sum = 0;
  for (let i in arr) {
    if (arr[i] % 2 == 0) {
      const tripleNum = arr[i] * 3;
      sum += tripleNum;
    }
  }
  return sum;
}

// Same using map

function addOne(num) {
  return num + 1;
}

let myarr = [1, 2, 4, 5];
let myarr2 = [2, 4, 3, 5];

console.log(sumOfTripleEvens(myarr));
console.log(myarr);
// map output
// const mappedArr = myarr2.map(addOne);
const mappedArr = myarr2.map((num) => num + 1);
console.log(myarr2);
console.log(mappedArr);
