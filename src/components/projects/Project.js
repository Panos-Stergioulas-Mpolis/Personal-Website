import React from 'react'
import {AiFillGithub} from 'react-icons/ai'


function Project(props) {

  
  return (
    <div className={props.st?'lg:flex  justify-between items-center ':"lg:flex flex-row-reverse justify-between items-center"}>
      <img alt={props.name} src={props.img} className='w-full md:w-[400px] h-[250px] rounded-[12px] shadow-[0_10px_10px_rgba(0,0,0,0.3)]'></img>
      <div className='flex flex-col'>
        <p className='w-[100%] md:w-[70%] text-[20px] font-semibold my-4'>{props.par}</p>
        <div className='md:flex gap-5 space-y-4 md:space-y-[0]'>
          <a href={props.url} target='_blank' className='justify-center w-[100%] md:w-[250px] flex gap-2 items-center font-semibold text-white bg-[#642db7] py-[10px] px-[20px] rounded-[12px]'>Got To The Website <img src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png' className='w-[20px]'></img> </a>
          <a href={props.Giturl} target='_blank' className='justify-center w-[100%] md:w-[250px] font-semibold text-white bg-black  py-[10px] px-[20px] rounded-[12px] flex gap-2 items-center'>Github Repo <AiFillGithub/></a>
        </div>
      </div>
    </div>
    
  )
}

export default Project