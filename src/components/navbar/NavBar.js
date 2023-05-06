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
       <li className='mr-[70px] hover:cursor-pointer nav_links'><a href='#'>Home</a></li>
          <li className='mr-[70px] hover:cursor-pointer nav_links'><a href='#about'>About</a></li>
          <li className='mr-[70px] hover:cursor-pointer nav_links'><a href='#portfolio'>Portfolio</a></li>
          <li className='mr-[70px] hover:cursor-pointer nav_links'><a href='#contact'>Contact</a></li>
          <li><button  className='bg-[#642db7] text-white px-3 py-[2px] rounded-md duration-300 ease-in-out hover:bg-[#af2b90]'>Resume</button></li>
        </ul>
        <div onClick={handelclic} className="block hover:cursor-pointer md:hidden text-[#d500dc]">
          {!menu ? <AiOutlineMenu size={25} />: <AiOutlineClose size={25}/>}
        </div>
        <div className={menu? 'fixed left-[0] top-[0] md:hidden w-[60%] bg-[#f7f7f7] pt-3 shadow-2xl rounded-br-[9px]':"hidden w-0"}>
      <div className='flex flex-col'>
          <a onClick={handelclic} href='#' className='hover:cursor-pointer text-[20px] mb-6  pl-3 small-nav-links'>Home</a>
          <a onClick={handelclic} href='#about' className='hover:cursor-pointer text-[20px] mb-6  pl-3 small-nav-links'>About</a>
          <a onClick={handelclic} href='#portfolio' className='hover:cursor-pointer text-[20px] mb-6  pl-3 small-nav-links'>Portfolio</a>
          <a onClick={handelclic} href='#contact' className='hover:cursor-pointer text-[20px] mb-6  pl-3 small-nav-links'>Contact</a>
          <button className='bg-[#642db7] ml-3 w-fit text-white px-3 py-[2px] rounded-md duration-300 ease-in-out hover:bg-[#af2b90] mb-4'>Resume</button>
      </div>
      </div>
    </div>
  )
}

export default NavBar