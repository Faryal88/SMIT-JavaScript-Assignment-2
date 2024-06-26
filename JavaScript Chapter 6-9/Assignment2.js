// CHAPTER 6-9
// Question # 1:
document.write("<h4>Result</h4>")

var a = 10;
document.write("The value of a is: " + a);

// Increment operator
document.write("<br>The value of ++a is: " + ++a);
document.write("<br>Now the value of a is: " + a);

document.write("<br>The value of a++ in: " + a++);
document.write("<br>Now the value of a is: " + a);

// Decrement operator
document.write("<br>The value of a-- is: " + a--);
document.write("<br>Now the value of a is: " + a);

document.write("<br>The value of --a is: " + --a);
document.write("<br>Now the value of a is: " + a);
'\n'

// Question # 2:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(a, b);
console.log(result);

// Question # 3:
var UserName =("Hello, {faryal}! Welcome!");
console.log(UserName);

// Question # 5:
var number = prompt("Please enter a number:");

// If user does not enter a number, use 5 by default
if (number === null || number.trim() === "" || isNaN(number)) {
	number = 5;
} else {
	number = parseInt(number, 10);
}

// Generating the multiplication table
var table = "<h3>Multiplication Table of " + number + "</h3>";
table += "<ul>";

for (var i = 1; i <= 10; i++) {
	table += "<li>" + number + " x " + i + " = " + (number * i) + "</li>";
}

table += "</ul>";

// Displaying the multiplication table
document.write(table);


// Question # 6:  
 // a) Take three subjects' names from the user and store them in 3 different variables.
 var subject1 = prompt("Please enter the name of the first subject:", "English");
 var subject2 = prompt("Please enter the name of the second subject:", "Urdu");
 var subject3 = prompt("Please enter the name of the third subject:", "Maths");

 // b) Total marks for each subject is 100, store it in another variable.
 var totalMarksPerSubject = 100;

 // c) Take obtained marks for the first subject from the user and store it in a different variable.
 var marksSubject1 = parseFloat(prompt("Please enter the obtained marks for " + subject1 + ":", 88));

 // d) Take obtained marks for the remaining 2 subjects from the user and store them in variables.
 var marksSubject2 = parseFloat(prompt("Please enter the obtained marks for " + subject2 + ":", 70));
 var marksSubject3 = parseFloat(prompt("Please enter the obtained marks for " + subject3 + ":", 90));

 // e) Now calculate total marks and percentage and show the result in the browser like this.
 var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;
 var totalMarks = totalMarksPerSubject * 3;
 var percentage = (totalObtainedMarks / totalMarks) * 100;

 // Display the result in a table
 document.write("<table border='1'>");
 document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
 document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marksSubject1 + "</td></tr>");
 document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marksSubject2 + "</td></tr>");
 document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marksSubject3 + "</td></tr>");
 document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtainedMarks + "</th></tr>");
 document.write("<tr><th>Percentage</th><th colspan='2'>" + percentage.toFixed(2) + "%</th></tr>");
 document.write("</table>");




