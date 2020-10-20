//Declare a number as a variable
var num1 = 100;

console.log(num1);
console.log(typeof num1);

//Declare a number as an object
var number1 = new Number(1000);
var number2 = new Number(1000);
var number3 = number1
console.log(number1 == number2); //this expression will return true or false
//It will return false because these are two different objects

console.log(number3 == number1);
//This will return true since number3 is declared and referencing to number1

console.log(number3 === number1);
//This will return true since === checks to see if the value and reference are the same

/**
 * == : operator compares number object and not the value
 * ===: operator compares object/type and value
 */


