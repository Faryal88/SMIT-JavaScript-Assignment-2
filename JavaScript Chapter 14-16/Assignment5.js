// CHAPTER # 14-16:
// Question # 1:
let studentNames = [];
studentNames.push('Alice');
studentNames.push('Bob');
studentNames.push('Charlie');
console.log(studentNames);


// Question # 2:
let studentNames1 = new Array();
studentNames.push('Alice');
studentNames.push('Bob');
studentNames.push('Charlie');
console.log(studentNames1); 


// Question # 3:
let fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];
console.log(fruits);


// Question # 4:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);


// Question # 5:
let booleanValues = [true, false, true, false, true];
console.log(booleanValues);


// Question # 6:
let mixedArray = ['apple', 5, true, ['banana', 'cherry'], 10.5];
console.log(mixedArray);


// Question # 7:
let qualifications = [
    'SSC (Secondary School Certificate)',
    'HSC (Higher Secondary Certificate)',
    'BCS (Bachelor of Computer Science)',
    'BS (Bachelor of Science)',
    'BCOM (Bachelor of Commerce)',
    'MS (Master of Science)',
    'M. Phil. (Master of Philosophy)',
    'PhD (Doctor of Philosophy)'
];

// Function to display qualifications in the browser
function displayQualifications() {
    let qualificationsList = "<ul>";
    for (let i = 0; i < qualifications.length; i++) {
        qualificationsList += `<li>${qualifications[i]}</li>`;
    }
    qualificationsList += "</ul>";
    
    document.getElementById('qualifications').innerHTML = qualificationsList;
}

// Call the function to display qualification
console.log(qualifications);


// // Question # 8:



// Question # 9:



// Question # 10:
let studentScores = ["Student score" ,85, 92, 78, 90, 88];

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

// Output the sorted array
console.log("Sorted student scores in ascending order: ", studentScores);



// Question # 11
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta"];
let selectedCities = cities.splice(2,3);
console.log("Selected cities: ", selectedCities);


// Question # 12
var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
console.log("Single string: ", arr,singleString);


// Question # 13
let queue = [];
// Store values in the array (FIFO)
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

// Access and remove values in FIFO order
let firstValue = queue.shift();
let secondValue = queue.shift();
let thirdValue = queue.shift();
let fourthValue = queue.shift();
let fifthValue = queue.shift();

console.log("Devices:", "Keyboard", "Mouse", "Printer", "Monitor" );
console.log("Out: ", firstValue); 
console.log("Out: ", secondValue);  
console.log("Out: ", thirdValue);  
console.log("Out: ", fourthValue);  



// Question # 14
let queue1 = [];
// Store values in the array (FIFO)
queue.push("Monitor");
queue.push("Printer");
queue.push("Mouse");
queue.push("Keyboard");

// Access and remove values in FIFO order
let firstValue1 = queue.shift();
let secondValue1 = queue.shift();
let thirdValue1 = queue.shift();
let fourthValue1 = queue.shift();
let fifthValue1 = queue.shift();

console.log("Devices:", "Keyboard", "Mouse", "Printer", "Monitor" );
console.log("Out: ", firstValue1); 
console.log("Out: ", secondValue1);  
console.log("Out: ", thirdValue1);  
console.log("Out: ", fourthValue1);


// Question # 15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write('<select id="manufacturerSelect">');
document.write('<option value="">Select a manufacturer...</option>');
for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}
document.write('</select>');