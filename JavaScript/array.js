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
