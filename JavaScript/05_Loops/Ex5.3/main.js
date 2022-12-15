
let myWork = [];

for (let i = 1; i < 11; i++) {
    myWork.push(
        {
            name: "Lesson " + i,
            status: i % 2 > 0 ? true : false 
    }
    );
}

console.log(myWork);