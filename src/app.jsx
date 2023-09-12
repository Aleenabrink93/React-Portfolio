import React,{useState} from 'react'
// import Nav from './components/nav/nav'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Resume from './components/resume/resume'

const App = () => {
    const [currentTab, setCurrentTab] = useState("about");
// check which tab is selected and render accordingly
    const renderTab =() => {
        switch (currentTab) {
            case 'about':
                return <About/>;
            case 'portfolio':
                return <Portfolio/>;
            case 'Contact':
                return <Contact/>;
            case 'Resume':
                return <Resume/>;
            default:
                return null;
    }
};
  return (
    <div>
       <div>
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
       </div>
       <div>
            <main>{renderTab()}</main>
       </div>
       <div>
            <Footer/>
       </div>
    </div>
  )
};

export default App