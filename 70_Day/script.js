// console.log("Hello world");

// let random_number = Math.floor(Math.random(0, 1) * 5)+1;

// console.log(random_number);

// colors = {
//     red: random_number = 1,
//     green: random_number = 2,
//     yellow: random_number = 3,
//     blue: random_number = 4,
//     purple: random_number = 5
// };

// document.querySelectorAll(".box").forEach(e=>{
    
// })


console.log("Hello world");

// Define colors in an array
const colors = ["red", "green", "yellow", "blue", "purple"];

// Get all the box elements
const boxes = document.querySelectorAll(".box");

// Use a for loop to assign a random color to each box
for (let i = 0; i < boxes.length; i++) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    boxes[i].style.backgroundColor = randomColor;  // Change the background color
}
