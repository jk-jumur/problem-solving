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

// 06. Simple Array Sum
// Return the sum of all integers in an array.
/**
* @param {number[]} ar
* @return {number}
*/

var simpleArraySum  = function (ar){
    let sum = 0;
     for(let i = 0; i <ar.length; i ++){
      sum = sum + ar [i]
     }
     return sum;
}

// 07. sleepIn
// Return true if it is not a weekday or you are on vacation.
/**
* @param {boolean} weekday
* @param {boolean} vacation
* @return {boolean}
*/

var sleepIn = function(weekday, vacation){
    if(!weekday || vacation) {
       return true;
    } else{
         return false;
    }
   
}


// 08. monkeyTrouble
// Two monkeys are in trouble if both are smiling or neither is smiling. Return true in that case.
/**
* @param {boolean} aSmile
* @param {boolean} bSmile
* @return {boolean}
*/


var monkeyTrouble = function(aSmile, bSmile){
     if(aSmile && bSmile){
        return true
     }
     else if(!aSmile && !bSmile){
        return true
     }
     else{
       return false;
     }
}

// 09. sumDouble
// Return the sum of two integers, but return double the sum when they are equal.
/**
* @param {number} a
* @param {number} b
* @return {number}
*/

var sumDouble = function(a, b){
     if(a === b){
        return (a+b)*2;
     }
     else{
       return a+b;
     }
}


// 10. diff21
// Return the absolute difference between n and 21, doubling it when n is greater than 21.
/**
  * @param {number} n
  * @return {number}
  */

var diff21 = function(n){
     if(n > 21){ 
       return (n-21) * 2;
     }

     else{
        return 21-n;
     }
}

// 11. parrotTrouble
// Return true when a talking parrot is causing trouble outside the allowed hours of 7 through 20.
/**
  * @param {boolean} talking
  * @param {number} hour
  * @return {boolean}
  */


var parrotTrouble = function(talking, hour){
     if(talking && (hour < 7 || hour > 20)){
        return true
     }
   else{
   return false;
  }
  }

  

//   12. makes10
// Return true if either number is 10 or their sum is 10.
/**
  * @param {number} a
  * @param {number} b
  * @return {boolean}
  */


var makes10 = function(a , b){
    if((a === 10) || (b === 10) || (a + b === 10)){
        return true;
    }
    else{
      return false;
    }
}






