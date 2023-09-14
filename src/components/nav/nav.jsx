import React from 'react'
import './nav.css'

const Navbar = (props) => {
    const {currentTab,setCurrentTab} = props
  return (
    <nav>
			<ul>
				<li>
					<span onClick={() => setCurrentTab("about")}>About Me</span>
                </li>
				<li className={currentTab === "portfolio" ? "navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
				</li>
				<li className={currentTab === "contact" ? "navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</li>
				<li className={currentTab === "resume" ? "navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("resume")}>Resume</span>
				</li>
			</ul>
		</nav>
    
  )
}


export default Navbar