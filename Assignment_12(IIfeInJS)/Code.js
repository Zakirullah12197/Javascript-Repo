// # **JavaScript IIFE Assignment**

// ### 1. Basic IIFE
(function IIFE() {
    console.log("I am an IIFE");
})();

// ---

// ### 2. Parameterized IIFE
((number) => {
    console.log(`You Entered ${number} and its square is ${number * number}`);
})(5);

// ---

// ### 3. Returning from IIFE
let iifeMessage = (() => "Hello from IIFE")();
console.log(iifeMessage);

// ---

// ### 4. IIFE with Multiple Parameters
((a, b) => {
    console.log(`${a} + ${b} = ${a + b}`);
})(5, 2);

// ---

// ### 5. IIFE with Arrow Function
(() => {
    console.log("Normal IIFE");
})();

// ---

// ### 6. Private Variables using IIFE
const counter = (() => {
    let count = 0;
    return {
        increment: () => { count++; },
        getValue: () => count
    };
})();
counter.increment();
counter.increment();
console.log(counter.getValue()); // 2

// ---

// ### 7. IIFE inside a Loop
for (var i = 0; i < 5; i++) {
    (function(num) {
        console.log(num);
    })(i);
}

// ---

// ### 8. IIFE for Module Pattern
const calculator = (function () {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };
})();
console.log(calculator.add(5, 2));      // 7
console.log(calculator.subtract(5, 2)); // 3

// ---

// ### 9. Async IIFE (without await)
(function () {
    setTimeout(() => {
        console.log("Async IIFE Done!");
    }, 2000);
})();

// ---

// ### 10. Real-World Use
(() => {
    let username = "Zakir";
    console.log("Inside IIFE:", username);
})();
console.log("Outside IIFE:", typeof username); // undefined
