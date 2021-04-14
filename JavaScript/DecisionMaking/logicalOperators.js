// LOGICAL OPERATORS

// AND (Example: &&)
// The AND logcial operators checks if ALL values are true
// ALL values need to be true for the ending result to be true when using AND
let andOne = true && false;
console.log(andOne); // false

let andTwo = 5 < 6 && 10 >= 10;
// let andTwo = true && true;
console.log(andTwo); // true

let andThree = "Inconceivable!".length === 14 && 10 === "10"; // false
// let andThree = 14 === 14 && 10 ==="10";
// let andThree = true && false;

let andFour = 2 > -10 && "Hi" !== "hi" && 2 != "2";
// let andFour = true && true && false
// let andFour = true && false;
console.log(andFour); // false

// OR (Example ||)
// Shift + \ (Backslash) to create a pipe character
// The OR logical operator checks if at least ONE value is true
// Only ONE value needs to be true for the ending result to be true when using OR
let orOne = true || false; // true
console.log(orOne);

let orTwo = 1 > 2 || "Jam" === "Jelly";
// let orTwo = false || "Jam" === false;
console.log(orTwo);

let orThree = `Two` == 2 || `One`.length == 1 || false === false;
// let orThree = false || false || true;
// let orThree = false || true;
console.log(orThree); // true

let orFour = "Five".length === 4 || " Hot Dog " === "Sandwich";
// let orFour = true || false;
console.log(orFour); // true

// Order of operators (AND then OR)
let order = "Mirror" === "Mirror" || "On" === "The" && "Wall" === ".";
// let order = "Mirror" === "Mirror" || "On" === "The" && "Wall" === ".";
// let order = true || false || false;
// let order  true || false;
console.log(order); // true

// NOT (Example !)
// ! is called a Band in JavaScript
// The NOT logical operator converts the value from true to false and vice versa
let notOne = !true;
console.log(notOne); // false

let notTwo = !("Chuck Norris".length >= "John Wich".length);
// let notTwo = !(12 >= 9);
// let notTwo = !(true);
// let notTwo = false;
console.log(notTwo); // false

// AND, OR, & NOT
let andOrNot = !(1 < 3 || 6 === 4 && 2 > 2);
// let andOrNot = !(true || false && false);
// let andOrNot = !(true || false);
// let andOrNot = !(true);
console.log(andOrNot); // false