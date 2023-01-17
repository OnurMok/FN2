/*
1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223
*/


let x = 32243;
let stringOfX= x.toString();
let arreyOfX = stringOfX.split("");

console.log(arreyOfX);
let reverseArrofX = arreyOfX.reverse();
console.log(reverseArrofX);
let reverseStringofX = reverseArrofX.join("");
console.log(reverseStringofX);
let reverseX = parseInt(reverseStringofX);
console.log(reverseX);
