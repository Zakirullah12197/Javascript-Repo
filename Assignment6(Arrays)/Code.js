// ## 📘 JavaScript Assignment: `06-Arrays`

// ### ✅ Simple Level

// 1. **Create and Print an Array**
//    * Create an array of your 5 favorite fruits.
let fruits = new Array("apple", "pear", "Banana", "Tomato", "guava")
//    * Print the array and its length.
console.log(`Value of array = ${fruits}`)
console.log(`Length of array = ${fruits.length}`)

// 2. **Access Elements**
//    * Print the **first**, **middle**, and **last** element of your array using indexing.
console.log(`Value of array[0] = ${fruits[0]}`)
console.log(`Value of array[2] = ${fruits[2]}`)
console.log(`Value of array[4] = ${fruits[4]}`)

// 3. **Modify Elements**
//    * Replace the **second** item in the fruit array with `"Mango"` and print the updated array.
fruits[1] = "Mango"
console.log(`Value of array(Updated) = ${fruits}`)

// 4. **Add and Remove Elements**
//    * Add `"Kiwi"` at the **end** using `.push()`.
fruits.push("Kiwi")
console.log(`Value of array(Updated) = ${fruits}`)
//    * Add `"Guava"` at the **start** using `.unshift()`.
fruits.unshift("Guava")
console.log(`Value of array(Updated) = ${fruits}`)
//    * Remove the **last** and **first** elements using `.pop()` and `.shift()` respectively.
fruits.pop()
fruits.shift()
console.log(`Value of array(Updated) = ${fruits}`)

// 5. **Check Existence**
//    * Use `.includes()` to check if `"Apple"` exists.
console.log(`Apple Exists : ${fruits.includes("Apple")}`)
//    * Use `.indexOf()` to find the index of `"Banana"`.
console.log(`Index of Banana : ${fruits.indexOf("Banana")}`)


// ### ⚙️ Medium Level

// 6. **Join and Split**
//    * Use `.join(", ")` to convert the array to a single string.
let fruitsArrayString = fruits.join(", ")
console.log("Array in a string form : ", fruitsArrayString)
//    * Use `.split(", ")` to convert it back to an array.
let fruitsStringToArray = fruitsArrayString.split(", ")
console.log("Array string converted back to array form : ", fruitsStringToArray)

// 7. **Slice an Array**
//    * Use `.slice()` to extract the **first 3 elements** from the fruit array without changing the original.
console.log(`slicing of Array(0 -> 3) : ${fruits.slice(0, 3)}`)
//    * Also, extract the **last 2 elements** using a negative index.
console.log(`slicing of last 2 elements : ${fruits.slice(-2)}`)

// 8. **Splice an Array**
//    * Use `.splice()` to remove 2 elements from index 0.
fruits.splice(0, 2)
console.log(`Array after removing 2 elements from index 0 using splice : ${fruits}`)
//    * Use `.splice()` to insert `"Peach"` and `"Melon"` at index 2.
fruits.splice(2, 0, "Peach", "Melon")
console.log(`Array after inserting "Peach" and "Melon" at index 2 : ${fruits}`)

// 9. **Concat Arrays**
//    * Create two arrays and combine them using `.concat()`.
let Array1 = new Array(1, 2, 3)
let Array2 = new Array(4, 5, 6)
let Array3 = Array1.concat(Array2)
console.log(Array3)
//    * Then combine them again using the **spread operator** `[...]`.
let Array4 = [...Array1, ...Array2]
console.log(Array4)


// ### 🔶 Difficult Level

// 11. **Filter Numbers**
// * Create an array of numbers from 1 to 20.
let numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
// * Use `.filter()` to create a new array of only even numbers.
let evenNumbers = numbers.filter(num => num % 2 == 0)
console.log(evenNumbers)

// 12. **Transform Array**
// * Use `.map()` to square each number in an array and return a new array.
let squaredNumbers = numbers.map(num => num * num)
console.log(squaredNumbers)

// 13. **Sum of Elements**
// * Use `.reduce()` to calculate the **sum** of all elements.
console.log(`sum of elements in array ${numbers.reduce((acc, curr) => acc + curr, 0)}`)
//accumulater stores the total value and the curr saves the current value ,
// reduce function itrates over the whole elements of an array and 
// 0 is the initial valure of the accumulator

// 14. **Sort and Reverse**
// * Create an array of numbers and use `.sort()` to sort it.
console.log(`Sorted array : ${[...numbers].sort((a, b) => a - b)}`)
// * Use `.reverse()` to reverse the sorted array.
console.log(`Reversed array : ${[...numbers].sort((a, b) => a - b).reverse()}`)

// 15. **Unique Values**
// * Combine two arrays with some duplicate values.
// * Use the **spread operator** and `Set` to remove duplicates and print a new array.
let newArray = new Array(1, 2, 2, 4, 4, 33, 5, 6, 7, 2)
console.log(`Array with removed duplicates : ${[...new Set(newArray)]}`)
