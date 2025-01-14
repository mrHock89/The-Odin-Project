function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let obj1 = {};
console.log(isEmpty(obj1));
obj1.name = "Hello"; // added using .
obj1["surname"] = "Bye";
console.log(obj1);
console.log(isEmpty(obj1));
