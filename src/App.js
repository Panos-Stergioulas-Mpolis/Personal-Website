import React from 'react'
import "./styles.css"
import Navbar from "./components/navbar/NavBar"
import Project from "./components/projects/Project"
import Footer from "./components/footer/Footer"
import Home from './components/home/Home'
import About from './components//about/About'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App