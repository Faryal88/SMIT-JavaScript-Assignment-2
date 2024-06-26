// V=CHAPTER # 12-13
// Question # 1:

function checkCharacter(ch) {
    const ascii = ch.charCodeAt(0);

    if (ascii >= 48 && ascii <= 57) {
        return "This is a number.";
    } else if (ascii >= 65 && ascii <= 90) {
        return "This is an uppercase letter.";
    } else if (ascii >= 97 && ascii <= 122) {
        return "This is a lowercase letter.";
    } else {
        return "This is neither a number nor a letter.";
    }
}
var character = prompt("Enter a character:");
var results = checkCharacter(character);
console.log(results);


// Question # 2:
function compareIntegers(a, b) {
    if (a > b) {
        console.log(a + " is larger than " + b);
    } else if (a < b) {
        console.log(b + " is larger than " + a);
    } else {
        console.log(a + " and " + b + " are equal");
    }
}
const a = parseInt(prompt("Enter the first integer:"));
const b = parseInt(prompt("Enter the second integer:"));
console.log(a, b);


// Question # 3:
function checkNumber(num) {
    if (num > 0) {
        console.log(num + " is a positive number.");
    } else if (num < 0) {
        console.log(num + " is a negative number.");
    } else {
        console.log("The number is zero.");
    }
}
const number = parseFloat(prompt("Enter a number:"));
console.log(number);


// Question # 4:
function isVowel(character) {
    var char = character.toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}
const inputChar = prompt("Enter a character:");
const result = isVowel(inputChar);
console.log(result);



// Question # 5:
// Step a: Store correct password in a variable
const correctPassword = "Faryal123";

// Step b & c: Ask user to enter password and validate
function validatePassword(inputPassword) {
    if (!inputPassword) {
        console.log("Please enter your password.");
    } else if (inputPassword === correctPassword) {
        console.log("Correct! The password you entered matches the original password.");
    } else {
        console.log("Incorrect password.");
    }
}
const userPassword = prompt("Enter your password:");
validatePassword(userPassword);



// Question # 6:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);



// Question # 7:
function convertTimeTo12HourFormat(time24) {
    if (time24 >= 0 && time24 < 12) {
        return time24 + "am";
    } else if (time24 === 12) {
        return "12pm"; // 12 noon
    } else if (time24 > 12 && time24 < 24) {
        return (time24 - 12) + "pm";
    } else {
        return "Invalid input"; // Handle invalid input
    }
}
const inputTime = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));
const convertedTime = convertTimeTo12HourFormat(inputTime);
console.log(convertedTime);


