// VARIABLES (For storing values)
/*
Syntax for Variables

variableType variableName = value;
*/

// LET is a variable type
// STUDENTS is the variableName
// 28 is the value being set/assigned
let students = 28;

// Other ways to update number of students
// students = 30; 
// students = students + 2; 
// students += 2;

// students = students - 2;
// students -= 2;
// students++;
students--;
// students = "All students:";
// students = false;
console.log(students);

let campbellsvilleStudents = 20;
// console.log(campbellsvilleStudents);

let bowlingGreenStudents = students - campbellsvilleStudents;
// console.log(bowlingGreenStudents);

// OTHER TYPES OF VARIABLES
// Const (Used for variables with a value that will not change)
const locations = 2;
// Cannot update the value of a const variable
// locations = 3;
console.log(locations);

// Var (The OG Variable)
var theRealOG = 1995;

// STRING VARIABLES
const firstName = "Grant";
const lastName = "Patterson";
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);
console.log(fullName[1]);
console.log(fullName[5]);