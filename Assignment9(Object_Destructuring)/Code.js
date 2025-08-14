// ## JavaScript Destructuring & Basic JSON/API Assignment

// ---------------------------
// 1. Array Destructuring
// ---------------------------

// 1. Create an array of 3 colors and use array destructuring
let colors = ["red", "green", "blue"];
let [c1, c2, c3] = colors;

// 2. Swap the values of two variables using array destructuring (no third variable allowed)
[c1, c3] = [c3, c1];
console.log(`c1: ${c1}\nc3: ${c3}`);

// 3. Skip the second value while destructuring
const [firstColor, , thirdColor] = colors;
console.log(`First: ${firstColor}, Third: ${thirdColor}`);

// ---------------------------
// 2. Object Destructuring
// ---------------------------

// 4. Create an object `car` and extract values
const car = {
    brand: "corolla",
    model: "25",
    year: "2025"
};
const { brand: b, model, year } = car;
console.log(`Brand: ${b}`);

// 5. Object destructuring with default value
const settings = {
    theme: "dark"
};
const { theme, fontSize = "16px" } = settings;
console.log(`Theme: ${theme}`);
console.log(`Font Size (default if missing): ${fontSize}`);

// ---------------------------
// 3. Nested Destructuring
// ---------------------------

// 6. Extract nested values from object
const user = {
    id: 1,
    profile: {
        username: "alice",
        email: "alice@example.com"
    }
};
const { profile: { username, email } } = user;
console.log(`Username: ${username}`);
console.log(`Email: ${email}`);

// ---------------------------
// 4. Basic JSON Practice
// ---------------------------

// 7. Convert object to JSON and back
const book = { title: "The Alchemist", author: "Paulo Coelho" };

// Convert to JSON string
let bookString = JSON.stringify(book);
console.log("JSON String:", bookString);

// Convert back to object
const newBook = JSON.parse(bookString);
console.log("Parsed Object:", newBook);
