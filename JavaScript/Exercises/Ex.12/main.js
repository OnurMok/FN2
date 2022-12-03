alert("Ex12");

//Write a JavaScript program to sort the items of an array in random order ;

let program = ["Sun","Mon","Thu","Wend","Thurs","Fri"];
console.log(program);

let program1 = program[Math.floor(Math.random() * program.length)];

console.log(program1);