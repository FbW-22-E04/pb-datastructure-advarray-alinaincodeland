/* 
#### 1. Get total orders
* Return the total amount of orders. 
*/

const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ];

  // array.reduce
const sum = orders.reduce((item, object) => {
    return item + object.amount;
}, 0);

console.log("Reduce method -->", sum);


  // array.forEach
let sum1 = 0; 

orders.forEach(item => {
    sum1 += item.amount;
});

console.log("forEach method -->", sum1);


  // loop 

let sum2 = 0

for (let i=0; i < orders.length; i++) {
    sum2 += orders[i].amount;
}

console.log('loop method -->', sum2); 


/* 2 * Create a function that increments each element in the `arrayOfNumbers` by 1.
Return the a new array of modified elements. */

const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

function increment() {

    const newArray = arrayOfNumbers.map(x => ++x);
    
    return newArray; 
}

console.log(increment(arrayOfNumbers)) ;


/* 3. Filter Evens
Create a function called filterEvens that filters an array and only return
even numbers. The function should take an array of numbers as an argument,
and should not use a loop.
*/

function filterEvens(item) {
    const evenNum = item.filter(x => x % 2 === 0);
    console.log(evenNum);
}


filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

/* 
4. Filter Friends
* Given an array, create a function which filters array based on a search query.
*/

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterItems(arr, query) {
    return arr.filter((item) => 
    item.toLowerCase().includes(query.toLowerCase))
}

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];


/* 
5. Sum Up
* Write a function called sum that uses the reduce method to sum up an array of numbers. 
*/

function sum3 (arr) {
    return arr.reduce((a,b) => a+b, 0)
} 


sum3([1,2,3,4,5]); //returns 15
sum3([6,7,7]); //returns 20


/* 6. Square Root
* Given an array of numbers, find the square root of each element in the array.
*/

const arr = [1,4, 9,16,25,36]

function squareRoot (arr) {
    return arr.map(item => Math.sqrt(item))
} 

console.log(squareRoot(arr))