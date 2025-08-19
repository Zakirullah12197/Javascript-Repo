// # 📘 JavaScript Array Methods Assignment
// (Topics: forEach, filter, map, reduce)

// --------------------------------------------------
// 1. forEach Basics
let fruits = ['apple', 'mango', 'banana', 'orange']
let z = fruits.forEach((element, index) => {
    console.log(`${index} : ${element}`);
    return 5; // NOTE: return is ignored by forEach
})
console.log(z);

// 📝 Sample Output:
// 0 : apple
// 1 : mango
// 2 : banana
// 3 : orange
// undefined


// --------------------------------------------------
// 2. filter Practice
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filter even numbers
const evenNumbers = numbers.filter((element) => element % 2 == 0)
console.log(evenNumbers);

// 📝 Output: [2, 4, 6, 8, 10]

// Filter ages >= 18
let ages = [12, 22, 24, 34, 56, 44]
const voters = ages.filter(element => element >= 18)
console.log(voters);

// 📝 Output: [22, 24, 34, 56, 44]

// Filter students with marks > 80
const student = [
    { name: "sam", marks: 77 },
    { name: "fred", marks: 97 },
    { name: "sid", marks: 89 }
]
const brightStudents = student.filter(element => element.marks > 80)
for (const key of brightStudents) {
    console.log(`${key.name} is a bright student`);
}

// 📝 Output:
// fred is a bright student
// sid is a bright student


// --------------------------------------------------
// 3. map Practice

// Multiply numbers by 2
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let doubledNumbers = numbers.map(element => element * 2)
console.log(doubledNumbers);

// 📝 Output: [2,4,6,8,10,12,14,16,18,20]

// Convert names to uppercase
let names = ['fahad', 'zakir', 'asad', 'ali']
let Names = names.map(name => name.toUpperCase())
console.log(Names);

// 📝 Output: ["FAHAD","ZAKIR","ASAD","ALI"]

// Multiply numbers by 10, then add 5
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr = numbers
    .map(num => num * 10)
    .map(num => num + 5)
console.log(newArr);

// 📝 Output: [15,25,35,45,55,65,75,85,95,105]


// --------------------------------------------------
// 4. Chaining map + filter
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArr1 = numbers
    .map(num => num * 10)  // multiply by 10
    .map(num => num + 1)   // add 1
    .filter(num => num > 50) // keep > 50
console.log(newArr1);

// 📝 Output: [ 51, 61, 71, 81, 91, 101 ]


// --------------------------------------------------
// 5. reduce Basics
let num = [1, 2, 3, 4, 5]

// Sum of numbers
let sum = num.reduce((acc, curr) => acc + curr, 0)
console.log("sum :", sum);

// 📝 Output: sum : 15

// Product of numbers with trace
let product = num.reduce((acc, curr) => {
    console.log(`acc : ${acc}   curr : ${curr}`);
    return acc * curr
}, 1)
console.log("product :", product);

// 📝 Trace Output:
// acc : 1   curr : 1
// acc : 1   curr : 2
// acc : 2   curr : 3
// acc : 6   curr : 4
// acc : 24  curr : 5
// product : 120


// --------------------------------------------------
// 6. reduce with Objects

// Calculate total cost
let arr2 = [
    { name: "milk", price: 90 },
    { name: "cream", price: 100 },
    { name: "yoghurt", price: 95 }
]
const totalCost = arr2.reduce((acc, curr) => curr.price + acc, 0)
console.log(`Total Cost : ${totalCost}`);

// 📝 Output: Total Cost : 285

// Count occurrences of fruits
const fruits1 = ["apple", "banana", "apple", "orange", "banana", "apple"]
const fruitCount = fruits1.reduce((acc, fruit) => {
    if (acc[fruit]) {
        acc[fruit] += 1
    } else {
        acc[fruit] = 1
    }
    return acc;
}, {})
console.log(fruitCount);

// 📝 Output: { apple: 3, banana: 2, orange: 1 }


// --------------------------------------------------
// 7. Combined Challenge

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Step 1: Filter books published after 2000
const booksAfter2000 = books.filter(bk => bk.publish > 2000)
console.log(booksAfter2000);

// 📝 Output:
// [
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
// ]

// Step 2: Map titles of filtered books
const bookTitlesAfter2000 = booksAfter2000.map(bk => bk.title)
console.log(bookTitlesAfter2000);

// 📝 Output: [ 'Book Five', 'Book Eight' ]

// Step 3: Reduce to count books by genre
const genreCount = booksAfter2000.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc
}, {})
console.log(genreCount);

// 📝 Output: { Science: 2 }


