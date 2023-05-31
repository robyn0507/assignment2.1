let studentFirstName = "Brandon";
let studentLastName = "N";
let grade1 = 53;
let grade2 = 96;
let grade3 = 65;
let grade4 = 74;
let passingGrade = 80;

// 1. Calculate the average
let average = (grade1 + grade2 + grade3 + grade4) / 4;

// 2. Change the value of studentLastName to "Newman"
studentLastName = "Newman";

// 3. Print the statement with the student's information
console.log(studentFirstName + " " + studentLastName + " has an average grade of " + average);

// 4. Check if the student passed
let didPass = average >= passingGrade;

// Print whether the student passed or not
console.log("Did the student pass? " + didPass);
