function makeUser(name, age) {
  return {
    // 1.
    // name: name,
    // age: age,
    // other properties

    // 2.
    // name,
    // age,

    // 3.
    name,
    age: 30,
  };
}
let user = makeUser("john", 30);
console.log(user.name);
console.log(user.age);
