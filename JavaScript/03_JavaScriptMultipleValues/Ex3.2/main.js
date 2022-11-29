alert("Exercise 3.2");

let List = [];
console.log(typeof List);

List.push("Milk","Bread","Apple");
console.log(List);

List.splice(1,1,"Banana", "Eggs");
console.log(List);

List.pop();
console.log(List);

List.sort();
console.log(List);

let indexOfMilk = List.indexOf("Milk");
console.log(indexOfMilk);

List.splice(1,0,"Carrots", "Lettuce");
console.log(List);

List2 = ["Juice", "Pop"]
console.log(List2);

List3 = List.concat(List2, List2);
console.log(List3);

let Pop = List3.lastIndexOf("Pop");
console.log(Pop);

console.log(List3);
