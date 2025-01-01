// console.log("Hello World!");
// // alert("Help");

// console.log(45 + 35);

// console.log((4 + 6 + 9) / 77);

// let a = 10;
// console.log(a);
// console.log(9 * a);
// let b = 7 * a;
// console.log(b);

// const bigmouth = "I've got no right to take my place…";
// console.log(bigmouth);

// console.log("Learning String");

// const myName = "Anirban";
// const lastName = "Roy";
// console.log(myName);

// console.log(`Hello, ${myName} ${lastName}`);

// Concatination
// const button = document.querySelector("button");

// function greet() {
//   const name = prompt("What is your name?");
//   const greeting = document.getElementById("greeting");
//   greeting.textContent = `Hello, ${name} nice to meet you!`;
// }
// button.addEventListener("click", greet);
// // Concatination using (+)
// const fastName = "Anirban";
// const lastName = "Roy";

// console.log(fastName + ", " + lastName + ". How are you?"); // using concatination
// console.log(`${fastName} ${lastName}, How are you?`);

// multi string
// const newline = `One day you finally knew
// what you had to do, and began,`;
// console.log(newline);

// /Quotes in js
// const myQuote = "She said, 'I am proud of you.'";
// console.log(myQuote);

// console.log("I've got you.");

// String and number concatination

// const name = "Ani ";
// const number = 234;
// console.log(name + number);

// // conberting string to number
// const myString = "123";
// const myNum = Number(myString);
// console.log(myNum);

// // converting number to string

// const myNum1 = 1234;
// const myString2 = String(myNum1);
// console.log(myString2);

// let name = "Ilya";

// alert(`hello ${1}`); // ?

// alert(`hello ${"name"}`); // ?

// alert(`hello ${name}`);

// console.log(typeof null);
// console.log("Hello BreakPoints");

// function favAnimal(animal) {
//   return animal + " is my favorite animal.";
// }

// console.log(favAnimal("Dog"));

// function draw() {
//   ctx.clearRect(0, 0, WIDTH, HEIGHT);
//   for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = "rgb(255 0 0 / 50%)";
//     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//     ctx.fill();
//   }
// }
// draw();

// const myArray = ["I", "love", "chocolate", "cackes"];
// const madeAString = myArray.join(" + ");
// console.log(madeAString);

// const madeAnotherString = myArray.join();
// console.log(madeAnotherString);

// function hello(name = "Anirban") {
//   console.log(name);
// }

// hello(); // Anirban -> will print the default value
// hello("Roy"); // Roy -> Will print the parameter value

// Arrow function and anonymous function
console.log("Arrow and Anonymous function.");

(function () {
  console.log("Hello Ani");
})();
