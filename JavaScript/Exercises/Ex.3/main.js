alert("Exercise 3 - 26.11.22");

let myNumber = 15;
console.log(typeof(myNumber));
//Prediction: number
//Actual: number

let a = 5.5;
console.log(typeof(a));
//Prediction: decimal number
//Actual: number

let b =NaN
console.log(typeof(b));
//Prediction: number
//Actual: number

let c = "Hello"
console.log(typeof(c));
//Prediction: string
//Actual: string 

let d = true
console.log(d)
console.log(typeof(d));
//Prediction: Boolean
//Actual: true

let f = 1 !=2 
console.log(f);
console.log(typeof(f));
//Prediction: boolean
//Actual: true 

let g = "hamburger" + "s"
console.log(g);
console.log(typeof(g));
//Prediction: Hamburgers
//Actual: string

let h = "hamburgers" - "s"
console.log(h);
console.log(typeof(h));
//Prediction: string
//Actual: NaN


let test = "1" + "3";
//Prediction: 13
console.log(test)
console.log(typeof(test));
//Actual: 13 - String 


let test1 = "1" - "3";
//Prediction = 13
console.log(test1);
console.log(typeof(test1));
//Actual: -2 - Number

let test2 = "johnny" + "5";
//Prediction: johnny5
console.log(test2);
console.log(typeof(test2));
//Actual: johnny5 - string

let test3 = "johnny" - "5"
//Prediction: -johnny5
console.log(test3);
console.log(typeof(test3));
//Actual: NaN - number

let test4 = 99 * "luftbaloons"
//Prediction: 
console.log(test4);
console.log(typeof(test4));
//Actual: NaN - number

alert("2nd part");

let nameShuttle = "Determination"
console.log(nameShuttle);
console.log(typeof(nameShuttle));

let shuttleSpeed = 17.500
console.log(shuttleSpeed);
console.log(typeof(shuttleSpeed));

let distMars = 225000000
console.log(distMars);
console.log(typeof(distMars));

let distMoon = 384.400
console.log(distMoon);
console.log(typeof(distMoon));

const milesperkm = 0.621;
console.log(milesperkm);
console.log(typeof(milesperkm));

//miles to km = 100*0.621 = 61.2

let mlsToMars = distMars * milesperkm
console.log(mlsToMars, 'mls to Mars');

let hoursToMars = mlsToMars / shuttleSpeed;
console.log(hoursToMars, "hours to Mars");

let daysToMars = hoursToMars / 24;
console.log(daysToMars, "days to Mars");

let mlsToMoon = distMoon * milesperkm
console.log(mlsToMoon, 'mls to Moon');

let hoursToMoon = mlsToMoon / shuttleSpeed;
console.log(hoursToMoon, "hours to Moon");

let daysToMoon = hoursToMoon /24;
console.log(daysToMoon, "days to Moon");


alert("3rd Part");

console.log(`${nameShuttle} will take ${daysToMars} days to reach Mars.`);
console.log(`${nameShuttle} will take ${daysToMoon} days to reach Moon.`);
