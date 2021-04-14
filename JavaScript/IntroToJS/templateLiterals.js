// TEMPLATE LITERALS
// New way to create and concatenate strings

// Example of a Template Literal
// Need to use backticks(``) instead of quotes ('' or "")
// `This is a Template Literal`
const example = `This is a Template Literal`;
console.log(example);

// Template Literals recognize line breaks
// Example of line break in a regular string
const linesOne = "First line\nSecond line";
console.log(linesOne);
// const linesOne = "First line
// Second line";

// Example of line break in a Template Literal
const linesTwo = `First line
Second line`;
console.log(linesTwo);

// Example of string concatenation
const myName = "Grant" + " " + 'Patterson'
console.log(myName);

// Example of Expression Interpolation (AKA String Contcatenation) with a template literal
// Uses ${} instead of using plus sign +
let fullName = `Grant${" "}Patterson`;
console.log(fullName);
const middleName = `Wade`;
fullName = `Grant ${middleName} Patterson`;
console.log(fullName);

let nameAge = `My name is ${fullName} and I am ${2020-1980} years old`;
console.log(nameAge);
let currentYear = 2020;
const birthYear = 1980;
nameAge = `My name is ${fullName} and I am ${currentYear-birthYear} years old`;