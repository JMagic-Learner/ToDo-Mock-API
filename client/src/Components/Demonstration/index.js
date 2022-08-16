
import React, { useEffect, useState } from 'react';
import APIRequest from '../../API/fetch';

function Demonstration() {

    const [fufilled, setFufilled] = useState([])
    const [HTTPMethod, setHTTPMethod] = useState("CLEAR");

    // POST
    const [taskName, setTaskName] = useState("Enter new task name");
    const [time, setTime] = useState(0);

    // DELETE
    const [DeleteId, setDeleteID] = useState(0);

    // GET
    const [searchID, setSearchID] = useState(0);
    const [single, setSingle] = useState([])

    // PUT STATE
    const [update, setUpdate] = useState(0);
    const [updateName, setUpdateName] = useState("Update your task name");
    const [updateTime, setUpdateTime] = useState(0);

    useEffect(() => {
        APIRequest().then((data) => {
            if (data) {
                console.log("We have retrieved data from the APIRequest")
                console.log(data)
                setFufilled(data)
            }
        })
    }, [])

    useEffect(() => {
        if (fufilled.length == 0) {
            console.log("The APi has not fufilled it's promise yet")
        } else {
            console.log("The API has fullfilled it's promise, and has been incorporated into the state of the Demonstration component")
        }
    }, [fufilled])


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
        let idTarget = event.target.id
        setDeleteID(idTarget);
        setHTTPMethod("DELETE");
    }

    const actionPUT = (event) => {
        console.log("PUT")
        let idTarget = event.target.id
        let nameTarget = event.target.name
        let timeTarget = event.target.value
        console.log(idTarget,nameTarget,timeTarget)
        setUpdateName(nameTarget)
        setUpdate(idTarget);
        setUpdateTime(timeTarget);
        setHTTPMethod("PUT");
    }

    const actionGET = (event) => {
        console.log("GET")
        let idTarget = event.target.id
        setSearchID(idTarget);
        if (idTarget >= fufilled.length) {
            setHTTPMethod("UNKNOWNID");
        } else {
            setHTTPMethod("GET");
        }

    }

    const postRequest = async () => {
        console.log("TASKNAME: ", taskName, "TIME: ", time, " HTTPMethod: ", HTTPMethod)
        await fetch('http://localhost:4000/api/todos', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
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

    const deleteRequest = async () => {
        console.log("DELETE BY ID", DeleteId)
        await fetch(`http://localhost:4000/api/todos/${DeleteId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        }).then(function (response) {
            return response.json();
        })
            .then(data => {
                console.log(data);
                setFufilled(data);
            }).catch(err => console.log(err));
    }

    const putRequest = async () => {
        console.log("IUD: ", update, "UPDATED TASKNAME: ", updateName, "UPDATED TIME", updateTime);
        await fetch(`http://localhost:4000/api/todos/${update}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
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
        console.log("ID: ", searchID);
        await fetch(`http://localhost:4000/api/todos/${searchID}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }).then(function (response) {
            return response.json();
        })
            .then(data => {
                console.log(data);
                setSingle(data);
            }).catch(err => console.log(err));

    }

    return (
        <section className="demonstration-container">
            <h2> ToDo API - Returned Data </h2>
            <form className="search-container" onSubmit={handleFormSubmit}>
                <div className="input-group mb-3 d-flex">
                    <span className="input-group-text" id="basic-addon1">Task Name:</span>
                    <input type='text'
                        className="form-control"
                        aria-label="TaskName"
                        aria-describedby="basic-addon1"
                        name="searchID"
                        value={searchID}
                        onChange={handleChange}>
                    </input>
                    <button className="btn btn-primary"
                        type="submit"
                        id={searchID}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={actionGET}> SEARCH BY ID </button>
                </div>
            </form>

            <div className="CRUD-Operations" >
                <button type="submit"
                    className="btn btn-primary CRUD-Button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={actionPOST}>
                    Add new Task
                </button>
                {/* <button type="submit"
                    className="btn btn-primary CRUD-Button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={actionPUT}>
                    Edit a Task
                </button> */}
            </div>
            <br></br>
            <section className='todo-container'>

                {fufilled.map((item) => {
                    return (

                        <div className="card todo-items todo-item" >
                            <div className="card-body">
                                <h5 className="card-title">Task ID: {item.id}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Task Name: {item.name}</h6>
                                <p className="card-text"> {item.timeNeeded} minutes is needed to complete this task</p>
                                <div className="CRUD-Operations" >
                                    <form onSubmit={handleFormSubmit}>
                                        <button className="btn btn-secondary CRUD-Delete" id={item.id} type="submit" onClick={actionDELETE}> DELETE </button>
                                    </form>
                                    <button className="btn btn-secondary CRUD-Edit"
                                        id={item.id}
                                        name={item.name}
                                        value={item.timeNeeded}
                                        type="submit"
                                        onClick={actionPUT}
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                    > EDIT </button>
                                </div>
                            </div>
                        </div>

                    )
                })}

            </section>


            <form className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onSubmit={handleFormSubmit}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            {/* MODULE TITLE DEPENDS ON HTTPMETHOD */}
                            {HTTPMethod === "POST" && (
                                <h5 className="modal-title" id="exampleModalLabel">Add a new task</h5>
                            )}
                            {HTTPMethod === "PUT" && (
                                <h5 className="modal-title" id="exampleModalLabel">Edit a specific task</h5>
                            )}
                            {HTTPMethod === "GET" && (
                                <h5 className="modal-title" id="exampleModalLabel">Search results</h5>
                            )}

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        {/* MODULE INPUT FIELDS  DEPENDS ON HTTPMETHOD */}
                        {HTTPMethod === "POST" && (
                            <div>
                                <div className="modal-body d-flex">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">Task Name:</span>
                                        <input type='text'
                                            className="form-control"
                                            aria-label="TaskName"
                                            aria-describedby="basic-addon1"
                                            name="taskname"
                                            value={taskName}
                                            onChange={handleChange}>
                                        </input>
                                    </div>
                                </div>
                                <div className="modal-body d-flex">
                                    <div class="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" >Time to complete (Minutes): </span>
                                        <input type='text'
                                            className="form-control"
                                            aria-label="TaskName"
                                            aria-describedby="basic-addon1"
                                            name="tasktime"
                                            value={time}
                                            onChange={handleChange}>
                                        </input>
                                    </div>
                                </div>
                            </div>
                        )}

                        {HTTPMethod === "PUT" && (
                            <div>
                                <div className="modal-body d-flex">
                                    <div class="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">Enter the ID</span>
                                        <input type='text'
                                            className="form-control"
                                            aria-label="TaskName"
                                            aria-describedby="basic-addon1"
                                            name="updateID"
                                            value={update}
                                            onChange={handleChange}>
                                        </input>
                                    </div>
                                </div>
                                <div className="modal-body d-flex">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">Enter new task name</span>
                                        <input type='text'
                                            className="form-control"
                                            aria-label="TaskName"
                                            aria-describedby="basic-addon1"
                                            name="updateName"
                                            value={updateName}
                                            onChange={handleChange}>
                                        </input>
                                    </div>
                                </div>
                                <div className="modal-body d-flex">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" >Time to complete (Minutes): </span>
                                        <input type='text'
                                            className="form-control"
                                            aria-label="TaskName"
                                            aria-describedby="basic-addon1"
                                            name="updateTime"
                                            value={updateTime}
                                            onChange={handleChange}>
                                        </input>
                                    </div>
                                </div>
                            </div>
                        )}

                        {HTTPMethod === "GET" && (
                            <div>
                                {single.map((item) => {
                                    return (
                                        <div>
                                            <div className="modal-body d-flex" >
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1">ID</span>
                                                    <input type='text'
                                                        className="form-control"
                                                        aria-label="TaskName"
                                                        aria-describedby="basic-addon1"
                                                        value={item.id}
                                                    >
                                                    </input>

                                                </div>
                                            </div>
                                            <div className="modal-body d-flex" >
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1">Task Name</span>
                                                    <input type='text'
                                                        className="form-control"
                                                        aria-label="TaskName"
                                                        aria-describedby="basic-addon1"

                                                        value={item.name}
                                                    >
                                                    </input>
                                                </div>
                                            </div>
                                            <div className="modal-body d-flex" >
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1">Time to complete</span>
                                                    <input type='text'
                                                        className="form-control"
                                                        aria-label="TaskName"
                                                        aria-describedby="basic-addon1"
                                                        value={item.timeNeeded}
                                                    >
                                                    </input>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>)}


                        <div className="modal-footer">
                            {HTTPMethod !== "GET" && (
                                <div>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </form>




        </section>
    )
}

export default Demonstration