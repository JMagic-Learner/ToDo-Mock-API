import React from 'react'

//IMAGES//

import Diagram1 from '../../Assets/ExpressAPIDiagram1.jpg'
import Diagram2 from '../../Assets/ExpressAPIDiagram2.jpg'
import Diagram3 from '../../Assets/ExpressAPIDiagram3.jpg'
import Diagram4 from '../../Assets/ExpressAPIDiagram4.jpg'
function Explanation() {
    return(
        <section className="explanation-container">
            <section className="dependency-block">
            <h2> EXPLAINING EXPRESS </h2>
            </section>
            <section className="dependency-block">
            <h3> BACK TO BASICS: HTTP REQUESTS </h3>
            <section className="dependency-content">
            {/* <section className="dependency-content"> */}
                <p className="text-white"> Before we begin explaining Express, we need to go over the basic relationship between a client and server, and how a request is made</p>
                
                <img src={Diagram1}/>
                <p className="text-white"> The above diagram showcases the end-client and the server. The End client is being genearted by an REACT application, while the server is being generated on LocalHost:4000 via Express </p>
                <p className="text-white"> In all applications, communication between the end client and a server is done through HTTPS requests </p>
            </section>
            <h3> HTTP REQUEST METHODS </h3>
            <section className="dependency-content">
            {/* <section className="dependency-content"> */}
                <p className="text-white"> There are four primary HTTP Methods: POST, GET, PUT, DELETE. There are other HTTP methods showcased below.</p>
                <img src={Diagram2}/>
                <p className="text-white"> These HTTP request methods correspond to CRUD operations( CREATE , READ, UPDATE, DELETE) </p>
            </section>
            <h3> THE EXPRESS SERVER: SETTING UP </h3>
            <section className="dependency-content">
            {/* <section className="dependency-content"> */}
                <p className="text-white"> Whenever a request is sent by the client, it is sent in a string format.</p>
                <p className="text-white"> However if you have prior experience with APIs, you know that the data sent back to the client is in JSON format ( JavaScript Object Notation )</p>
                <p className="text-white"> You might be wondering how Express manages to received a request from the end-client, and parses it into JSON format.</p>
                <img src={Diagram3}/>
                
                <h4 className="text-white"> Lets start with what EXPRESS can do for us.</h4>
                <ul className="text-white">
                    <li> Express defines the server endpoint we are sending client requests to (Localhost:4000 etc)</li>
                    <li> Express defines how we parse incoming requests</li>
                    <li> Express defines how to process incoming requests (Detect GET,POST,PUT,DELETE), and what data is returned</li>
                </ul>
                <h4 className="text-white"> Lets define a data set.</h4>
                <p className="text-white"> In our server file directory, we created a db.js file.</p>
                <img src={Diagram4}/>   
            </section>
            </section>
        </section>
    )
}

export default Explanation