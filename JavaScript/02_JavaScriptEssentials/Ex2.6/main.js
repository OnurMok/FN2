alert("Exercise 2.6 from 26.11.2022");

let height = "inch";
console.log(height, "is height");
console.log(typeof height);

let weight = "pounds";
console.log(weight, "is weight");
console.log(typeof weight);

let inch = 2.54 
console.log(inch, "cms is one inch");
console.log(typeof inch);

let onekg = 2.2046 
console.log(onekg, "pounds is equal to 1kg");
console.log(typeof onekg);

console.log(`1 inche is equal to ${inch} cm`);
console.log(`${onekg} pounds is equal to 1 kg`);

let a = prompt("What is your weight in kg?");
console.log(a)

let b = prompt("What is your height in meter?");
console.log(b)

let c = a / (b*b) 
console.log(c)

console.log(`Your weight is ${a} and your height is ${b} m. So your BMI is ${c}`);