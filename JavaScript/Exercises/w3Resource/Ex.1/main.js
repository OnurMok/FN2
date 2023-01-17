/* 
1. Write a JavaScript program to display the current day and time in the following format.  

Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/ 

//console.log(`Today is : ${"Tuesday"}`);

let Denovi = ["Nedela", "Ponedelnik","Vtornik","Sreda","Cetvrtok","Petok", "Sabota"];


let indexZaDen = new Date().getDate();
console.log(`Denes e : ${Denovi[2]}`);
//console.log(new Date().getDay());

let datum = new Date ();
let saat = datum.getHours();
let minitu = datum.getMinutes();
let sekundi = datum.getSeconds();

let saatNov;
let amPm;

if (saat > 12) {
    saatNov = saat - 12;
    amPM = "PM"
} else {
    saatNov = saat;
    amPM = "AM"
}

console.log(`Momentalnoto vreme e : ${saatNov} ${amPm} : ${minitu} : ${sekundi}`);



