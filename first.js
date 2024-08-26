// Electricity Bill Calculation
// Write a program that takes an integer representing the number of units consumed and calculates the total electricity bill based on the following slab rates:

// For the first 50 units: ₹3 per unit
// For the next 100 units (51-150): ₹5 per unit
// For the next 100 units (151-250): ₹8 per unit
// For units above 250: ₹10 per unit

// Input:
// An integer represents the number of units consumed.

// Output:
// An integer representing the total electricity bill.

// Testcase 1:
// Input:
// 30
// Output:
// 90
// First 50 units: 50 * 3 = ₹150
// Next 100 units: 100 * 5 = ₹500
// Next 100 units: 100 * 8 = ₹800
// Remaining 50 units: 50 * 10 = ₹500
// Total: 150 + 500 + 800 + 500 = ₹1950


const readlinesync = require('readline-sync');

let bill = parseInt(readlinesync.question("Enter the amount of the bill: "));
let total_bill = 0;

if (bill <= 50) {
    total_bill = bill * 3;
} else if (bill <= 150) {
    total_bill = (50 * 3) + ((bill - 50) * 5);
} else if (bill <= 250) {
    total_bill = (50 * 3) + (100 * 5) + ((bill - 150) * 8);
} else {
    total_bill = (50 * 3) + (100 * 5) + (100 * 8) + ((bill - 250) * 10);
}

console.log("Total bill:", total_bill);
