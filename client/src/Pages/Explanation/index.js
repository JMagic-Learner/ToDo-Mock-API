import React from 'react'

//IMAGES//

import Diagram1 from '../../Assets/ExpressAPIDiagram1.jpg'
import Diagram2 from '../../Assets/ExpressAPIDiagram2.jpg'
import Diagram3 from '../../Assets/ExpressAPIDiagram3.jpg'
import Diagram4 from '../../Assets/ExpressAPIDiagram4.jpg'
import Diagram5 from '../../Assets/ExpressAPIDiagram5.jpg'
import Diagram6 from '../../Assets/ExpressAPIDiagram6.jpg'
import Diagram7 from '../../Assets/ExpressAPIDiagram7.jpg'
import Diagram8 from '../../Assets/ExpressAPIDiagram8.jpg'
import Diagram9 from '../../Assets/ExpressAPIDiagram9.jpg'
function Explanation() {
    return( 
    
    <section>
            <h2> BACK TO BASICS: HTTP REQUESTS </h2>
            <section className="dependency-content">
                <img src={Diagram1}/>
                <div className="dependency-HTMLoutput border rounded" >
                <p> Before we begin explaining Express, we need to go over the basic relationship between a client and server, and how a request is made
                The above diagram showcases the end-client and the server. The End client is being genearted by an REACT application, while the server is being generated on LocalHost:4000 via Express.
                For this demonstration, we are able to simultenously run both client and server via a node package known as concurrently.</p>
                </div>

           
           
                <h2 className="text-white"> HTTP REQUEST METHODS </h2>
                    <img src={Diagram2}/>
                <div className="dependency-HTMLoutput border rounded text-justify" >
                <p> There are four primary HTTP Methods: POST, GET, PUT, DELETE. There are other HTTP methods showcased above
                These HTTP request methods correspond to CRUD operations( CREATE , READ, UPDATE, DELETE). This demonstration will go over the POST, GET, PUT, DELETE.
                </p>
                </div>
            
                <h2 className="text-white"> WHAT IS EXPRESS </h2>
                <div className="dependency-HTMLoutput border rounded text-justify" >
                <p> Express is a unopinionated Node framework. It's core design philosophy is to be a minimalist Javascript based framework, to help developers have the freedom of choice in building servside logic and routing.
                    While very basic, Express allows extensive use of middleware. The most common is express.json() and urlencoded.

                </p>
                </div>
           
                
                
            
            
           
                <h2 className="text-white"> THE EXPRESS SERVER: REQUEST PROCESS </h2>
            <img src={Diagram3}/>
                
                <div className="dependency-HTMLoutput border rounded text-justify" >
                <p> Whenever a request is sent by the client, it is sent in a string format.
         The reason why is partially explained in in the HTTP accronym, HyperText Transfer Protocol, aka, it is litearlly a text-based protocol
                
                However if you have prior experience with APIs, you know that the data sent back to the client is in JSON format ( JavaScript Object Notation )
                 You might be wondering how Express manages to received a request from the end-client, and parses it into JSON format. This is later explained in THE EXPRESS SERVER: SETTING UP</p>
                </div>
           
            
              {/* <blockquote className="blockquote text-left">
                <p className="mb-0"> Express defines the server endpoint we are sending client requests to (Localhost:4000 etc)</p>
                <p className="mb-0"> Express defines how we parse incoming requests</p>
                <p className="mb-0"> Express defines how to process incoming requests (Detect GET,POST,PUT,DELETE), and what data is returned</p>
              </blockquote> */}

           
                <h2 className="text-white"> THE EXPRESS SERVER: DEFINING DATA SET</h2>
                <img src={Diagram4}/>
                <div className="dependency-HTMLoutput border rounded " >
                <p> In our server file directory, we created a db.json file. This is a static file for right now. You can also configure a database via config.js to load data from there.
                 Becuase this is a static data-set served from our server.js, every time you use `npm run start`, a new instance of that data would be loaded.</p>   
                </div>
           

            
                <h2 className="text-white"> THE EXPRESS SERVER: SETTING UP</h2>
            {/* <img src={Diagram5} />       */}
            <img src={Diagram6} />
            
                <div className="dependency-HTMLoutput border rounded " >
                <ol> 
                    <li> First we drill into 'data' for ease of access into our key-value pairs; The reason why we use LET is to allow reassignment once we begin modifying the data </li>
                    <li> Second, we designate our localhost:3000 (REACT Application) as an approved origin, to prevent any CORS errors </li>
                    <li>  Third, (VERY IMPORTANT), we use express.json() to help parse incoming request to JSON format.
                          Before Express 4.+, Express was using something called body-parser to conduct this conversion. Now, Express has it's own built in parser </li>
                </ol>    
                </div>
            {/* </section> */}

            {/* <section className="dependency-content"> */}
            <h2 className="text-white"> THE EXPRESS SERVER: WHY JSON?</h2>
                <div className="dependency-HTMLoutput border rounded " >
                <ol>
                    <li> Encode Numbers, Strings, Arrays, Objects ,`null`...</li>
                    <li> Represent empty arrays and objects easily</li>
                    <li> Have each key unique, (never repeated).</li>
                    <li> Have faster responses due to light-syntax</li>
                    <li> No longer worry about how to represent an array with automatic keys; a JSON encodes the same structure no matter where it is sent</li>
                    <li> Parse JSON in a multitude of coding languages. Programming languages either have JSON support built in natively. If not, they rely on a library to help PARSE</li>
                </ol>
                </div>
            {/* </section> */}
                
            {/* <section className="dependency-content"> */}
            <h2 className="text-white"> THE EXPRESS SERVER: DEFINE HTTP METHODS</h2>
            <img src={Diagram7} />
            <div className="dependency-HTMLoutput border rounded " >
                 <p> 
                    We begin to define HTTP methods and how we process incoming requests.
                    Lines 25 - 28 for example, define the GET request. 
                    This get request also corresponds to the fetch url in client/src/API. 
                    This get request returns the entire drilledData object.  
                    Typing in localhost:4000/api/todos would give you the json output of our data.
                </p>
            </div>
           
            <div className="dependency-HTMLoutput border rounded " >
                 <p> 
                    The post method for example, defines the endpoint URL, defines a request (req) and a response (res) as arguments. 
                    A request is defined by the end-client logic. req.body corresponds to a key-value pair inside the request object.
                </p>
            </div>    
            <img src={Diagram8} />
            <img src={Diagram9} />
            </section>  
        </section>
    )}


export default Explanation