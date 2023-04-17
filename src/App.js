import React from 'react'
import "./styles.css"
import Navbar from "./components/navbar/NavBar"
import Project from "./components/projects/Project"
import Footer from "./components/footer/Footer"
import Home from './components/home/Home'
import About from './components/about/About'
import Data from './components/data/Data'
import Contact from './components/contact/Contact'

function App() {

  const proj = Data.map(i =>{
    if(i.id % 2 === 0){
      return(
        <Project st={true} {...i}/>
      )
    }
    else{
      return(
        <Project st={false} {...i}/>
      )
    } 
  })

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
      <div className='mt-[70px] text-[30px] px-4 font-semibold mb-[50px]'>
        &lt;Portfolio&gt;
      </div>
      <div className='flex flex-col gap-[80px] px-[50px] md:px-[100px]'>
        {proj}
      </div>
      <div className='mt-[150px] text-[30px] px-4 font-semibold'>
        &lt;/Portfolio&gt;
      </div>
      <Contact/>
    </div>
  )
}

export default App