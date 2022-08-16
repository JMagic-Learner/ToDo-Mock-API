import React from 'react'

function Dependency() {

    let dependenciesRoot = [
        {
            name: "concurrently",
            version: "7.3.0",
            description: "A NPM Package that allows the user to run multiple CLI / Scripts at the same time"
        },

    ]

    let dependenciesClient = [
        {
            name: "@testing-library/jest-dom",
            version: "5.16.5",
            description: "This particular package concerns spying on events."
        },
        {
            name: "@testing-library/react",
            version: "13.3.0",
            description: " This particular package concerns testing methods regarding REACT components."
        },
        {
            name: "@testing-library/user-event",
            version: "13.5.0",
            description: " This particular package concerns testing methods regarding REACT components."
        },
        {
            name: "http",
            version: "0.0.1-security",
            description: "A node package that contains http methods like SEARCH, PUT, PATCH and http.createServer etc"
        },
        {
            name: "react",
            version: "18.2.0",
            description: "A front-end framework that enables dynamic, flexible and lightweight implementation of single page applications"
        },
        {
            name: "react-dom",
            version: "18.2.0",
            description: "A front-end framework that enables dynamic, flexible and lightweight implementation of single page applications"
        },
        {
            name: "react-router-dom",
            version: "6.3.0",
            description: "A utility that allows a REACT applicaation to detect changes in endpoint url, and rerender according to specified routes"
        },
        {
            name: "react-scripts",
            version: "5.0.1",
            description: "NPM package that designates default scripts such as  `start`: `react-scripts start`."
        },
        {
            name: "web-vitals" ,
            version: "^2.1.4",
            description: "Utility to monitor the web application"
        },
       

    ]

    let dependenciesServer = [
        {
            name: "express",
            version: "4.18.1",
            description: "A Web Framework for Node.js. Provides server side logic for web and mobile applications "
        },
        {
            name: "dotenv",
            version: "16.0.1",
            description: "A node package that enables the automatic load of environment variables (aka .env files)"
        },
        {
            name: "http",
            version: "0.0.1-security",
            description: "A node package that contains http methods like SEARCH, PUT, PATCH and http.createServer etc"
        }
    ]

    return(
        <section>
          
                <h2> DEPENDENCIES </h2>
                <section className="dependency-content">
                   
                <h2 className="text-white"> Root </h2>
                    {dependenciesRoot.map((item)=>{
                        return(
                            
                            <div className="dependency-HTMLoutput border rounded">
                               
                                    <th className="column-name"> Name: {item.name}   </th>
                               
                                    <th className="column-description"> {item.description} </th>
                                
                            </div>
                            
                        )
                    })}
                     <h2 className="text-white"> Client </h2>
                    {dependenciesClient.map((item)=>{
                        return(
                         <tr className="dependency-HTMLoutput border rounded">
                           
                                    <th className="column-name"> Name: {item.name}   </th>
                                   
                                    <th className="column-description"> {item.description} </th>
                               
                        </tr>
                    )})}
                    <h2 className="text-white"> Server </h2>
                     {dependenciesServer.map((item)=>{
                        return(
                        <div className="dependency-HTMLoutput border rounded">
                           
                                    <th className="column-name"> Name: {item.name}   </th>
                                    
                                    <th className="column-description"> {item.description} </th>
                        </div>
                    )})}
             
            </section>
        </section>
    )
}

export default Dependency