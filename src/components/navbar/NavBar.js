import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"


function NavBar() {

  const [menu, setMenu] = React.useState(false);

  const handelclic = ()=>{
    setMenu(!menu)
  }
    

  return (
    <div className='flex items-center justify-between mx-auto max-w-[1280px] px-4 h-[70px]'>
      <h1 className='w-full text-2xl font-bold text-[#642db7]'>Panos-Katos</h1> 
       <ul className='hidden md:flex text-lg items-center '> 
          <li className='mr-[70px] hover:cursor-pointer hover:underline '>About</li>
          <li className='mr-[70px] hover:cursor-pointer hover:underline '>Projects</li>
          <li className='mr-[70px] hover:cursor-pointer hover:underline '>Contact</li>
          <li><button  className='bg-[#642db7] text-white px-3 py-[2px] rounded-md hover:bg-[#40187e]'>Resume</button></li>
        </ul>
        <div onClick={handelclic} className="block hover:cursor-pointer md:hidden">
          {!menu ? <AiOutlineMenu size={25} />: <AiOutlineClose size={25}/>}
        </div>
        <div className={menu ? 'fixed left-[0] top-[0] md:hidden w-[50%] bg-white pt-3':"hidden"}>
      <ul>
          <li className='hover:cursor-pointer text-[20px] mb-6  pl-3'>About</li>
          <li className='hover:cursor-pointer text-[20px] mb-6  pl-3'>Projects</li>
          <li className='hover:cursor-pointer text-[20px] mb-6  pl-3'>Contact</li>
          <li className='pl-3'><button className='bg-[#642db7] text-white px-3 py-[2px] rounded-md hover:bg-[#40187e]'>Resume</button></li>
      </ul>
      </div>
    </div>
  )
}

export default NavBar