// 1.Create a simple object called person with properties: name, age, and city.
let person = {
    name: "Muhammad Zakirullah",
    age: 21,
    city: "Mardan"
}

// 2.Access the name property using dot notation.
console.log(person.name);

// 3.Access the city property using bracket notation.
console.log(person["city"]);

// 4.Add a new property isStudent dynamically using bracket notation.
person["isStudent"] = true

// 5.Delete the age property from the object.
delete person.age;
console.log(person);

// 6.Use a Symbol as a key in the object and assign it any secret value.
let mysymbol = Symbol("key1")
person[mysymbol] = 1213
console.log(person);

// 7.Display all properties of the object, including the symbol key (use Object.getOwnPropertySymbols()).
console.log(Object.keys(person))
console.log(Object.getOwnPropertySymbols(person))

// 8.Create a nested object for person that contains an address object with properties like street, zipcode.
person.address = {
    street: 1,
    zipcode: 22000
}

// 9.Write a function that accepts an object and logs all its key-value pairs.
function myFunction(object) {
    for (let key in object) {
        if (typeof object[key] === "object" && object[key] !== null) {
            myFunction(object[key])
        } else {
            console.log(`${key} : ${object[key]}`);
        }
    }
}
myFunction(person)

// 10.Loop through the object and print all its values (excluding symbols).
for (let key of Object.keys(person)) {
    console.log(person[key]);
}
