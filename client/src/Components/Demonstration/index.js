import React, {useEffect, useState} from 'react';
import APIRequest from '../../API/fetch';

function Demonstration () {
    // This is the where the API Data will be stored.
    const [fufilled, setFufilled] = useState([])
    const [HTTPMethod,setHTTPMethod] = useState("");

    // POST
    const [taskName, setTaskName] = useState("Task Name");
    const [time, setTime] = useState(0);

    // DELETE
    const [DeleteId, setDeleteID] = useState(0);

    // GET
    const [searchID, setSearchID] = useState(0);
    const [single, setSingle] = useState([])
   
    // PUT STATE
    const [update, setUpdate] = useState(0);
    const [updateName, setUpdateName] = useState(0);
    const [updateTime, setUpdateTime] = useState(0);

    useEffect(()=>{
        APIRequest().then((data) => {
            if (data) {
                console.log("We have retrieved data from the APIRequest")
                setFufilled(data)
            }
        })
    },[])

    useEffect(()=>{
        if (fufilled.length == 0) {
            console.log("The APi has not fufilled it's promise yet")
        } else {
            console.log("The API has fullfilled it's promise, and has been incorporated into the state of the Demonstration component")
        }
    },[fufilled])

    useEffect(()=>{
        console.log("A HTTPMethod has been specified")
       
    },[HTTPMethod])

    const handleChange = (event) => {
        const { name, value } = event.target;
   
        if (name === 'taskname') {
           setTaskName(value);
           }
        if (name === 'tasktime') {
            setTime(parseInt(value));
        }
        if (name === 'updateID') {
            setUpdate(parseInt(value));
        }
        if (name === 'updateName') {
            setUpdateName(value);
        }
        if (name === 'updateTime') {
            setUpdateTime(parseInt(value));
        }
        if (name === 'searchID') {
            setSearchID(parseInt(value));
        }
        }
    
        const handleFormSubmit = async (event) => {
            event.preventDefault();
          
            
            if (HTTPMethod === "POST") {
                console.log("you have attempted to submit an article");
                postRequest()
            }
            if (HTTPMethod === "DELETE") {
                console.log("You are attempting to delete a ToDo Task by ID")
                deleteRequest()
            }
            if (HTTPMethod === "PUT") {
                console.log("You are attempting to update a ToDo Task by ID")
                putRequest()
            }
            if (HTTPMethod === "GET") {
                console.log("You are attempting to retrieve a ToDo Task by ID")
                getRequest()
            }

        }

        const actionPOST = () => {
            console.log("POST")
            setHTTPMethod("POST");
        }

        const actionDELETE = (event) => {
            console.log("DELETE")
            let idTarget = event.target.value
            setDeleteID(idTarget);
            setHTTPMethod("DELETE");
        }

        const actionPUT = (event) => {
            console.log("PUT")
            let idTarget = event.target.value
            setUpdate(idTarget);
            setHTTPMethod("PUT");
        }

        const actionGET = (event) => {
            console.log("GET")
            let idTarget = event.target.value
            setSearchID(idTarget);
            setHTTPMethod("GET");
        }

        const  postRequest = async () => {
            console.log("TASKNAME: ",  taskName, "TIME: ",time, " HTTPMethod: ", HTTPMethod)
            const postSebnd = await fetch('http://localhost:4000/api/todos', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                    body:  JSON.stringify({
                    name: taskName,
                    timeNeeded: time
                    })
                     
            }).then(function (response) {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setFufilled(data);
            }).catch(err => console.log(err));
        }

        const  deleteRequest = async () => {
            console.log("DELETE BY ID", DeleteId)
            const postSebnd = await fetch(`http://localhost:4000/api/todos/${DeleteId}`, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
            }).then(function (response) {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setFufilled(data);
            }).catch(err => console.log(err));
        }

        const putRequest = async () => {
            console.log("IUD: " , update, "UPDATED TASKNAME: ", updateName, "UPDATED TIME" , updateTime);
            const postSebnd = await fetch(`http://localhost:4000/api/todos/${update}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body:  JSON.stringify({
                    id: update,
                    name: updateName,
                    timeNeeded: updateTime
                    })
            }).then(function (response) {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setFufilled(data);
            }).catch(err => console.log(err));
            
        }

        const getRequest = async () => {
            console.log("ID: " , searchID);
            const postSebnd = await fetch(`http://localhost:4000/api/todos/${searchID}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            }).then(function (response) {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setSingle(data);
            }).catch(err => console.log(err));
            
        }

    return(
        <section className="demonstration-container">
            <h2> ToDo API - Returned Data </h2>
            <section className='todo-container'>
            {fufilled.map((item)=>{
                return(
                    <form className="todo-items border rounded" onSubmit={handleFormSubmit}>
                            <p className="text-black"> ID: {item.id}   </p>
                            <p className="text-black"> Time: {item.timeNeeded}   </p>
                            <p className="text-black"> Name: {item.name}   </p>
                            <button value={item.id} type="submit" onClick={actionDELETE}> DELETE </button>
                    </form>
                )
            })}
            </section>
            <form className="CRUD-Operations" onSubmit={handleFormSubmit}>
                <h4> CRUD OPERATIONS - POST</h4>
                <input type='text' name="taskname" value={taskName} onChange={handleChange}></input>
                <input type='text' name="tasktime" value={time} onChange={handleChange}></input>
                <button type="submit" onClick={actionPOST}> POST </button>
               
            </form>
            <form className="CRUD-Operations" onSubmit={handleFormSubmit}>
                <h4> CRUD OPERATIONS - PUT</h4>
                <input type='text' name="updateID" value={update} onChange={handleChange}></input>
                <input type='text' name="updateName" value={updateName} onChange={handleChange}></input>
                <input type='text' name="updateTime" value={updateTime} onChange={handleChange}></input>
                <button type="submit" value={update} onClick={actionPUT}> PUT </button>
            </form>
            <form className="CRUD-Operations" onSubmit={handleFormSubmit}>
                <h4> CRUD OPERATIONS - GET</h4>
                <input type='text' name="searchID" value={searchID} onChange={handleChange}></input>
                <button type="submit" value={searchID} onClick={actionGET}> GET </button>
            </form>
            <section className='todo-container'>
            {single.map((item)=>{
                return(
                    <form className="todo-items border rounded" onSubmit={handleFormSubmit}>
                            <p className="text-black"> ID: {item.id}   </p>
                            <p className="text-black"> Time: {item.timeNeeded}   </p>
                            <p className="text-black"> Name: {item.name}   </p>
                            <button value={item.id} type="submit" onClick={actionDELETE}> DELETE </button>
                    </form>
                )
            })}
            </section>
            
        </section>
    )
}

export default Demonstration