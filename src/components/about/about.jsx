import React from 'react'
import './about.css'
import avatar from '../../assets/avatar.png'

const About = () => {
  return (
    <section>
    <h1 className='center'>About Me</h1>
    <div>
        <img className ='center' src={avatar} alt="my avatar"/>
    </div>
    <div className='content'>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
        </p>

    </div>
    </section>
  )
}

export default About