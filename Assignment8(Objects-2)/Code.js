// 1. Create an object literal with properties: name, age, and city.
const person = {
    name: "John",
    age: 25,
    city: "New York"
};
console.log(person);

// 2. Access and print the name property using dot notation.
console.log(person.name);

// 3. Access and print the city property using bracket notation.
console.log(person["city"]);

// 4. Add a new property country with value "USA".
person.country = "USA";
console.log(person);

// 5. Modify the age property to 30.
person.age = 30;
console.log(person);

// 6. Delete the city property.
delete person.city;
console.log(person);

// 7. Create a nested object (profile with social media handles).
const profile = {
    name: "Alice",
    social: {
        instagram: "@alice123",
        twitter: "@alice_tw"
    }
};
console.log(profile);

// 8. Access the instagram handle from the nested object and update it.
profile.social.instagram = "@jsmaster";
console.log(profile);

// 9. Use a variable as a key to add a new property.
const keyName = "hobby";
profile[keyName] = "Painting";
console.log(profile);

// 10. Merge two objects into one using Object.assign().
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj1 = Object.assign({}, obj1, obj2);
console.log(mergedObj1);

// 11. Merge two objects into one using the spread operator.
const mergedObj2 = { ...obj1, ...obj2 };
console.log(mergedObj2);

// 12. Get all keys of an object.
console.log(Object.keys(person));

// 13. Get all values of an object.
console.log(Object.values(person));

// 14. Get all entries of an object.
console.log(Object.entries(person));

// 15. Demonstrate object destructuring.
const { name, country } = person;
console.log(name, country);

// 16. Show that two variables can reference the same object.
const objA = { value: 100 };
const objB = objA;
objB.value = 200;
console.log(objA.value); // 200

// 17. Use Object.freeze() on appConfig and try to change its appName.
const appConfig = { appName: "Messenger", version: "1.0" };
Object.freeze(appConfig); // Freezes entire object (no partial freeze in JS)
appConfig.appName = "Whatsapp"; // Will not change
console.log(appConfig.appName);

// 18. Create a singleton object with a dynamic key.
const dynamicKey = "status";
const object2 = new Object();
object2[dynamicKey] = "active";
console.log(object2.status);

// 19. Create a function returning a singleton object.
const singleton = (function () {
    let instance;
    function createInstance() {
        return { message: "I am a singleton" };
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
console.log(singleton.getInstance());

// 20. Verify that multiple calls return the same singleton instance.
console.log(singleton.getInstance() === singleton.getInstance()); // true
