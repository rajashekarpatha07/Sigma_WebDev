// console.log("Hello wrold");

// let boxes = document.getElementsByClassName("box");

// boxes[2].style.backgroundColor = "red";

// let box5 = document.getElementById("box5");
// box5.style.backgroundColor = "blue"

// document.querySelector(".box").style.backgroundColor = "blue"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "blue";
});
