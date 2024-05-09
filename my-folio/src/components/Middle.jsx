import React from 'react'
import Home from '../sub-component/Home'
import About from '../sub-component/About'
// import './Middle.css';

function Middle() {
  return (
    <div className="middle-container">
      <div className="middle-content">
        <Home />
        <About />
      </div>
    </div>
  )
}

export default Middle
