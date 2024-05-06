import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/about'
import Project from './components/Project/Project'
import Team from './components/Team/Team'
import Faq from './components/Faq/faq'
import Application from './components/Application/Application'
import Supporter from './components/Supporter/Supporter'
import Contact from './components/Contact/Contact'



const App = () => {
  return (
    <div>

      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Application/>
      <Team/>
      <Supporter/>
      <Faq/>
      <Contact/>


    </div>
  )
}

export default App
