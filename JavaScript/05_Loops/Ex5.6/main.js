let emptyArray = [];

for (let i = 0; i < 10; i++) {
    emptyArray.push(i);
    
}
console.log(emptyArray);

for (let i = 0; i < emptyArray.length; i++) {
    console.log(emptyArray[i]);
    
}
console.log ("----------for of------")
for (let nova of emptyArray) {
    console.log(nova);
}