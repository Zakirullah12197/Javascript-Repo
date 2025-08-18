// 📘 JavaScript Assignment – Loops & High-Order Array Iterations
// Description: Solved exercises on loops, arrays, objects, and high-order array methods

// --- 1. Print Numbers (for loop) – skip 13
for (let i = 1; i <= 20; i++) {
    if (i === 13) continue;
    console.log(i);
}

// --- 2. Multiplication Table of 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// --- 3. Array Iteration (for loop)
let fruits = ["apple", "banana", "cherry", "mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// --- 4. Break Statement Example
for (let i = 1; i <= 20; i++) {
    if (i === 10) {
        console.log("Found 10, stopping loop");
        break;
    }
    console.log(i);
}

// --- 5. While Loop Basics
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// --- 6. Do-While Example
let score = 15;
do {
    console.log(score);
    score--;
} while (score > 10);

// --- 7. for...of with Array
let cities = ["Delhi", "Mumbai", "Paris", "New York"];
for (const city of cities) {
    console.log(city);
}

// --- 8. for...of with String
let string = "JavaScript";
for (const char of string) {
    console.log(char);
}

// --- 9. Map Iteration (for...of)
const map = new Map();
map.set("Pakistan", "Islamabad");
map.set("UAE", "Dubai");
map.set("SaudiArabia", "Jeddah");
for (const [country, capital] of map) {
    console.log(`${country} :- ${capital}`);
}

// --- 10. for...in with Object
const student = { name: "Ali", age: 21, grade: "A" };
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}

// --- 11. for...in with Array
let numbers = [10, 20, 30, 40];
for (const index in numbers) {
    console.log(`${index} : ${numbers[index]}`);
}

// --- 12. forEach Basics
let colors = ["red", "green", "blue"];
colors.forEach(color => console.log(color));

// --- 13. forEach with Index
colors.forEach((color, index) => console.log(`${index}: ${color}`));

// --- 14. Array of Objects (forEach)
const users = [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 22 },
    { name: "John", age: 30 }
];
users.forEach(user => console.log(`${user.name} is ${user.age} years old`));

// --- 15. Filter Odd Numbers (forEach)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(num => {
    if (num % 2 !== 0) console.log(num);
});

// --- 16. Nested Loop Pattern
for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line.trim());
}

// --- 17. Reverse Array (for loop)
let arr2 = [1, 2, 3, 4, 5];
for (let i = arr2.length - 1; i >= 0; i--) {
    console.log(arr2[i]);
}

// --- 18. Sum of Array (for...of)
const arr1 = [10, 20, 30, 40];
let sum = 0;
for (const num of arr1) sum += num;
console.log(sum);

// --- 19. Character Count (for...of)
let str = "hello";
let count = 0;
for (const char of str) count++;
console.log(`Number of elements in string "${str}": ${count}`);

// --- 20. Object of Arrays (for...in + forEach)
const courses = {
    js: ["arrays", "objects", "loops"],
    py: ["functions", "modules"],
    java: ["OOP", "Collections"]
};
for (const key in courses) {
    console.log(`${key}: ${courses[key].join(", ")}`);
}

// ✅ End of Assignment
