// function increaseCounterObject(objectCounter) {
//   objectCounter.counter += 1;
//   return objectCounter;
// }
// function increaseCounterPrimitive(primitiveCounter) {
//   primitiveCounter += 1;
//   return primitiveCounter;
// }
// const object = { counter: 0 };
// let primitive = 0;

// console.log(increaseCounterObject(object));
// console.log(increaseCounterPrimitive(primitive));

let animal = { species: "dog" };
let dog = animal;
console.log(animal);
console.log(dog);
animal = { species: "cat" };
console.log(animal);
console.log(dog);
