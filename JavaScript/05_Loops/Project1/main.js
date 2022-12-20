alert("Project1 in Loops");

let multTable = [];
let value = 7;

outher:
for (let i = 1; i < 5; i++) {
    let temp = [];
    inner:
    for (let j = 1; j < 10; j++) {
        let res = i * j;
        if (temp.length ===7) {
            break;
        }
        temp.push(res);
    }

    multTable.push(temp);
}
console.log(multTable);