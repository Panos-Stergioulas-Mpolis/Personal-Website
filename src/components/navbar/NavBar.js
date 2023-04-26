import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"


function NavBar() {

  const [menu, setMenu] = React.useState(false);

  const handelclic = ()=>{
    setMenu(!menu)
  }
    
   React.useEffect(()=>{

    const handleresize =() =>{
      if(window.innerWidth >= 768){
        setMenu(false)
      }
      
    }
      window.addEventListener("resize", handleresize)
   }, [])

  return (
    <div className='flex items-center justify-between   w-full px-4 h-[70px] bg-white fixed top-[0] shadow-md'>
      <h1 className='w-full text-2xl font-bold text-[#642db7]'>Panos-Katos</h1> 
       <ul className='hidden md:flex text-lg items-center '> 
       <li className='mr-[70px] hover:cursor-pointer hover:underline '>Home</li>
          <li className='mr-[70px] hover:cursor-pointer hover:underline '>About</li>
          <li className='mr-[70px] hover:cursor-pointer hover:underline '>Portfolio</li>
          <li className='mr-[70px] hover:cursor-pointer hover:underline '>Contact</li>
          <li><button  className='bg-[#642db7] text-white px-3 py-[2px] rounded-md hover:bg-[#]'>Resume</button></li>
        </ul>
        <div onClick={handelclic} className="block hover:cursor-pointer md:hidden text-[#d500dc]">
          {!menu ? <AiOutlineMenu size={25} />: <AiOutlineClose size={25}/>}
        </div>
        <div className={menu? 'fixed left-[0] top-[0] md:hidden w-[50%] bg-white pt-3 shadow-lg  border-r-[1px] border-b-[1px] border-[#5f5555]':"hidden"}>
      <ul>
          <li className='hover:cursor-pointer text-[20px] mb-6  pl-3'>Home</li>
          <li className='hover:cursor-pointer text-[20px] mb-6  pl-3'>About</li>
          <li className='hover:cursor-pointer text-[20px] mb-6  pl-3'>Portfolio</li>
          <li className='hover:cursor-pointer text-[20px] mb-6  pl-3'>Contact</li>
          <li className='pl-3'><button className='bg-[#642db7] text-white px-3 py-[2px] rounded-md hover:bg-[#40187e] mb-4'>Resume</button></li>
      </ul>
      </div>
    </div>
  )
}

export default NavBar