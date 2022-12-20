alert("Ex5.8");

let message = "";

let skipNumber = 3;

for (let i = 0; i < 10; i++) {
    console.log(i);

    if(i === skipNumber) {
        continue;
    }
    message += i;
}

console.log(message);

let message1 = "";

let skipNumber1 = 3;

for (let i = 0; i < 10; i++) {
    console.log(i);

    if(i === skipNumber1) {
        break;
    }
    message1 += i;
}

console.log(message1);