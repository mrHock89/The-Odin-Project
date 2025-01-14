let user = {
  name: "Ani",
  age: 24,
  school: "Bagula High School",
};

console.log("Accessing a key and value of a property");
// Accessing each element using for-in loop

for (let a in user) {
  // keys
  console.log(a);
  // values
  console.log([a]);
}
console.log("greade" in user);
