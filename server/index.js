const http = require("http");
const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data/db.js')
const drilledData = data.todo
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
  }));

// HTTPS requests
// app.get()
// app.post()
// app.put()
// app.delete()

app.get('/', (req,res) => {
    // this is a route handler
    res.send('Hello World!');
});

app.get('/api/todos', (req,res) => {
    console.log("We are attempting to retrieve all ToDo")
    res.send(drilledData)
})

app.post('/api/todos', (req,res) => {
    console.log("We are attempting to post a new task to ToDo")
    // The end client is going to define the request body.
    if (!req.body.name || !req.body.timeNeeded){
        res.status(400).send("Name and/or timeNeeded is not specified")
        return;
    }
    
    const todo = {
        id: drilledData.length,
        name: req.body.name,
        timeNeeded: req.body.timeNeeded
    };
    drilledData.push(todo);
    res.send(drilledData)
})
// get a single To Do via id
app.get('/api/todos/:id/', (req,res)=> {
    console.log("We are attempting to find the value of todo by id")
    const pending = drilledData.find( item => item.id === parseInt(req.params.id));
    if (!pending) {
        res.status(404)
    }
    res.send(pending)
})

app.delete('/api/todos/:id/', (req,res)=> {
    console.log("We are attempting to delete the value of todo by id")
    if (!req.params.id){
        res.status(400).send("ID is not specified")
        return;
    }
    const pending = drilledData.filter( item => item.id !== parseInt(req.params.id));
    if (!pending) {
        res.status(404)
    }
    res.send(pending)
})

// ENV variables 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));


