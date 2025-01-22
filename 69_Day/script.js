console.log("Hello world");

let a = 5;

function factorial(number){
    if (number <= 0) {
        console.log("You cannot get factoral of number less than or equal to 0");
        return;
    }
    let arr = Array.from(Array(number+1).keys());
    let c = arr.slice(1,).reduce((a,b)=>{
        return a * b;
    })
    console.log(c);
}

factorial(a);