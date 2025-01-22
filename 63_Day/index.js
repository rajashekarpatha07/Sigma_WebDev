console.log("Tutorial of Arrays")

let arr = [1,2,3,4,5]

console.log(arr)
console.log(arr.length);

console.log(arr[0]) //we can access the first element of the array using index 0

// we can change the element value in the array using index
arr[3] = 234;
console.log(arr);

// arry functions

console.log(arr.toString) // converts array to string...!
console.log(arr.join("-")) // converts array to string with comma separated values
console.log(arr.concat([6,7,8])) // adds new elements to the array
console.log(arr.pop())
arr.push("Raju"); // adds a single element to the end of the array
arr.push(9237)
console.log(arr);
console.log(arr.shift())
console.log(arr.unshift("Unshifted"))
console.log(arr);

delete arr[0];
console.log(arr);

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [...a1, ...a2]; // spread operator to merge two arrays
console.log(a3);