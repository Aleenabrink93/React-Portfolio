import React from 'react'
import './footer.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>
        <a href = 'https://github.com/Aleenabrink93'
        target = '_blank'
        rel ='noopener noreferrer'>
            <img src = {github} alt = 'github' className = 'icon'></img>
        </a>
        <a href = 'https://www.linkedin.com/in/aleena-brinkerhoff-49248a151/'
        target = '_blank'
        rel ='noopener noreferrer'>
            <img src = {linkedin} alt = 'linkedin' className = 'icon'></img>
        </a>
    </div>
  )
}

export default Footer