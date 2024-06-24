// ! WHILE LOOP
// A while loop repeats a block of code as long as a specified condition is true

let i = 0;
while (i < 100) {
  console.log(i);
  i += 2; // Increment i by 2
}

// ! DO-WHILE LOOP
// A do-while loop repeats a block of code once, and then continues to repeat as long as a specified condition is true

// Example of a do-while loop that increments by 10

let j = 0;
do {
  console.log(j);
  j += 10;
} while (j < 100);

// Logs out even numbers between 60 and 80
let x = 60;
do {
  console.log(j);
  x += 2; // Increment j by 2
} while (x <= 80);

// ! FOR LOOP
// A for loop repeats a block of code a specific number of times
// Syntax: for (initialization; condition; increment/decrement) { statement }

// Example of a for loop that logs numbers from 10 to 20
for (let n = 10; n <= 20; n++) {
  console.log(n);
}

// Logs out all values divisible by 7 from 0 to 210 in descending order
for (let n = 210; n >= 0; n -= 7) {
  console.log(n);
}
