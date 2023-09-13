import React from 'react'
import Nav from '../nav/nav'
import './header.css'

const Header = (props) => {
    const {currentTab,setCurrentTab} = props
  return (
    <header>
        <div>
            <h1>Aleena Brinkerhoff</h1>
        </div>
        <div>
            <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}>
            </Nav>
        </div>
    </header>
  )
}

export default Header;