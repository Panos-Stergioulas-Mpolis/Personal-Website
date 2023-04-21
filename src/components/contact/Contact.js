import React from 'react'

function Contact() {
  return (
    <div className='w-[80%] md:w-[50%] m-auto md:ml-[100px] pt-5 pb-[80px] space-y-[25px]'>
      <h2 className='text-white text-[20px] md:text-[30px] font-semibold'>Contact Me</h2>
      <form className='flex flex-col gap-6'>
        <input type='name' placeholder='Name' className='px-[15px] py-[10px] rounded-[9px] focus:outline-none md:text-[20px] text-[17px]'></input>
        <input type='email' placeholder='Email' className='px-[15px] py-[10px] rounded-[9px] focus:outline-none md:text-[20px] text-[17px]'></input>
        <textarea rows="6" cols="40" placeholder='Message' className='px-[15px] py-[10px] rounded-[9px] focus:outline-none md:text-[20px] text-[17px] max-h-[170px] min-h-[170px]'></textarea>
      </form>
      <button className='bg-[#0048ff] py-[7px] px-[20px] md:text-[20px] text-[17px] border-[2px] border-solid  text-white font-semibold rounded-[9px]'>Send</button>
    </div>
  )
}

export default Contact