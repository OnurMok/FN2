alert("Self Quiz 2")

const c = "5"; 
console.log(typeof c)
//string

const d = 91;
console.log(typeof d) 
//number

let empty1 = undefined; 
//line 1
console.log(empty1)

let emtpy2 = null;
//line 2
console.log(emtpy2)

//Answer: Better is line 2

let aa = "Hello";
aa = "World";
console.log(aa);
//Console output is World 

let aaa = "World";
let bb = `Hello ${aaa}!`;
console.log(bb)
//Logged to the console is Hello World

let aaaa = "Hello";
aaaa = prompt("world");
console.log(aaaa);
// Value is what we write in prompt windows

let a1 = 5;
let b1 = 70;
let c1 = "5";
b1++;
console.log(b1);
// Output is 71 

let result = 3 + 4 * 2 / 8;
console.log(result)
//Result is 4 

let firstNum = 5;
let secondNUm = 10;
firstNum++;
secondNUm--;
let total = ++firstNum + secondNUm;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);
// Value of tatal is 16, value of total2 is 536 

const a2 = 5;
const b2 = 10;
console.log(a2 > 0 && b2 > 0);
console.log(a2 == 5 && b2 == 4);
console.log(true ||false);
console.log(a2 == 3 || b2 == 10);
console.log(a2 == 3 || b2 == 7);
// Logged to console is: true, false, true, true, false 