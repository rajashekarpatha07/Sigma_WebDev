const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const todos = [];

app.get('/', (req, res) => {
    res.send('Todo API');
});

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Create a new todo
app.post('/todos', (req, res) => {
    const todo = req.body;
    if (!todo.text) {
        return res.status(400).json({ error: 'Text is required for a todo item.' });
    }
    todo.id = todos.length + 1;
    todos.push(todo);
    res.status(201).json(todo);
});

// Update a todo
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const updatedTodo = req.body;

    const todoIndex = todos.findIndex(todo => todo.id == id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found.' });
    }

    todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
    res.json(todos[todoIndex]);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id == id);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'Todo not found.' });
    }

    todos.splice(todoIndex, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
