import React from 'react'

function Explanation() {
    return(
        <section className="explanation-container">
            <section className="dependency-block">
            <h2> EXPLAINING EXPRESS </h2>
            </section>
            <section className="dependency-block">
            <h3> BACK TO BASICS: HTTP REQUESTS </h3>
            <section>
            {/* <section className="dependency-content"> */}
                <p className="text-white"> Before we begin explaining Express, we need to go over the basic relationship between a client and server, and how a request is made</p>
                <p> The below diagram showcases the end-client and the server </p>
            </section>
            </section>
        </section>
    )
}

export default Explanation