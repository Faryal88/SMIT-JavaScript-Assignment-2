// CHAPTER # 17-20:
// Question # 1

let multiArray = [];
let rows = 3;
let cols = 4;
for (let i = 0; i < rows; i++) {
    multiArray[i] = [];
    for (let j = 0; j < cols; j++) {
        multiArray[i][j] = 0; // or any other initial value
    }
}

console.log(multiArray);

// Question # 2
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
console.log(matrix);


// Question # 3
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// Question # 4
let tableNumber = parseInt(prompt("Enter the table number:"));
let tableLength = parseInt(prompt("Enter the length of the table:"));

// Generate and print the multiplication table
console.log(`Multiplication Table of ${tableNumber}:`);
for (let i = 1; i <= tableLength; i++) {
	console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}



// Question # 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Loop through the array and print each fruit
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



// Question # 6
// (A)
document.write('Counting: ');
for (let i = 1; i <= 15; i++) {
	if (i > 1) {
		document.write(', ');
	}
	document.write(i);
}
'<br>'
// (B)
let reverseCounting = '';
for (let i = 10; i >= 1; i--) {
	reverseCounting += i;
	if (i > 1) {
		reverseCounting += ', ';
	}
}
// Output the series directly into the HTML
document.write('Reverse counting: ' + reverseCounting);

// (C)
document.write("Even: ");
for (let i = 0; i <= 20; i += 2) {
	document.write(i);
	if (i < 20) {
		document.write(", ");
	}
}

// (D)
let oddSeries = [];
for (let i = 1; i <= 19; i += 2) {
	oddSeries.push(i);
}
document.write("Odd: " + oddSeries.join(', '));

// (E)
document.write('Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k');
		

// Question # 7
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. Whatdo you want to order Sir/Ma'am?");
userInput = userInput.toLowerCase();

// Variable to track if item is found
let found = false;

// Loop through array to search for item
for (let i = 0; i < A.length; i++) {
	if (userInput === A[i].toLowerCase()) {
		found = true;
		break;
	}
}

// Display result based on whether item is found
if (found) {
	alert(`Yes, "${userInput}" is found in the list.`);
} else {
	alert(`No, "${userInput}" is not found in the list.`);
}
console.log(A, userInput, found);

// Question # 8
let C = [24, 53, 78, 91, 12];
let largest = C[0];
for (let i = 1; i < C.length; i++) {
    if (A[i] > largest) {
        largest = C[i];
    }
}
console.log(`The largest number in the array is: ${largest}`);


// Question # 9
let B = [24, 53, 78, 91, 12];

// Variable to store the smallest number, initialized with the first element
let smallest = B[0];

// Iterate through the array to find the smallest number
for (let i = 1; i < B.length; i++) {
    if (B[i] < smallest) {
        smallest = B[i];
    }
}

// Print the smallest number
console.log(`The smallest number in the array is: ${smallest}`);


// Question # 10
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}