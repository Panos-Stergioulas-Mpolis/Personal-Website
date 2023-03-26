import React from 'react'
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

function About() {
  return (
    <div className='mt-[210px] flex-col mx-auto text-center w-[50%] space-y-4 '> 
        <h1 className='text-[20px] md:text-3xl text-[#642db7] font-bold'>Panagiotis Stergioulas-Bolis</h1>
        <h2 className='text-[15px] md:text-xl font-bold text-[#525252]'>Junior Front-End Developer</h2>
        <p className=''>
            ry to popular belief, Lorem Ipsum is not simply random 
            text. Itt Hampden-Sydney 
            College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
             Ipsum passage, and going through the cites of the word in classical literature, discovered the 
        </p>
        <ul className='flex justify-center gap-x-[70px]'>
            <li className='hover: cursor-pointer hover:text-[blue] text-3xl'><AiFillGithub/></li>
            <li className='hover: cursor-pointer hover:text-[blue] text-3xl'><AiFillLinkedin/></li>
        </ul>
    </div>
  )
}

export default About