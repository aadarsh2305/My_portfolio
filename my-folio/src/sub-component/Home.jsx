import React from 'react'
import './Home.css'
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="middle-container">
      <h2>Hello, my name is</h2>
      <h1>Aadarsh Gupta.</h1>
      <h1 className='diff_h1'>I love <span>
            <Typewriter
                options={{
                    strings: ['exploring tech!',
                    'coding solutions!',
                    'building software!',
                    'solving problems!',
                    'learning constantly!',
                    'innovating!',],
                    autoStart: true,
                    loop: true,
                }}
            />
            </span>  
       </h1>
      <p>I'm a Associate software engineer currently working in a Prolifics company in Hyderabad.</p>
      <p>I enjoy learning new skills and implementing them in real life!</p>
      <p className="p_button"><a className='get-in-touch-btn'>Get In Touch</a></p>
    </div>
  )
}

export default Home
