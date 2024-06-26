import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg w-full">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">PORTFOLIO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

