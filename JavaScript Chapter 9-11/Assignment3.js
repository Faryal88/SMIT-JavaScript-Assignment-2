// CHAPTER # 9-11:
// Question # 1:
var city = ("Karachi");
console.log(city);
console.log("Welcome to city of lights")


// Question # 2:
var gender =prompt("Enter your gender (Male/Female):");
if (gender === "Male") {
     alert("Good Morning Sir");
}  
if (gender === "Female") {
    alert("Good Morning Ma’am");
} 
        

// Question # 3:   
var color =prompt("signalColor");
if (color === "red") {
   alert("Must Stop");
}
 if (color === "yellow") {
    alert("Ready to move");
}
 if (color === "green") {
    alert("Move now");
} 


// Question # 4:
const fuel =("Please refill the fuel in your car");
if (fuel < 0.25) {
    message = "Please refill the fuel in your car";
} else {
    message = "You have enough fuel";
}
document.write(fuel);


// Question # 5:
// Statement a
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

// Statement b
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

// Statement c
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

// Statement d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

// Statement e
if (true){
    alert("True");
}
if (false){
    alert("False");
}

// Statement f
if("car" < "cat"){
    alert("car is smaller than cat");
}



// Question # 6:
    // Get inputs from the user
    var marksSubject1 =prompt("marks1");
    var marksSubject2 = prompt("marks2");
    var marksSubject3 = prompt("marks3");
    var totalMarks = prompt("totalMarks");

    // Calculate total marks obtained
    var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;

    // Calculate percentage
    var percentage = (totalObtainedMarks / totalMarks) * 100;

    // Determine grade based on percentage
    var grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

  // Display the result
  document.write("<h2>Result</h2>");
  document.write("<p>Total Marks: " + totalMarks + "</p>");
  document.write("<p>Marks Obtained: " + 291 + "</p>");
  document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
  document.write("<p>Grade: " + grade + "</p>");

    // Provide remarks based on grade
    var remarks;
    switch (grade) {
        case 'A+':
        case 'A':
            remarks = "Excellent!";
            break;
        case 'B':
            remarks = "Good!";
            break;
        case 'C':
            remarks = "Average";
            break;
        case 'D':
            remarks = "Below Average";
            break;
        default:
            remarks = "Needs Improvement";
            break;
    }
    document.write("<p>Remarks: " + remarks + "</p>");


// Question # 7:
 // Generate a random secret number between 1 and 10
 var secretNumber = Math.floor(Math.random() * 10) + 1;

 function checkGuess() {
     // Get user's guess from the prompt
     var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

     // Check if the guess matches the secret number
     if (userGuess === secretNumber) {
         alert("Bingo! Correct answer");
     } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
         alert("Close enough to the correct answer");
     } else {
         alert("Sorry, try again!");
     }
 }
 document.write(secretNumber)




// Question # 8:
 // Get the number from the user
 var number =prompt("Enter a number to check divisibility by 3:");

 // Check if the number is divisible by 3
 if (number % 3 === 0) {
     alert(number + " is divisible by 3");
 } else {
     alert(number + " is not divisible by 3");
 }
document.write(number);


// Question # 9:
 // Get the number from the user
 var number1 =prompt("Enter a number to check if it's even or odd:");

 // Check if the number is even or odd
 if (number1 % 2 === 0) {
     alert(number1 + " is an even number");
 } else {
     alert(number1 + " is an odd number");
 }
document.write(number1)


// Question # 10:
// Get the temperature from the user
var temperature =prompt("Enter the temperature in Celsius:");

// Check temperature conditions and display appropriate message
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is freezing cold!");
}
document.write(temperature)



// Question # 11:
 // Get inputs from the user
 var num1 = prompt("Enter the first number:");
 var num2 = prompt("Enter the second number:");
 var operation = prompt("Enter the operation (+, -, *, /, %):");
 // Perform the calculation based on the operation
 if (operation === '+') {
     result = num1 + num2;
 } else if (operation === '-') {
     result = num1 - num2;
 } else if (operation === '*') {
     result = num1 * num2;
 } else if (operation === '/') {
     result = num1 / num2;
 } else if (operation === '%') {
     result = num1 % num2;
 } else if (operation === "=") {
     result = num1 = num2;
 }

 document.write(num1, num2, operation)