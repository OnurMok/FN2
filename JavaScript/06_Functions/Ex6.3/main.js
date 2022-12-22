alert("Ex6.3");

let num1 = 10;
let num2 = 6;
let operator = "-";

function calculator(n1,n2,op) {
    
    let res = 0;
    
    switch (op) {
        case "-":
           res = n1 - n2; 
            break;
        case "+":
            res = n1 + n2; 
             break;
        case "/":
            res = n1 / n2; 
            break;
        case "*":
            res = n1 * n2; 
             break;
        
        default:
            res= n1 + n2
            break;
    }

    return res;
    
}
    let res = calculator(num1,num2,operator);
    console.log(calculator(num1,num2,operator));
    console.log(res);