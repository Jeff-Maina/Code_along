/*
// ! Functions

- Reusable blocks of code that perform a specific task.
*/

let name = "Name";

// * Function declaration

function logName() {
  console.log(name);
}

// * Calling or invoking the function

logName();

/*
 // ! Parameters and arguments
 Parameters are placeholders in the function definition.
 Arguments are the actual values passed to the function when it is called.
*/

function greet(firstName, secondName) {
  console.log(`Good morning, ${firstName} ${secondName}`);
}

// Example of calling the greet function with arguments;

greet("John", "Doe");

// Create a function that takes in a name, an email address, and a phone number
// The function logs a string using the parameters above

function logEmail(name, email, phoneNumber) {
  console.log(`Name: ${name}, Email: ${email}, Phone Number: ${phoneNumber}`);
}

// Example of calling the logEmail function with arguments

logEmail("Jeff", "email@gmail.com", "0713545555");

// Function to calculate the sum of two numbers
function sumFunction(a, b) {
  return a + b;
}

// Example of calling the sumFunction and storing the result
let sum = sumFunction(3, 5); //  8

// Function to convert centimeters to meters
function cmToMeters(cm) {
  return cm / 100;
}

// Example of converting heights and widths from centimeters to meters
let height = cmToMeters(500);
let width = cmToMeters(1000);

// Calculate the total dimensions of a door
let doorDimensions = height + width;

console.log(doorDimensions); // Output will be 15 meters

// ! Function expressions;

const areaOfSquare = function (side) {
  return side * side;
};

// Example of calculating the area of squares with different side lengths
const square1Area = areaOfSquare(4); // 16
const square2Area = areaOfSquare(7); // 49


// ! Arrow function;

// Arrow function for calculating the area of a rectangle
const areaOfRectangle = (length, width) => {
  return length * width;
};

// Example of calculating the area of a rectangle
const rectangleArea = areaOfRectangle(10, 12); // 120

