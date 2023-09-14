import React from 'react'
import Navbar from '../nav/nav'
import './header.css'

const Header = (props) => {
    const {currentTab,setCurrentTab} = props
  return (
    <header>
        <div className = 'header'> 
            <h1>ALEENA BRINKERHOFF</h1>
            <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab}>
            </Navbar>
        </div>
    </header>
  )
}

export default Header;