// // Selecting a element
// const container = document.querySelector("#container");
// const display = container.firstElementChild;
// // console.log(display);

// const controls = document.querySelector(".controls");
// const display2 = controls.previousElementSibling;
// // console.log(display2);

// // Element Creation
// const div = document.createElement("div");
// div.style.color = "blue";
// div.style.cssText = "color: blue; background: white;";
// div.setAttribute("style", "color: blue; background: white;");
// // Append elements
// // container.appendChild("div");
// // div.innerText = "Hello, I have been added.";

// div.style.backgroundColor;
// div.style["background-color"];
// div.style["backgroundColor"];

// // Editing attributes

// // id
// div.setAttribute("id", "theDiv");
// div.getAttribute("id");
// div.removeAttribute("id");
// // Class
// // adding class
// div.classList.add("new");
// // remove class
// div.classList.remove("new");
// // if a class is not present then add if present then remove
// div.classList.toggle("active");

// div.textContent = "Hello World!";
// div.innerHTML = "<span>Hello World!<span>";

const container = document.querySelector("#container");
// creating an element
const content = document.createElement("div");
// adding class to it
content.classList.add("content");
content.textContent = "Hello Everyone!";
container.appendChild(content);

// 1. a <p> with red text that says “Hey I’m red!”
const paraOne = document.createElement("p");
paraOne.classList.add("paraOne");
paraOne.innerText = "Hey I'm red!";
paraOne.style.color = "red";
container.appendChild(paraOne);

// 2. an <h3> with blue text that says “I’m a blue h3!”
const h3Heading = document.createElement("h3");
h3Heading.classList.add("h3Heading");
h3Heading.innerText = "I'm a blue h3!";
h3Heading.style.color = "blue";
container.appendChild(h3Heading);

// 3. a <div> with a black border and pink background color

const div2 = document.createElement("div");
div2.classList.add("container2");
div2.setAttribute("style", "background-color: pink; border: 2px solid black;");

// 3.1
const h1Div = document.createElement("h1");
h1Div.classList.add("h1Div");
h1Div.innerText = "I'm in a div";
div2.appendChild(h1Div);

// 3.2
const paraTwo = document.createElement("p");
paraTwo.classList.add("paraTwo");
paraTwo.innerText = "ME TOO!";
div2.appendChild(paraTwo);

// appending div2 inside continer
container.appendChild(div2);
