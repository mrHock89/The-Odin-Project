// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World!");

// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", () => {
//   alert("Hello World!");
// });

// btn 1
// function alertFunction() {
//   alert("Yay! you dit it!");
// }

// function alertFunction2() {
//   alert("Yay! you did it again!");
// }
// // btn 2
// const btn = document.querySelector("#btn");
// btn.onclick = alertFunction2;

// // btn 3
// const btn2 = document.querySelector("#btn2");
// // btn2.addEventListener("click", alertFunction2);

// btn2.addEventListener("click", function (e) {
//   //   console.log(e.target);
//   e.target.style.background = "blue";
// });

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
