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
      <div className='mt-[150px] text-[30px] px-4 font-semibold'>
        &lt;About&gt;
      </div>
      <About />
      <div className='mt-[50px] text-[30px] px-4 font-semibold'>
        &lt;/About&gt;
      </div>
      <Project />
    </div>
  )
}

export default App