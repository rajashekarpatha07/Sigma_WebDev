import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/todo.js";
const app = express();
const port = 3000;


let conn = await mongoose.connect("mongodb://localhost:27017/Todo")

app.get("/", (req, res) => {
    const todo = new Todo({title:"Todo Title", description:"It is a todo decription ", Isdone:false});
    todo.save()
    console.log("It is a home page");
    res.send("Welcome to the Home Page!");
});

app.get("/a", async (req,res)=>{
    let todo = await Todo.findOne({});
    res.json({title: todo.title, description:todo.description, Isdone:todo.Isdone});
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
