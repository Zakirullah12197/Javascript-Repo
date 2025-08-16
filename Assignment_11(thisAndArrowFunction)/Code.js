// ======================================================
// 🚀 JavaScript Arrow Functions & `this` Keyword Assignment
// ======================================================

// ### 1. Basic Arrow Function
// Create an arrow function `square(num)` that returns the square of a number.
const square = (num) => (num * num)
console.log("Q1:", square(5)) // Output: 25

// ------------------------------------------------------

// ### 2. Implicit Return
// Arrow function without {} or return.
const multiply = (num1, num2) => num1 * num2
console.log("Q2:", multiply(5, 3)) // Output: 15

// ------------------------------------------------------

// ### 3. Returning an Object
// Arrow function returning an object directly.
const getUser = () => ({ name: "Ali", role: "Student" })
console.log("Q3:", getUser()) // Output: { name: "Ali", role: "Student" }

// ------------------------------------------------------

// ### 4. `this` in Object Method (Regular Function)
const person = {
    name: "Zakir",
    greet: function () {
        console.log("Q4:", `Hello, ${this.name}`)
    }
}
person.greet() // Correctly prints: Hello, Zakir

// ------------------------------------------------------

// ### 5. `this` in Object Method (Arrow Function)
// ⚠️ Arrow functions don’t bind their own `this`.
// They inherit from the surrounding scope (here: global).
const person1 = {
    name: "Zakir",
    greet: () => {
        console.log("Q5:", `Hello, ${this.name}`)
    }
}
person1.greet() // Output: Hello, undefined

// ------------------------------------------------------

// ### 6. `this` in a Standalone Function
function showThis() {
    console.log("Q6:", this)
}
showThis()
// In Node.js: prints the global object
// In Browser: prints `window` (or `undefined` in strict mode)

// ------------------------------------------------------

// ### 7. Arrow Function & `this` in Callback
const team = {
    members: ["Ali", "Sara"],
    showMembers: function () {
        this.members.forEach((element) => {
            console.log("Q7:", `${element} is part of our team`)
        })
    }
}
team.showMembers()

// ------------------------------------------------------

// ### 8. Regular Function in Callback (Problem)
// Regular functions redefine `this` (undefined inside strict mode).
team.showMembers = function () {
    this.members.forEach(function (element) {
        console.log("Q8:", `${element} is part of our team (but 'this' might break!)`)
    })
}
team.showMembers()
// Note: Here `this` may lose reference to `team` inside callback.

// ------------------------------------------------------

// ### 9. Arrow Function with Default Parameter
const greet = (name = "Guest") => console.log("Q9:", `Hello, ${name}!`)
greet("Hitesh") // Hello, Hitesh!
greet()         // Hello, Guest!

// ------------------------------------------------------

// ### 10. Complex Practice — Mixing Regular & Arrow Functions
const shop = {
    items: ["Book", "Pen", "Bag"],
    price: 100,
    showItems: function () {
        this.items.forEach((item) => {
            console.log("Q10:", `${item} costs ${this.price}`)
        })
    }
}
shop.showItems()
// Output:
// Book costs 100
// Pen costs 100
// Bag costs 100
