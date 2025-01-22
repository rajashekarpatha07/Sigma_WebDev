let a = [1,247,9,6,3];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index]
//     console.log(element);
// }

// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

obj = {
    a:0,
    b:1,
    c:2,
    d:3
}

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element);
//     }
// }

for (const element of a) {
    console.log(element)
}