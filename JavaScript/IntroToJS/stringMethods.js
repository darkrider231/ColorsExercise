// STRING METHODS

// Basic Methods

// Trim (Removes empty/white space from both sides of a string)
let variableTrim = "  Hello there!  ";
console.log(variableTrim);
console.log(variableTrim.trim());
variableTrim = variableTrim.trim();
console.log(variableTrim);
console.log(' Yo');
console.log(' Yo'.trim());

// Uppercase and Lowercase (Changes the text to uppercase or lowercase)
let text = "These are words";
console.log(text.toUpperCase()); //Changes the text to uppercase
console.log(text.toLowerCase()); //CHanges the text to lowercase

// Methods with Arguments
// Index Of (Returns the index position)
let letters = "abc";
console.log(letters.indexOf("b"));
let fullName = "Justin Browning";
let nameIndex = fullName.indexOf("Browning");
console.log(nameIndex);

// Replace (Replaces content in a string)
let hi = "hello";
console.log(hi.replace("h", "b"));
console.log(hi.replace("hello", "hey"));

// Repeat (Repeats content in a string)
let lesson = "String Methods ";
console.log(lesson.repeat(3));

// Slice (Extracts part of a string)
// First number is the starting index and the second number is the ending index (goes up to second number, but does not include it in the slice)
let breakTime = "Almost break time!";
// If a second number is not included, then the rest of the string will be included in the slice
console.log(breakTime.slice(0, 12));
// When using negative numbers it starts from the end of the string (Starting at 1 not 0)
console.log(breakTime.slice(-5, -1));

console.log(breakTime.slice(-5));
