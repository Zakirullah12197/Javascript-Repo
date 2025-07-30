//// Note: Uncomment the required block of code for executing to achieve expected results

// 🔹 Q1. Check All 7 Primitive Data Types Again
// Declare one variable of each:
// string, number, boolean, undefined, null, symbol, bigint

let fullName = "xyz";
console.log(`Value : ${fullName}`);             // ➤ xyz
console.log(`type : ${typeof fullName}`);       // ➤ string

let Bool = true;
console.log(`Value : ${Bool}`);                 // ➤ true
console.log(`type : ${typeof Bool}`);           // ➤ boolean

let notDefined;
console.log(`Value : ${notDefined}`);           // ➤ undefined
console.log(`type : ${typeof notDefined}`);     // ➤ undefined

let nullVariable = null;
console.log(`Value : ${nullVariable}`);         // ➤ null
console.log(`type : ${typeof nullVariable}`);   // ➤ object (quirk in JS)

let bigInteger = 1223456778n;
console.log(`Value : ${bigInteger}`);           // ➤ 1223456778n
console.log(`type : ${typeof bigInteger}`);     // ➤ bigint

let Number1 = 123456;
console.log(`Value : ${Number1}`);              // ➤ 123456
console.log(`type : ${typeof Number1}`);        // ➤ number

let id = Symbol("xyz");
console.log("Value :", id);                     // ➤ Symbol(xyz)
console.log("type :", typeof id);               // ➤ symbol

console.log("-----------------------------------------------------------------------");


// 🔹 Q2. Type Conversion using Number(), String(), and Boolean()
// Convert these values: "123", true, false, null, undefined, NaN, "abc"

// Original value: "123"
let value1 = "123";
console.log("Value:", value1);
console.log("Type:", typeof value1);
console.log("To Number:", Number(value1));       // ➤ 123
console.log("To String:", String(value1));       // ➤ "123"
console.log("To Boolean:", Boolean(value1));     // ➤ true
console.log("------------------");

// Original value: true
let value2 = true;
console.log("Value:", value2);
console.log("Type:", typeof value2);
console.log("To Number:", Number(value2));       // ➤ 1
console.log("To String:", String(value2));       // ➤ "true"
console.log("To Boolean:", Boolean(value2));     // ➤ true
console.log("------------------");

// Original value: false
let value3 = false;
console.log("Value:", value3);
console.log("Type:", typeof value3);
console.log("To Number:", Number(value3));       // ➤ 0
console.log("To String:", String(value3));       // ➤ "false"
console.log("To Boolean:", Boolean(value3));     // ➤ false
console.log("------------------");

// Original value: null
let value4 = null;
console.log("Value:", value4);
console.log("Type:", typeof value4);
console.log("To Number:", Number(value4));       // ➤ 0
console.log("To String:", String(value4));       // ➤ "null"
console.log("To Boolean:", Boolean(value4));     // ➤ false
console.log("------------------");

// Original value: undefined
let value5 = undefined;
console.log("Value:", value5);
console.log("Type:", typeof value5);
console.log("To Number:", Number(value5));       // ➤ NaN
console.log("To String:", String(value5));       // ➤ "undefined"
console.log("To Boolean:", Boolean(value5));     // ➤ false
console.log("------------------");

// Original value: NaN
let value6 = NaN;
console.log("Value:", value6);
console.log("Type:", typeof value6);
console.log("To Number:", Number(value6));       // ➤ NaN
console.log("To String:", String(value6));       // ➤ "NaN"
console.log("To Boolean:", Boolean(value6));     // ➤ false
console.log("------------------");

// Original value: "abc"
let value7 = "abc";
console.log("Value:", value7);
console.log("Type:", typeof value7);
console.log("To Number:", Number(value7));       // ➤ NaN
console.log("To String:", String(value7));       // ➤ "abc"
console.log("To Boolean:", Boolean(value7));     // ➤ true
