// Write a function that returns the sum of two integers
/**
* @param {number} a
* @param {number} b
* @return {number}
*/

 var solveMeFirst = function(a, b) {
     return a+b;
 }
  



  //02. Multiply
// Write a function that returns the product of two numbers.
/**
* @param {number} a
* @param {number} b
* @return {number}
*/

var multiply = function(a, b){
     return a*b;
}


// 03. Even or Odd
// Write a function that returns "Even" when a number is even and "Odd" when it is odd.
/**
* @param {number} number
* @return {string}
*/

var evenOrOdd = function(number) {
    if(number % 2 === 0){
         return "Even";
    }
    else{
        return "Odd";
    }
}


// 04. Return Negative
// Return the negative value of a number. If it is already negative, keep it negative.
/**
* @param {number} number
* @return {number}
*/


var makeNegative = function(number) {
     if(number > 0){
        return -number;
     }
     else{
        return number;
     }
}


// 05. Opposite Number
// Return the opposite of a given number.
/**
* @param {number} number
* @return {number}
*/

var opposite = function(number){
   if(number > 0){
     return -number;
   }
   else{
      return Math.abs(number);
   }
}

var value = opposite(-7)
console.log(value)