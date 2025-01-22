console.log("Excerice-9 Solution....")

console.log("Calculator")

let a = prompt("Enter the first number: ")
let b = prompt("Enter the second number: ")
let operator = prompt("Enter the operator (+, -, *, /): ")

let result;
if(operator=='+'){
    result = parseInt(a) + parseInt(b);
    alert(`The sum of ${a} and ${b} is ${result}`)
}
else if(operator == '-'){
    result == parseInt(a) - parseInt(b);
    alert(`The difference of ${a} and ${b} is ${result}`)
}
else if(operator == '*'){
    result = parseInt(a) * parseInt(b);
    alert(`The quietint of ${a} and ${b} is ${result}`);
}
else if(operator == '/'){
    if(b != 0){
        result = parseInt(a) / parseInt(b);
        alert(`${a} divided by ${b} is ${result}`)
    }
    else{
        console.log("Error! Division by zero is not allowed.");
    }
}
else{
    console.log("Error! Invalid operator");
}
