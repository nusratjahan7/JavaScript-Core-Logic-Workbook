// Problem - 1

let age = 19;
console.log(age);

// Problem - 2

const PI = 3.14159;
console.log(PI);

// Problem - 3

let Fun = true;


// problem - 4

let myVariable;

console.log(myVariable);
console.log(typeof myVariable);

// Output: undefined


// problem - 5

const firstName = "Nusrat";
const lastName = "Jahan";

const thirdName = firstName + " " + lastName;
console.log(thirdName);

// Problem - 6

let temperture = 34.7;
temperture = "hot";
console.log(temperture);

// problem - 7 

const book = {
    title: "The Great Gatsby",
    author: "Scott Fitzgerald",
    yearPublished: 1925
};

console.log(book);

// problem - 8

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num2 !== 0 ? (num1 / num2) : "Cannot divide by zero"}`);


// problem - 9

const mod = 143 % 8;
console.log(mod);

// problem - 10

let x = 10;
let result = x ** 3;
console.log(result);


// problem - 11;

score = + 5;

// problem - 12

const number = 5;
const string = "5";


console.log(number == string);
console.log(number === string);


// problem 13

let num = 20;

if (num > 10 && num < 20) {
    console.log("true", num);
}
else {
    console.log("false");
}

// problem 14

const isAdmin = true;

if (isAdmin || isEditor) {
    console.log(isAdmin);
}

// problem 15

const numBer = 30;

if (numBer > 0) {
    console.log(true);
}
else if (numBer === 0) {
    console.log("equal");
}
else {
    console.log(false);
}


// problem 16



let numCheck = prompt("enter a number");

if (numCheck % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}


// problem  17

const myAge = prompt("enter a your age");

if (myAge >= 18) {
    console.log("eligible to vote");
}
else {
    console.log("not eligible");
}

// problem 18

function gradeCheck(marks) {
    if (marks >= 90) {
        return ("grade A");
    }
    else if (marks >= 80) {
        return ("grade B");
    }
    else if (marks >= 70) {
        return ("grade C");
    }
    else {
        return ("failed");
    }
}
console.log(gradeCheck(50));


// problem 19

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2020));

// problem 20

function checklogin(username, password) {
    if (username == "admin" && password == "12345") {
        return (" login successful");
    }
    else {
        return ("login failed");
    }
}

console.log(checklogin("admin", 12345));


// problem 21

function printDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number. Please enter a number between 1 and 7.");
    }
}

printDayName(1);
printDayName(4);

// problem 22

const isLoggedIn = true;

const message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);



// 24
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// 25
let sum = 0;
for (let n = 1; n <= 50; n++) {
    sum += n;
}
console.log(sum);

// 26
for (let n = 1; n <= 20; n++) {
    if (n % 2 === 0) console.log(n);
}

// 27
for (let n = 1; n <= 10; n++) {
    console.log(`5 x ${n} = ${5 * n}`);
}

// 28
function countVowels(str) {
    let count = 0;
    for (let ch of str.toLowerCase()) {
        if ("aeiou".includes(ch)) count++;
    }
    return count;
}
console.log(countVowels("javascript is awesome"));

// 29
for (let n = 1; n <= 10; n++) {
    if (n === 7) break;
    console.log(n);
}

// 30
for (let n = 1; n <= 10; n++) {
    if (n === 5) continue;
    console.log(n);
}



// 31
function sayHello() {
    console.log("Hello, World!");
}

// 32
function greetUser(name) {
    return `Hello, ${name}!`;
}
greetUser("Nusrat");

// 33
function addNumbers(a, b) {
    return a + b;
}
addNumbers(2, 9);

// 34
function calculateSquare(n) {
    return n * n;
}
calculateSquare(5);

// 35
function isEven(n) {
    return n % 2 === 0;
}
isEven(8);

// 36
function findMax(a, b) {
    return a > b ? a : b;
}
findMax(8, 9);

// 37
function celsiusToFahrenheit(c) {
    return (c * 9) / 5 + 32;
}
celsiusToFahrenheit(5);

// 38
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
isLeapYear(2026);

// 39
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}
factorial(6);

// 40
function countLetters(str, letter) {
    let count = 0;
    for (let ch of str) {
        if (ch === letter) count++;
    }
    return count;
}

// 41
function checkAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear >= 18;
}
checkAge(2009);

// 42
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 43
function calculateTax(income) {
    return income * 0.15;
}
calculateTax(20000);

// 44
function sumUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) total += i;
    return total;
}

// 45
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// 46
function truncateString(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + "...";
}

// 47
function isPalindrome(word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
}

// 48
const double = (n) => n * 2;

// 49
function priceAfterDiscount(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

// 50
function calculateBMI(weight, height) {
    return weight / (height * height);
}