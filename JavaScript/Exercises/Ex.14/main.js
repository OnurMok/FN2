alert("Ex.14");

//Write a JavaScript program to find max in an array of integers;


let program = [14, 55, 145, 555];
console.log(program);


let maxnumbers = Math.max.apply(Math, program);
console.log(maxnumbers);