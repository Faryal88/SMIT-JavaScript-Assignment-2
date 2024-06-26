// CHAPTER 1:

// QUESTION # 1:
alert("Welcome! Thanks for visiting our website.");

// QUESTION # 2:
document.write("<p>Hello there! Welcome to our website.</p>");

// QUESTION # 3:
document.write("Hello there!<br>Welcome to our website.");

// QUESTION # 4:
document.write("Faryal <br>");
document.write("Aamir <br>");
document.write("Abbasi <br>");

// QUESTION # 5:
console.log("Hello Faryal Abbasi!");

// QUESTION # 6:
function showAlert() {
    alert("This is an alert message!");
}

// QUESTION # 7:
// same Question # 6


// CHAPTER 2:

// QUESTION # 1:
var userName = "Faryal Abbasi";
console.log(userName);

// QUESTION # 2:
var myName = "Faryal Abbasi";
console.log(myName);

// QUESTION # 3:
var message;
message = "Hello World";
alert(message);

// QUESTION # 4:
var studentName = "Zainab";
var studentAge = "13";
var studentCity = "Karachi";

alert(studentName);
alert(studentAge);
alert(studentCity);

// QUESTION # 5:
var alertMessage = "Welcome to Faryal Abbasi Website!\nThanks for visiting.";
alert(alertMessage)

// QUESTION # 6:
var email = "faryalabbasi88@gmail.com";
var Message = "Your email address is: " + email;
alert(Message);

// QUESTION # 7:
var book = "A smarter way to learn JavaScript";
var newMessage = "I am currently reading the book: '" + book + "'";
alert(newMessage);

// QUESTION # 8:
document.write("Yah! I can Write HTML Content throught Javascript");

// QUESTION # 9:
var myString = "Hello, world! This is a JavaScript string.";
alert(myString);
document.write(myString);


// CHAPTER 3:

// QUESTION # 1:
var age = 18;
alert("Your age is:" + age);

// QUESTION # 2:
alert("you are visited this website 14 times")

// QUESTION # 3:
var birthYear = 2005;
var message1 = "My birth year is " + birthYear;
document.write(message1);

// QUESTION # 4:
var visitorName = "Faiez";
var productTitle = "T-shirt";
var quantity = 5;

var message2 = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
document.write(message2);


// CHAPTER 4:

// QUESTION # 1:
var firstName1 = "Faryal", lastName1 = "Abbasi", age1 = 18;
console.log(firstName1, lastName1, age1);

// QUESTION # 2:
// Legal Examples:
var fullname = "Faiez";
var user_age = 22;
var totalItems = 4;
var isValid = "Yes";
var maxAttempts = "Cat"

// Ilegal Examples:
var let = "";
var let = "me";
var ma12$ = "";
// var let = myNamen;
var lastName1 = let;

// QUESTION # 3:
var heading = " <h1> “Rules for naming JS variables” </h1>"
var paragraph = "<p> Variable names can only contain numbers, $ and _. For example :$my_1stVariable </p>"
var para2 ="<p>Variables must begin with a letter, $ and _ . For example $name, _name or name</p>"
var para3 = "<p> Variable names are case sensitive</p>"
var para4 ="<p>Variable names should not be JS keyword</p>"
var final = heading + paragraph + para2 + para3 + para4
document.write(final)


// CHAPTER 5:

// QUESTION # 1:
var num1 = 3;
var num2 = 5;
console.log(num1 + num2);

// QUESTION # 2:
// Adding:
var add1 = 5;
var add2 = 8;
console.log(add1 + add2);

// Subtraction:
var sub1 = 9;
var sub2 = 3;
console.log(sub1 - sub2);

// Multiply:
var mul1 = 3;
var mul2 = 3;
console.log(mul1 * mul2);

// Divide:
var div1 = 6;
var div2 = 2;
console.log(div1 / div2);

// Modules:
var mod1 = 5;
var mod2 = 4;
console.log(mod1 % mod2);

// QUESTION # 3:
// a. Declare a variable.
var myVariable;

// b. Show the value of the variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the value of the variable in your browser like “Initial value: 5”.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of the variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value of the variable in your browser like “Value after addition is: 13”.
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
myVariable--;

// j. Show the value of the variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.
var remainder = myVariable % 3;

// l. Output : “The remainder is : 0”.
document.write("The remainder is: " + remainder);


// QUESTION # 4:
var ticketPrice = 600;
var numberOfTickets = 5;
console.log(ticketPrice * numberOfTickets);

// QUESTION # 5:
// Define the number for which you want to display the multiplication table
var number = 4;

// Display the multiplication table
document.write("<h2>Multiplication Table of " + number + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// QUESTION # 6:
var temp ="<h1>Temperature Conversion</h1>"
document.write(temp)

// a. Store a Celsius temperature into a variable.
var celsiusTemperature = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

// c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemperature2 = 77;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");


// QUESTION # 7:
var item1Price = 20;
var item2Price = 30;
var item1Quantity = 2;
var item2Quantity = 3;
var shippingCharges = 10;

var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
console.log(totalCost);


// QUESTION # 8:
var totalMarks = 500;
var marksObtained = 380;

var percentage = (marksObtained / totalMarks) * 100;
console.log(percentage);


// QUESTION # 9:
var usDollars = 10;
var saudiRiyals = 25;
var exchangeRateUSD = 104.80;
var exchangeRateSAR = 28;

var totalInPKR = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);
console.log(totalInPKR);


// QUESTION # 10:
var number = 20;
var answer = ((number + 5) * 10) / 2;
console.log(answer);


// QUESTION # 11:
var currentYear = 2024;
var birthYear = 2005;
var yourAge = 18;

console.log(currentAge - birthYear);


// QUESTION # 12:
var circleRadius = 20;
var circumference = 125.67999999999999;
var radiusArea = 1256.8;

console.log(circleRadius + circumference + radiusArea);


// QUESTION # 13:
var favoriteSnack = "chocolate chip cookies";
var currentAge = 18;
var maxAge = 50;
var amountPerDay = 3;
  
console.log(favoriteSnack + currentAge + maxAge + amountPerDay);
console.log("You will need 150 chocolate chip cookies to last you untilthe ripe old age of 50");