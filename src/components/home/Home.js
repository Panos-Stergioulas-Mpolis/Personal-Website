import React from 'react'
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

function About() {
  return (
    <div className='mt-[210px] flex flex-col mx-auto items-center  w-[80%] md:w-[50%] gap-4 '> 
        <h1 className='text-[20px] md:text-3xl text-[#642db7] text-center font-bold'>Panagiotis Stergioulas-Bolis</h1>
        <h2 className='text-[15px] md:text-xl font-bold text-[#525252]'>Software Developer</h2>
        <p className='text-center mb-3'>
            ry to popular belief, Lorem Ipsum is not simply random 
            text. Itt Hampden-Sydney 
            College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
             Ipsum passage, and going through the cites of the word in classical literature, discovered the 
        </p>
        <ul className='flex justify-center gap-x-[70px]'>
            <li className='cursor-pointer hover:text-[#238ba2] text-3xl'><a alt="My Github Profile" href='https://github.com/Panos-Stergioulas-Mpolis' target="_blank"><AiFillGithub size={50}/></a></li>
            <li className='cursor-pointer hover:text-[#2341a2] text-3xl'><a alt="My Linkedin Profile" href='https://www.linkedin.com/in/panagiotis-stergioulas-bolis-40a834223/' target='_blank'><AiFillLinkedin size={50}/></a></li>
        </ul>
    </div>
  )
}

export default About