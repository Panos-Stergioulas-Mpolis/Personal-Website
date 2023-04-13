import React from 'react'


function About() {
  return (
    <div className='mt-[50px] w-full px-[80px] flex justify-center flex-wrap gap-[60px]'>

            <div className='w-[300px] shadow-[0_10px_10px_rgba(0,0,0,0.3)] h-[400px] text-center flex flex-col gap-6 '>

                <h1 className='font-semibold text-[25px] text-center text-white bg-[#642db7]'>Education</h1>
                <div className='flex flex-col gap-6'>
                    <p className='w-[90%] m-auto'>
                        I study at the University of Macedonia in the 
                        department of applied informatics and information systems
                    </p>
                    <a href='https://www.uom.gr/' target='_blank'>
                        <img alt="uom" src='https://www.uom.gr/site/images/logo-new.png' className='w-[80%]'></img>
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

            <div className='w-[300px] shadow-[0_10px_10px_rgba(0,0,0,0.3)] h-[400px] flex flex-col gap-6 '>

                <h1 className='font-semibold text-[25px] text-center text-white bg-[#642db7]'>Programming languages</h1>
                <div>
                    <ul className='w-full flex flex-col gap-5 px-2 md:px-5 text-[25px]'>
                        <li className='flex items-center justify-between'>
                            JavaScript 
                            <img className='w-[35px]' alt="js logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'></img>
                        </li>
                        <li className='flex items-center justify-between'>
                            Java 
                            <img className='w-[35px]' alt="java logo" src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png"></img>
                        </li>
                        <li className='flex items-center justify-between'>
                            C
                            <img className='w-[35px]' alt='C logo' src='https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png'></img>
                        </li>
                        <li className='flex items-center justify-between'>
                            Python
                            <img className='w-[35px]' alt="Python logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'></img>
                        </li>
                    </ul>
                </div>

            </div>
            

            <div className='w-[300px] shadow-[0_10px_10px_rgba(0,0,0,0.3)] h-[400px] flex flex-col gap-6 '>

                <h1 className='font-semibold text-[25px] text-center text-white bg-[#642db7]'>Front-End</h1>
                <div>
                    <ul className='w-full flex flex-col gap-5 px-2 md:px-5 text-[25px]'>
                        <li className='flex items-center justify-between'>
                            React 
                            <img className='w-[35px]' alt="React logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'></img>
                        </li>
                        <li className='flex items-center justify-between'>
                            Html
                            <img className='w-[35px]' alt="Html logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"></img>
                        </li>
                        <li className='flex items-center justify-between'>
                            CSS
                            <img className='w-[30px]' alt='Css logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'></img>
                        </li>
                        <li className='flex items-center justify-between'>
                            Tailwindcss
                            <img className='w-[35px]' alt="Tailwind logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png'></img>
                        </li>
                    </ul>
                </div>

            </div>


    </div>
  )
}

export default About