// COMPARISON OPERATORS REVIEW
// Comparison operators are used to test for true and false

// Greater Than
console.log(7 > 6); // true
console.log(2.1 > 1.234); // true

// Less Than
console.log(7 < 6); // false
console.log(0.9 < -4);  // false

// Greater Than or Equal To
console.log(10 >= 10); // true
console.log(3 >= -100); // true

// Less Than or Equal To
console.log(4 <= 3); // false
console.log(143 <= 176.04); // true

// Equal Comparisons
// Double Equals
// Equal value but does not check type
console.log(3 == 2); // false
console.log("Chicken" == "Chicken"); // true
console.log(3 == "3"); // true

// Triple Equals (AKA Strict Equality)
// Equal value and equal type
console.log(7 === 7); // true
console.log('Friday' === `Friday`); // true
console.log(`6` === 6); // false

// Not Equal Comparisons
// Not Equal
// Not Equal value, but does not check type
console.log(3 != 3); // false
console.log(3 != 2); // true
console.log(3 != "3"); // false

// Strict Not Equal
// Not equal value or not equal type
console.log(3 !== 3); // false
console.log(3 !== "3"); // true

