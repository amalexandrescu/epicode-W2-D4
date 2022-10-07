/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2) {
  let area = l1 * l2;
  return area;
}

console.log("Area function:", area(2, 5));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(i1, i2) {
  if (i1 === i2) return (i1 + i2) * 3;
  else return i1 + i2;
}

console.log("Sum function: ", crazySum(2, 2));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(number) {
  let dif = number - 19;
  if (number > 19) return Math.abs(dif) * 3;
  else return Math.abs(dif);
}
console.log("Absolute difference function: ", crazyDiff(22));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) return true;
  else return false;
}

console.log("Boundary function: ", boundary(222));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(str) {
  let strElArray = str.split(" ");
  if (strElArray[0] === "Strive") return str;
  else {
    strElArray.unshift("Strive");
    let concatNewString = strElArray.join(" ");
    return concatNewString;
  }
}
console.log("\nFunction begin with Strive:");
console.log(strivify("Hello there!"));
console.log(strivify("Strive school is here"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(positive) {
  if (positive % 3 === 0 || positive % 7 === 0)
    console.log("The number is a multiple of 3 or 7");
  else console.log("The number is not a multiple of 3 or 7");
}
console.log("\nFunction multiple of 3 or 7:");
check3and7(14);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(someString) {
  let letterStringArray = someString.split("");
  let reveresedStrArray = [];
  for (let i = 0; i < letterStringArray.length; i++) {
    reveresedStrArray.unshift(letterStringArray[i]);
  }
  console.log(reveresedStrArray.join(""));
}

console.log("\nReverse string function:");
reverseString("Epicode school");

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(string8) {
  let stringCopyArr = string8.split(" ");
  // console.log(stringCopy);
  let upperString = [];
  for (let el of stringCopyArr) {
    let upperEl = el.charAt(0).toUpperCase() + el.slice(1);
    upperString.push(upperEl);
  }
  return upperString.join(" ");
}

console.log("\nFirst letter uppercase of each word in a string:");
console.log(upperFirst("hello there, epicode!"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(string9) {
  let cuttedString = string9.slice(1, string9.length - 1);
  console.log(cuttedString);
}

console.log("\nCut first and last character of a string function: ");
cutString("Alexandra Alexandrescu");

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n10) {
  let randomArray = [];
  for (let i = 0; i < n10; i++) {
    randomArray[i] = Math.floor(Math.random() * 10);
  }

  return randomArray;
}

console.log("\nArray with n random integers numbers function:");
console.log(giveMeRandom(7));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
