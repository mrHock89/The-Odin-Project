const myFriends = ["Anup", "Anirban", "Joy", "Mukul"];

console.log(myFriends);
console.log(myFriends[0]);

//We can use new keyword to create new array
// Though both are exactly same. There is no need of using new keyword
const myColors = new Array("Violet", "Green", "Blue", "Orange");

console.log(myColors[3]); // Accessing 4th element

// Changing an Array element
myColors[3] = "Yellow";
console.log(myColors[3]);

// converting a array to String
const myStringFromArray = myColors.join(",");

console.log(myStringFromArray);

// Error in js Array
// 1.
const points = [40]; // Will create an array with one element
console.log(points.length);
console.log(points[0]);

// 2
const points2 = new Array(40); // will create 40 undefined elements
console.log(points2.length);
console.log(points2[0]);

console.log(typeof points);

// typeof method gives a array type is object
// Because an array is special type of array.
// The main difference between array and object is that
// Array use number indenes
// While Object uses named indexes

// To solve the problem of array type.
// 1.
console.log(Array.isArray(points)); // will return true ia it is an array

// 2
const fruits = ["Banana", "Apple", "Orange"];
console.log(fruits instanceof Array);

// Nested Arrays and objects
console.log("Nested Arrays and Objects");
let myObj = new Object();
myObj = {
  name: "Anirban",
  age: 24,
  friends: ["Ani", "Happy", "Herry"],
};

// Accessing object elements
console.log(myObj.age);
console.log(myObj["age"]);
console.log(myObj.name);

// Accessing the array of the Object
console.log(Array.isArray(myObj.friends)); // checks if is it array or not
console.log(`Array elements of the object are: ${myObj.friends}`);

const myArr = [
  [1, 2],
  [4, 3],
  [7, 6],
];
console.log(myArr);
const newArr = myArr.flat();
console.log(newArr);

const newArr2 = newArr.flatMap((x) => [x, x * 10]);
const newArr3 = newArr.flatMap((x) => [x * 10]);
console.log(newArr2);
console.log(newArr3);

const fruits2 = ["Banana", "Apple", "Ornge", "Mango"];
fruits2.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits2);

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits3);

const newFArr = fruits3.slice(2);
const newFArr2 = fruits3.slice(0, 2);
console.log(newFArr);
console.log(newFArr2);
console.log(fruits3);
// let i = 3;
// while (i) {
//   console.log(i--); // 3 2 1
// }
// let i = 0;
// while (i++ < 5) console.log(i); // 1 2 3 4
for (let i = 0; i < 5; ++i) console.log(i);
