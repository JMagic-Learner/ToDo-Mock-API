import React from 'react'

function Navigation () {

    return(
        <nav className="navbar navbar-b navbar-trans navbar-expand-md" id="mainNav">
            
        <div className="container">
        <h1><a className="navbar-brand " href="/">ToDo API Demo</a> </h1>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse justify-content-end  " id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item hover-action ">
                <a className="nav-link  active" href="/">Home</a>
              </li>
              <li className="nav-item hover-action " >
                <a className="nav-link " href="/about">Dependencies</a>
              </li>
              <li className="nav-item hover-action " >
                <a className="nav-link " href="/shop">Explanation</a>
              </li>
              <li className="nav-item hover-action ">
                <a className="nav-link" href="#contact">Demostration</a>
              </li>
              <li className="nav-item hover-action ">
                <a className="nav-link" href="#FaceBook">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navigation