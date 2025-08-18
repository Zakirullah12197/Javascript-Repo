
# 📘 **JavaScript Array Methods Assignment**

(Topics: `forEach`, `filter`, `map`, `reduce`)

---

### **1. forEach Basics**

* Write a program that prints each element of an array of fruits using `forEach`.
* Modify it to also print the **index** of each fruit.
* Try returning a value inside `forEach` and see what happens.

---

### **2. filter Practice**

* Given an array of numbers, filter only the even numbers.
* From an array of ages, filter out ages **greater than or equal to 18** (eligible to vote).
* From an array of student objects (`name, marks`), filter only students who scored above **80 marks**.

---

### **3. map Practice**

* Create an array of numbers and use `map` to multiply each number by 2.
* Take an array of names and return a new array with all names converted to uppercase.
* Use `map` twice:

  * First, multiply numbers by 10.
  * Then, add 5 to each result.

---

### **4. Chaining map + filter**

* Given `[1,2,3,4,5,6,7,8,9,10]`:

  * Multiply each number by 10.
  * Add 1 to each result.
  * Filter only numbers greater than **50**.

---

### **5. reduce Basics**

* Use `reduce` to calculate the sum of numbers `[1,2,3,4,5]`.
* Modify it to calculate the **product** of numbers.
* Trace step by step by logging `acc` and `curr` in each iteration.

---

### **6. reduce with Objects**

* Given an array of items with `{name, price}`, calculate the **total cost** using `reduce`.
* Extend it: count how many times each fruit appears in an array:

  ```js
  ["apple", "banana", "apple", "orange", "banana", "apple"]
  ```

  → Should return `{ apple: 3, banana: 2, orange: 1 }`.

---

### **7. Combined Challenge**

* You are given an array of **books** with `title, genre, publishYear, edition`.

  * Filter out only books published after the year **2000**.
  * From those, map out an array of book titles.
  * Finally, reduce them to count how many books belong to each genre.

---

