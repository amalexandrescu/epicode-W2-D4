// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

function giveMeRandom(n) {
  let randomisedArray = [];
  for (let i = 0; i < n; i++)
    randomisedArray.push(Math.floor(Math.random() * 10));

  return randomisedArray;
}

// console.log(a);

function checkArray(array) {
  let sum = 0;
  for (let el of array) {
    if (el > 5) {
      console.log(el, " is bigger than 5");
      sum += el;
    }
  }
  return sum;
}

let a = giveMeRandom(4);
console.log(a);
let result = checkArray(a);
console.log("The sum of el bigger than 5:", result);

/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

let array2 = [
  {
    price: 10,
    name: "trousers",
    id: 1,
    quantity: 2,
  },
  {
    price: 15,
    name: "skirt",
    id: 2,
    quantity: 1,
  },
  {
    price: 20,
    name: "shoes",
    id: 3,
    quantity: 2,
  },
];

function shoppingCartTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].price * arr[i].quantity;
  }
  return sum;
}

let result2 = shoppingCartTotal(array2);

console.log("Total shopping cart: ", result2);

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

let shoppingCart = [
  {
    price: 10,
    name: "trousers",
    id: 1,
    quantity: 2,
  },
  {
    price: 15,
    name: "skirt",
    id: 2,
    quantity: 1,
  },
  {
    price: 20,
    name: "shoes",
    id: 3,
    quantity: 2,
  },
];

function addToShoppingCart(arr, objInArr) {
  let total = 0;
  arr.push(objInArr);
  for (let i of arr) total += i.quantity;
  console.log(total);
}

let newObj = {
  price: 1,
  name: "soap",
  id: 4,
  quantity: 1,
};

console.log("The total items in the cart:");
addToShoppingCart(shoppingCart, newObj);

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

let shoppingCart4 = [
  {
    price: 10,
    name: "trousers",
    id: 1,
    quantity: 2,
  },
  {
    price: 15,
    name: "skirt",
    id: 2,
    quantity: 1,
  },
  {
    price: 20,
    name: "shoes",
    id: 3,
    quantity: 2,
  },
];

function maxShoppingCart(arr) {
  let max = 0;
  for (let el of arr)
    if (max < el.price) {
      max = el.price;
      mostExpensive = el;
    }

  console.log("The most expensive el is: ", mostExpensive);
  console.log(" which is: ", mostExpensive.name);
}

maxShoppingCart(shoppingCart4);

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

let shoppingCart5 = [
  {
    price: 10,
    name: "trousers",
    id: 1,
    quantity: 2,
  },
  {
    price: 15,
    name: "skirt",
    id: 2,
    quantity: 1,
  },
  {
    price: 20,
    name: "shoes",
    id: 3,
    quantity: 2,
  },
];

function latestShoppingCart(arr) {
  return arr[arr.length - 1];
}

console.log("The last item of my cart: ", latestShoppingCart(shoppingCart5));

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

function loopUntil(x) {
  let counter = 0;
  while (counter < 3) {
    let randomNr = Math.floor(Math.random() * 10);
    console.log("The random nr: ", randomNr);
    if (randomNr > x) {
      counter++;
    } else counter = 0;

    console.log("the current counter is: ", counter);
  }
}

loopUntil(4);

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

function average(arr) {
  let sum = 0;
  let counter = 0;
  for (let el of arr) {
    if (typeof el === "number") {
      sum += el;
      counter++;
    }
  }
  return sum / counter;
}

let arr7 = [1, 2, "lion", 3, 4];
let result7 = average(arr7);
console.log(result7);

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

function longest(arr) {
  let max = 0;
  let maxEl = "";
  for (let el of arr) {
    if (max < el.length) {
      max = el.length;
      maxEl = el;
    }
  }
  return maxEl;
}

array8 = ["lion", "cat", "elephant", "tiger", "panther"];

console.log("The longest element of the array: ", longest(array8));

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

let emailContent = "SPAMs";

function spam(string) {
  if (string === "SPAM" || string === "SCAM") return false;
  else return true;
}

console.log("The SPAM function: ", spam(emailContent));

//OR an alternative solution:

function verifySpam(string) {
  let size = string.length;
  let checkScam = false;
  let sequence = "";
  for (let i = 0; i <= size - 4; i++) {
    sequence = string.slice(i, i + 4);
    if (sequence === "SPAM" || sequence === "SCAM") {
      console.log("It's a SCAM");
      checkScam = true;
    }
  }

  if (checkScam === false) console.log("It is not a scam");
}

verifySpam("noSpAMsss");

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

function calendar(day) {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;

  console.log("Today is day: ", dd, "month: ", mm);

  return dd - day;
}

console.log("It' s been ", calendar(2), "since 2nd of October");

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {
  let matrix = [];
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      matrix.push(i.toString() + j.toString());
    }
  }
  console.log("This is the final matrix: ", matrix);
}

matrixGenerator(3, 3);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
