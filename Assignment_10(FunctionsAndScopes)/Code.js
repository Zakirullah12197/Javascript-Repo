// 🥇 1. Greet the User
// Create a function greetUser(name) that:
// Prints: Hello, <name>! Welcome back. if a name is provided.
// Prints: Hello, Guest! Please login. if no name is provided.
function greetUser(name) {
    if (name && name.trim()) {
        console.log(`Hello, ${name}! Welcome back.`);
    } else {
        console.log(`Hello, Guest! Please login.`);
    }
}
greetUser();

// ➕ 2. Sum Calculator
// Returns the sum of two numbers.
// If any number is missing, return "Both numbers are required".
function calculateSum(number1, number2) {
    if (number1 == null || number2 == null) { // ✅ fixed to allow 0
        return "Both Numbers are required";
    } else {
        return number1 + number2;
    }
}
console.log(calculateSum(0, 5)); // ✅ works now

// 💰 3. Discount Magic
function applyDiscount(price, discountPercent = 10) {
    return price - ((discountPercent / 100) * price);
}
console.log(applyDiscount(100)); // 90
console.log(applyDiscount(200, 20)); // 160

// 📊 4. Average Calculator
function calculateAverage(...numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    return sum / numbers.length;
}
console.log(calculateAverage(10, 20, 30)); // 20

// 📦 5. Product Printer
const product = {
    name: "fan",
    price: 100,
    category: "electronics"
};
function printProductDetails(product) {
    console.log(`${product.name} from ${product.category} costs $${product.price}.`);
}
printProductDetails(product);

// 🎯 6. Direct Object Passing
printProductDetails({
    name: "button",
    price: 20,
    category: "electronics"
});

// 🛠 7. Array Tail Finder
function getLastElement(array) {
    if (array.length === 0) {
        return "Array is empty";
    } else {
        return array[array.length - 1];
    }
}
console.log(getLastElement([1, 2, 3, 4]));

// 🔍 8. Scope Detective
let x = 50;
{
    let x = 10;
    console.log(`x(inner) : ${x}`);
}
console.log(`x(outer) : ${x}`);

// 🌀 9. Nested Function Power
function outerFunction() {
    let message = "Outer scope";
    function innerFunction() {
        console.log(message);
    }
    innerFunction();
}
outerFunction();

// 🎭 10. Hoisting Mystery
// Function Declaration — Hoisted
console.log(numberDoubler(3)); // works
function numberDoubler(number) {
    return number * 2;
}

// Function Expression — Not Hoisted
// Uncommenting the below line will throw ReferenceError
// console.log(numberDividerBy2(8)); 
let numberDividerBy2 = function (number) {
    return number / 2;
};
console.log(numberDividerBy2(8)); // works fine now
