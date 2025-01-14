let user = {};
console.log(user);
user.name = "Ani";
user.surname = "Roy";
console.log(user);
user.name = "Pete";
console.log(user["name"]);
delete user.name;
console.log(user["name"]);
