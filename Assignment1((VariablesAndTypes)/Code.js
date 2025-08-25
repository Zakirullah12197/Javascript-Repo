//// Note: Uncomment the required block of code to execute and see the expected results

// 🔹 Q1. Declare Personal Info Variables
// Create 5 variables:
const fullName = "Muhammad Zakirullah"
let age = 21
let isStudent = true
const countryName = "Pakistan"
let collegeName = "GPGC Nowshera"

// 🔹 Q2. Print Data Types
// Use typeof to print the data type of each variable you declared above.
console.log(typeof (fullName))       // ➤ string
console.log(typeof (age))           // ➤ number
console.log(typeof (isStudent))     // ➤ boolean
console.log(typeof (countryName))   // ➤ string
console.log(typeof (collegeName))   // ➤ string

// 🔹 Q3. Try Reassigning a const Variable
// Attempting to change a const value should throw an error.
try {
    fullName = "ali"   // ❌ Will throw: TypeError: Assignment to constant variable.
} catch (error) {
    console.log("❌ Error:", error.message);
    console.log("🔒 You cannot change a const variable once it's assigned.");
}

// 🔹 Q4. Create an Undefined Variable
// Declare a variable futureGoal without assigning a value.
let futureGoal;
console.log("value:", futureGoal);       // ➤ value: undefined
console.log("type:", typeof (futureGoal)); // ➤ type: undefined

// 🔹 Q5. Use Template Strings
console.log(`Hi I am ${fullName} with age of ${age} years from ${countryName}`);
// ➤ Hi I am Muhammad Zakirullah with age of 21 years from Pakistan

// 🔹 Q6. Swap Two Variables
// Swap values of a and b using a third variable.
let a = 10;
let b = 20;
let c = null;
console.log(`Before swapping :`, `a=${a}`, `b=${b}`); // ➤ a=10, b=20
c = a;
a = b;
b = c;
console.log(`After swapping :`, `a=${a}`, `b=${b}`);  // ➤ a=20, b=10

// 🔹 Q7. Declare All 7 Primitive Data Types

// String
let n = "ali";
console.log("value:", n);             // ➤ ali
console.log("type:", typeof (n));     // ➤ string

// Number
let z = 10;
console.log("value:", z);             // ➤ 10
console.log("type:", typeof (z));     // ➤ number

// Boolean
let f = true;
console.log("value:", f);             // ➤ true
console.log("type:", typeof (f));     // ➤ boolean

// Undefined
let x;
console.log("value:", x);             // ➤ undefined
console.log("type:", typeof (x));     // ➤ undefined

// Null
let y = null;
console.log("value:", y);             // ➤ null
console.log("type:", typeof (y));     // ➤ object (JavaScript quirk)

// Symbol
let w = Symbol("id");
console.log("value:", w);             // ➤ Symbol(id)
console.log("type:", typeof (w));     // ➤ symbol

// BigInt
let s = 1223456778n;
console.log("value:", s);             // ➤ 1223456778n
console.log("type:", typeof (s));     // ➤ bigint

// 🔹 Q8. Use let and Try Redeclaration
// let allows re-declaration in different scopes but not in the same block
let language = "JavaScript";
try {
    let language = "JavaScript";  // ✅ No error due to block scope
} catch (error) {
    console.log("❌ Error:", error.message);
    console.log("🔒 You cannot change a const variable once it's assigned.");
}
