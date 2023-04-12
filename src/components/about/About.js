import React from 'react'


function About() {
  return (
    <div className='mt-[150px] w-full px-[80px] flex justify-center flex-wrap gap-[60px]'>

            <div className='w-[300px] shadow-[0_10px_10px_rgba(0,0,0,0.3)] h-[400px] text-center flex flex-col gap-6 '>

                <h1 className='font-semibold text-[25px] text-center text-white bg-[#642db7]'>Education</h1>
                <div className='flex flex-col gap-6'>
                    <p className='w-[70%] m-auto'>
                        I study at the University of Macedonia in the 
                        department of applied informatics and information systems
                    </p>
                    <a href='https://www.uom.gr/' target='_blank'>
                        <img alt="uom" src='https://www.uom.gr/site/images/logo-new.png' className='w-[200px]'></img>
                    </a>
                </div>

            </div>

            <div className='w-[300px] shadow-[0_10px_10px_rgba(0,0,0,0.3)] h-[400px] flex flex-col gap-6 '>

                <h1 className='font-semibold text-[25px] text-center text-white bg-[#642db7]'>Soft Skills</h1>
                <div>
                    <ul className='w-[70%] m-auto gap-3 flex flex-col text-[20px] list-disc'>
                        <li>Problem-solving</li>
                        <li>Leadership</li>
                        <li>Communication</li>
                        <li>Collaboration</li>
                        <li>Adaptability</li>
                        <li>Time management</li>
                    </ul>
                </div>

            </div>

            <div className='w-[300px] shadow-[0_10px_10px_rgba(0,0,0,0.3)] h-[400px] flex flex-col gap-6 '>

                <h1 className='font-semibold text-[25px] text-center text-white bg-[#642db7]'>Languages</h1>
                <div>
                    <ul className='w-[70%] m-auto gap-[25px] items-center flex flex-col text-[30px]'>
                        <li>English</li>
                        <li>Greek</li>
                    </ul>
                </div>

            </div>

            <div className='w-[90%] shadow-[0_10px_10px_rgba(0,0,0,0.3)] h-[400px] flex flex-col gap-6 '>

                <h1 className='font-semibold text-[25px] text-center text-white bg-[#642db7]'>Programming languages</h1>
                <div>
                    <ul className='w-full m-auto items-center flex flex-col '>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>Python</li>
                        <li>Java</li>
                    </ul>
                </div>

            </div>

    </div>
  )
}

export default About