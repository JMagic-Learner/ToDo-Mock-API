// The real difference between require('express') and express() is that require('express') allows you to have access to any public functions or properties exposed by module.exports.

// The express() syntax is the equivalent of saying new express(). It creates a new instance of express that you can then assign to a variable and interact with.
const express = require('express');
const app = express()
const path = require('path');
const cors = require('cors');
const data = require('./data/db.json')

let drilledData = data
// cors is used to prevent Cross-Origin Resource Sharing (CORS) errors.
//For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy.
// Same origin Policy prevents cross site scripting. We woulnd't want a "trusted site" to inject their javascript
app.use(cors({
    origin: 'http://localhost:3000'
  }));

//urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded( {extended: true} ))
// express.json is a method to take the incoming request object and convert it to JSON format/ JAvascript Object Notation
app.use(express.json());

// require('dotenv').config();

app.get('/api/todos', (req,res) => {
    console.log("We are attempting to retrieve all ToDo")
    res.send(drilledData)
})

app.post('/api/todos', (req,res) => {
    console.log("We are attempting to post a new task to ToDo")
    // The end client is going to define the request body.
    const todo = {
        id: drilledData.length,
        name: req.body.name,
        timeNeeded: req.body.timeNeeded
    };
    drilledData.push(todo);
    res.send(drilledData)

    if (!req.body.name || !req.body.timeNeeded){
        res.status(400).send("Name and/or timeNeeded is not specified")
        return;
    }
})
// get a single To Do via id
app.get('/api/todos/:id/', (req,res)=> {

    if (!req.params.id) {
        res.status(400).send("We have not detected an ID")
    } else {
    console.log("We are attempting to find the value of todo by id")
    const pending = drilledData.filter( item => item.id === parseInt(req.params.id));
    res.send(pending)
    }
  
})

app.delete('/api/todos/:id/', (req,res)=> {
    
   
    if (drilledData.filter( item => item.id === parseInt(req.params.id))) {
    console.log("We are attempting to delete the value of todo by id")
    drilledData= drilledData.filter( item => item.id !== parseInt(req.params.id));
    // THIS FOLLOWING CODE IS REQUIRED TO ADJUST THE ID, EVERY DELETE
    drilledData.map((item,index)=>{
        item.id=parseInt(index)
    })
    res.send(drilledData)
    } else {
    res.status(400).send("ID is not specified")
    }

})

app.put('/api/todos/:id/', (req,res)=> {
    console.log("We are attempting to update the value of todo by id")
    console.log(req.params.id)
    // const pending = drilledData.filter( item => item.id === parseInt(req.params.id));

    if (drilledData.filter( item => item.id === parseInt(req.params.id))) {
        console.log("We have detected a todo Item that matches the params.id");
        drilledData.map((item)=>{
            if (item.id== parseInt(req.body.id)) {
                item.id=parseInt(req.body.id)
                item.name=req.body.name
                item.timeNeeded=req.body.timeNeeded
                console.log("This is the new item", drilledData);
            }
        })
        res.send(drilledData)
    } else {
        res.status(400).send("ID is not valid")
        return;
    }
    

        
    
})

app.get('*', (req, res) => {
    if (req) {
      console.log("A request has been sent");
    }
    if (res) {
      console.log("A response has been generated");
    }
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });


// ENV variables 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));


