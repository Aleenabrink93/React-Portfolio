import React from 'react'
import './resume.css'
import resume from '../../assets/resume.png'
import Button from 'react-bootstrap/Button';

const Resume = () => {
  return (
    <section>
    <div>
        <img src={resume} alt="resume" />
    </div>
    <Button variant="outline-warning">
      <a href = {require('../../assets/CV_AleenaBrinkerhoff.pdf')} download>
        <h3>Download</h3>
      </a>
    </Button>
    </section>
  )
}

export default Resume