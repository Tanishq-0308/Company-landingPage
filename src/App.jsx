import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Tech from './components/Tech'
import Project from './components/Project'
import Contact from './components/Contact'
import Application from './components/Application'
import Team from './components/Team'
import Faq from './components/Faq'
import Discuss from './components/Discuss'

function App() {

  return (
    <>
    <div className='overflow-hidden'>
    <Home>
    <Nav/>
    </Home>
    <Tech/>
    <Project/>
    <Discuss/>
    <Application/>
    <Team/>
    <Faq>
      <Contact/>
    </Faq>

    </div>
    
      
    </>
  )
}

export default App
