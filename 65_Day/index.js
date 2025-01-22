function factorial(n){
    if(n<0){
        return "Factorial is not defined for negative numbers"
    }
    let result = 1
    for (let i = 1; i <=n; i++) {
        result *=i;
    }
    console.log(result)
    return result
}

factorial(5)