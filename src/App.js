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

      <div className='back mt-[90px] md:mt-2'>
      
      <div classname="">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="back"></path>
        </svg>
      </div>

      <About />

      <div className='pt-6 md:mb-1 mb-[90px]'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>

      </div>

      <div>

      <div className='flex flex-col gap-[80px] px-[50px] lg:px-[100px]'>
        {proj}
      </div>

      </div>

      <div className='back2 mt-[90px] md:mt-5'>


      <div classname="">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="back2"></path>
        </svg>
      </div>

      <Contact/>

      <div className='pt-6 md:mb-4 mb-[40px]'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>

      </div>

      <Footer/>
      
    </div>
  )
}

export default App