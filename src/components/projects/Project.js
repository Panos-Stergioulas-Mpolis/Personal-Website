import React from 'react'
import {AiFillGithub} from 'react-icons/ai'


function Project(props) {

  
  return (
    <div className={props.st?'flex justify-between items-center pr-[120px]':"flex pl-[120px] flex-row-reverse justify-between items-center"}>
      <img alt={props.name} src={props.img} className='w-[400px] h-[250px] rounded-[12px] shadow-[0_10px_10px_rgba(0,0,0,0.3)]'></img>
      <div className='flex flex-col'>
        <p>qqq</p>
        <div className='flex gap-5'>
          <a href={props.url} target='_blank' className=' flex gap-2 items-center font-semibold text-white bg-[#642db7] py-[10px] px-[20px] rounded-[12px]'>Got To The Website <img src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png' className='w-[20px]'></img> </a>
          <a href={props.Giturl} target='_blank' className='font-semibold text-white bg-black  py-[10px] px-[20px] rounded-[12px] flex gap-2 items-center'>Github Repo <AiFillGithub/></a>
        </div>
      </div>
    </div>
  )
}

export default Project