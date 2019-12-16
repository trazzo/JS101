let num = 103.941 
 
// Specify decimal points console.log(num.toFixed(2)) 
console.log(num.toFixed(1));
// Round numbers console.log(Math.round(num)) console.log(Math.floor(num)) console.log(Math.ceil(num)) 
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
// Generate a random number let min = 0 let max = 1 let randomNum = Math.floor(Math.random() * (max - min + 1)) + min 
let min = 0; 
let max = 1;
let random = Math.random();
console.log(`random number Math.random() ${random}`); 
let randomNum = Math.round(random * (max - min + 1)) + min;
console.log(randomNum);