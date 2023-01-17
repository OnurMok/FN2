/*
1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223
*/


// let x = 32243;
// let stringOfX= x.toString();
// let arreyOfX = stringOfX.split("");
// console.log(arreyOfX);
// let reverseArrofX = arreyOfX.reverse();
// console.log(reverseArrofX);
// let reverseStringofX = reverseArrofX.join("");
// console.log(reverseStringofX);
// let reverseX = parseInt(reverseStringofX);
// console.log(reverseX);



function ReversNumber(x) {
    let stringOfX= x.toString();
    let arreyOfX = stringOfX.split("");
    let reverseArrofX = arreyOfX.reverse();
    let reverseStringofX = reverseArrofX.join("");
    return parseInt(reverseStringofX);
}
console.log(ReversNumber(322423));
console.log(ReversNumber(342534234245));
console.log(ReversNumber(44455545));
console.log(ReversNumber(44466675));

