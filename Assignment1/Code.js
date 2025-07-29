////Note : Uncomment the required block of code for executing to achieve expected results

// // 🔹 Q1. Declare Personal Info Variables
// // Create 5 variables:
// const fullName = "Muhammad Zakirullah"
// let age = 21
// let isStudent = true
// const countryName = "Pakistan"
// let collegeName = "GPGC Nowshera"

// // 🔹 Q2. Print Data Types
// // Use typeof to print the data type of each variable you declared above.
// console.log(typeof (fullName))
// console.log(typeof (age))
// console.log(typeof (isStudent))
// console.log(typeof (countryName))
// console.log(typeof (collegeName))

// // 🔹 Q3. Try Reassigning a const Variable
// try {
//     fullName = "ali"                             //shows error
// } catch (error) {
//     console.log("❌ Error:", error.message);
//     console.log("🔒 You cannot change a const variable once it's assigned.");
// }
// // 🔹 Q4. Create an Undefined Variable
// // Declare a variable futureGoal without assigning a value.
// let futureGoal;
// console.log("value:", futureGoal)
// console.log("type:", typeof (futureGoal))

// // 🔹 Q5. Use Template Strings
// console.log(`Hi I am ${fullName} with age of ${age} years from ${countryName}`)

// // 🔹 Q6. Swap Two Variables
// // Declare two variables: x = 10, y = 20.
// // Swap their values using a third variable.
// // Print values before and after swapping.
// let a = 10
// let b = 20
// let c = null
// console.log(`Before swapping :`, `a=${a}`, `b=${b}`)
// c = a
// a = b
// b = c
// console.log(`After swapping :`, `a=${a}`, `b=${b}`)
// // 🔹 Q7. Declare All 7 Primitive Data Types
// // Declare variables for each of these:
// // String
// let n = "ali"
// console.log("value:", n)
// console.log("type:", typeof (n))
// // Number
// let z = 10
// console.log("value:", z)
// console.log("type:", typeof (z))
// // Boolean
// let f = true
// console.log("value:", f)
// console.log("type:", typeof (f))
// // Undefined
// let x
// console.log("value:", x)
// console.log("type:", typeof (x))
// // Null
// let y = null
// console.log("value:", y)
// console.log("type:", typeof (y))
// // Symbol
// let w = Symbol("id")
// console.log("value:", w)
// console.log("type:", typeof (w))
// // BigInt
// let s = 1223456778n
// console.log("value:", s)
// console.log("type:", typeof (s))

// // 🔹 Q8. Use let and Try Redeclaration
// // Declare a variable with let: let language = "JavaScript";
// let language = "JavaScript"
// try {
//     let language = "JavaScript"
// }
// catch (error) {
//     console.log("❌ Error:", error.message);
//     console.log("🔒 You cannot change a const variable once it's assigned.");
// }
