import React, {useEffect, useState} from 'react';
import APIRequest from '../../API/fetch';

function Demonstration () {
    // This is the where the API Data will be stored.
    const [fufilled, setFufilled] = useState([])

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

    return(
        <section className="demonstration-container">
            <p> Testing </p>
            {fufilled.map((item)=>{
                return(
                    <div className="todo-items">
                        <ul>
                            <li> {item.id}   </li>
                            <li> {item.name}   </li>
                            <li> {item.timeNeeded}   </li>
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}

export default Demonstration