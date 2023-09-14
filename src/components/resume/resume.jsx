import React from 'react'
import './resume.css'
import resume from '../../assets/resume.png'
import Button from 'react-bootstrap/Button';

const Resume = () => {
  return (
    <section className='center'>
    <div className='cv'>
        <img src={resume} alt="resume" />
        <Button variant="outline-warning" className='download'>
      <a href = {require('../../assets/CV_AleenaBrinkerhoff.pdf')} download>
        <h3>Download</h3>
      </a>
    </Button>
    </div>
    </section>
  )
}

export default Resume