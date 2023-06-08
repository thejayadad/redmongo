
'use client'


import React, { useState } from "react";
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        })
    }

  return (
   <header className='cursor-pointer container mx-auto px-5 flex justify-between py-4 items-center z-50'>
    <div>
        <Link href='/' className="text-primary text-3xl font-bold hover:bg-primary p-2 border-md hover:text-white transition-all duration-300">Blog Spot</Link>
    </div>
    <div  className="lg:hidden z-50">
        {navIsVisible ? ( <AiOutlineClose
         className="w-6 h-6"
         onClick={navVisibilityHandler}
        /> 
        
        ) : ( 
        <AiOutlineMenu
        className="w-6 h-6" onClick={navVisibilityHandler}
        />
    )}
    </div>
    <nav className={`${navIsVisible ? "right-0" : "right-full"
     } transition-all duration-300 mt-[56pxz lg:mt-0 [49] bg-primary lg:bg-transparent flex flex-col w-full lg:w-auto lg:flex-row justify-center lg:justify-end fixed top-0 bottom-0 -right-full lg:static flex gap-x-9 items-center`}>
        <ul className='z-50 gap-y-5 items-center flex gap-x-5 flex flex-col lg:flex-row font-semibold gap-x-2'>
            <li>
                <Link className="text-orange-300 text-2xl font-bold hover:bg-orange-700 p-2 border-md hover:text-white transition-all duration-300" href='/'>Home</Link>
            </li>
            <li>
                <Link className="text-orange-300 text-2xl font-bold hover:bg-orange-700 p-2 border-md hover:text-white transition-all duration-300" href={'/'}>Contact</Link>
            </li>
            <li>
                <Link className="text-orange-300 text-2xl font-bold hover:bg-orange-700 p-2 border-md hover:text-white transition-all duration-300" href={'/'}>About</Link>
            </li>
        </ul>
   <Link
    href='/login'
        className='px-6 py-2.5 rounded-md bg-primary mt-3 text-white hover:bg-blue-500 hover:text-white transition-all duration-300'
        >Login In</Link>
        <Link href='/register'
        className=' px-6 py-2.5 rounded-md bg-blue-500 mt-3 text-white hover:bg-primary hover:text-white transition-all duration-300'
        >Register</Link>
    </nav>
   </header>
  )
}

export default Navbar