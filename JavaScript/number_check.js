// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// using do-while loop
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// using for loop
let i;
for (; i <= 100 && i; ) {
  prompt("Enter a number greater than 100?");
}
