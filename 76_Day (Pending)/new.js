async function Getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}

async function main() {
    console.log("Loading Modules");
    console.log("Do something else");   
    console.log("Load Data");

    let data = await Getdata();
    console.log(data);
    console.log("data processed..!")
    console.log("Task 2")
}
