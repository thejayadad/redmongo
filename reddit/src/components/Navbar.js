
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
        <h3>Blog Spot</h3>
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
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/'}>Home</Link>
            </li>
        </ul>
   <button
        className=' border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'
        >Sign In</button>
        <button
        className="gap-y-5"
        >Sign In</button>
    </nav>
   </header>
  )
}

export default Navbar