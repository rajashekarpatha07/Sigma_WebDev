let boxes = document.getElementsByClassName("box");
console.log(boxes)


function GetRandomnumber(){
    let a = Math.ceil(0+Math.random()*255);
    let b = Math.ceil(0+Math.random()*255);
    let c = Math.ceil(0+Math.random()*255);
    return `rgb(${a}, ${b}, ${c})`;
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = GetRandomnumber();
    e.style.color = GetRandomnumber();
    })
