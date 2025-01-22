console.log("Advanced consepts in java script")


function sum(a,b,c){
    return a+b+c;
}
// async function sleep() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);
//     })
// }

 

// (async function main(){
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b)
// })()


// Destructing...!

let [x,y, ...rest] = [1,2,12,17,12,132];
console.log(x,rest)


let obj = {
    a: 0,
    b:10,
    e:283,
    f:109
}
// let {q,w} = obj

let arr = [1,2,3];

console.log(sum(...arr))