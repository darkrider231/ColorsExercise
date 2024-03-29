// CONDITIONAL STATEMENTS

// IF
// Code inside brackets will run if the value is true
// NOTE: REmember to use parantheses () around boolean value
if (true) { // Value is true so code runs
    console.log("Yay it was true!");
}

if (false)  {  // Value is false so code does not run
    console.log(`This will not run`);
}

if (2 > 0) {  // true
    console.log("Yes 2 is greater than 0");
}

// IF and ELSE
// Code in else brackets runs it previous value(s) were NOT true
let num = 4;
if(num < 5) {
    console.log("Number is less than five");
} else {
    console.log("Number is greater than or equal to five");
}

// IF, ELSE IF, and ELSE
if (false) {
    console.log("This first one was true");
} else if (false) {
    console.log("The first was false and second was true");
}  else {
    console.log("The first and secon were false");
}

// Nesting
if (false){ 
    console.log(("Hello"));
    if (true) {
        console.log("Sup?");
    }
} else {
    console.log("Bye");
}