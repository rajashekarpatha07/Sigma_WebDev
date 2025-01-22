function Getdata(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(455);
        }, 5000);
    }
)}

console.log("loading Modules");

console.log("doing somthing");

console.log("Still loading data please...wait");

let data = Getdata();

console.log(data)

console.log("The data processed...! you can move on")