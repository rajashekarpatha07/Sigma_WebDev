function sum(n){

    let result = 0
    for (let i = 1; i <= n; i++) {
        result+=i;
    }
    console.log(result);
    return(result)
}

sum(10)