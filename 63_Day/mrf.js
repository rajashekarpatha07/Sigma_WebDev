let arr = [212,5,7,234,5,9];


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)  
// }
// console.log(newarr)

let newarr = arr.map((element)=>{
    return element**2
})

console.log(newarr)

const greaterthan100 = (e)=>{
    if(e>100){
        return true
    }
    return false
}

console.log(arr.filter(greaterthan100))

let arr2 = [1,2,3,4,5,6]

const red=(a,b)=>{
    return a*b;
}

console.log(arr2.reduce(red))