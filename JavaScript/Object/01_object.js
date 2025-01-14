let user = new Object();
user = {
  name: "Anirban",
  age: 24,
};
// Output
console.log(user.name);

// Add more property
user.isAdmin = true;
console.log(user.isAdmin);

// Delete a key-value pair
delete user.age;

console.log(user["age"]);
// console.log(user.age);

// Multi Word property
user["Likes birds"] = true;
console.log(user["Likes birds"]);
