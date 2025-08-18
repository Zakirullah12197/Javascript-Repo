// 📘 JavaScript Assignment – Control Structures, Truthy/Falsy, Nullish Coalescing, and Ternary Operators

// ======================================================
// 1. Basic Truthy/Falsy
// ======================================================
// Create a function `checkValue(val)` that:
// * Prints "Truthy" if val is truthy
// * Prints "Falsy" if val is falsy
// Test with: 0, 1, "", "hello", null, undefined, [], {}
const value = {};
function checkValue(value) {
    (value) ? console.log("Truthy") : console.log("Falsy");
}
checkValue(value); // ✅ Truthy ({} is truthy)

// ======================================================
// 2. Empty Array Check
// ======================================================
let shoppingList = [];
console.log((shoppingList.length === 0) ? "Array is Empty" : "Array is non-empty"); // ✅

// ======================================================
// 3. Empty Object Check
// ======================================================
const userProfile = {};
console.log(Object.keys(userProfile).length === 0 ? "Object is empty" : "Object is non-empty"); // ✅

// ======================================================
// 4. Login Check with Truthy/Falsy
// ======================================================
let userName = "Zakir";
console.log(userName ? `Hello ${userName}` : "Please log in"); // ✅

// ======================================================
// 5. Nullish Coalescing Basics
// ======================================================
let discount = null ?? 10;
console.log(discount); // ✅ 10 → because null triggers the ?? fallback

// ======================================================
// 6. Multiple Nullish Coalescing
// ======================================================
let price = null ?? undefined ?? 250;
console.log(price); // ✅ 250 → last non-null/undefined value

// ======================================================
// 7. Default Email with Nullish Coalescing
// ======================================================
const userEmail = null ?? undefined ?? "guest@example.com";
console.log(userEmail); // ✅ guest@example.com

// ======================================================
// 8. Ternary Basics
// ======================================================
const marks = 85;
console.log(marks >= 50 ? "Pass" : "Fail"); // ✅ Pass

// ======================================================
// 9. Ice Tea Shop (Ternary)
// ======================================================
const iceTeaPrice = 120;
console.log(iceTeaPrice <= 100 ? "Buy one" : "Too expensive!"); // ✅ Too expensive!

// ======================================================
// 10. Combined Logic Challenge
// ======================================================
let cartItems = [];
let totalPrice;

console.log((cartItems.length === 0) ? "Cart is Empty" : `You have ${cartItems.length} items`);

const finalPrice = totalPrice ?? 0;
console.log(finalPrice > 500 ? "You get free delivery" : "Delivery charges apply"); // ✅

// ### **11. Temperature Check**
let temperature = 28;
if (temperature < 0) {
    console.log("Freezing");
} else if (temperature < 20) {
    console.log("Cold");
} else if (temperature < 30) {
    console.log("Warm");
} else {
    console.log("Hot");
}

// ### **12. Even or Odd**
let n = 7;
if (n % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// ### **13. Grading System**
let studentMarks = 78;
if (studentMarks >= 90) {
    console.log("A Grade");
} else if (studentMarks >= 75) {
    console.log("B Grade");
} else if (studentMarks >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}

// ### **14. Max of Three Numbers**
let a = 15, b = 25, c = 20;
if (a > b && a > c) {
    console.log("Largest is A:", a);
} else if (b > a && b > c) {
    console.log("Largest is B:", b);
} else {
    console.log("Largest is C:", c);
}

// ### **15. Positive, Negative, or Zero**
let num = -5;
if (num > 0) {
    console.log("Positive Number");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}

// ### **16. Day of Week (Switch)**
let day = 3;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid Day");
}

// ### **17. Month Name (Switch)**
let month = 12;
switch (month) {
    case 1: console.log("January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    case 8: console.log("August"); break;
    case 9: console.log("September"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 12: console.log("December"); break;
    default: console.log("Invalid Month");
}

// ### **18. Vowel or Consonant**
let letter = 'e';
switch (letter.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}

// ### **19. Calculator (Switch)**
let num1 = 10, num2 = 5, operator = '*';
switch (operator) {
    case '+': console.log(num1 + num2); break;
    case '-': console.log(num1 - num2); break;
    case '*': console.log(num1 * num2); break;
    case '/': console.log(num1 / num2); break;
    default: console.log("Invalid operator");
}

// ### **20. Traffic Light System**
let signal = "yellow";
if (signal === "red") {
    console.log("Stop");
} else if (signal === "yellow") {
    console.log("Get Ready");
} else if (signal === "green") {
    console.log("Go");
} else {
    console.log("Invalid signal");
}
