import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Nav = () => {
  const [isOpen,setIsOpen] =useState(false);
  return (
    <>
    <motion.nav 
    initial={{opacity:0, y:-50}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.6, ease:"easeInOut"}}
    className="px-4 py-4 sm:px-[100px] lg-px-[200px] shadow bg-white relative"
    >
     <div className="flex justify-between items-center">
      <div className="text-4xl font-bold font-bricolage">
        Impr<span className='text-blue-600'>ove</span>
      </div>
 
     {/* Desktop menu */}
     <div className="hidden lg:flex items-center gap-6 text-gray-600 font-medium">
      <ul className="flex gap-6">
        <li className="text-blue-600 text[18px] font-semibold cursor-pointer">Home</li>
        <li className="cursor-pointer text[18px] hover:text-blue-500">About</li>
        <li className="cursor-pointer text[18px] hover:text-blue-500">Services</li>
        <li className="cursor-pointer text[18px] hover:text-blue-500">Blogs</li>
        <li className="cursor-pointer text[18px] hover:text-blue-500">Contact</li>
      </ul>
     </div>
     <div className="flex gap-3">
      <button className='border border-blur-600 text-blue-600 px-4 py-1.5 rounded-md hover:bg-blur-600 hover-text-white transition'>Login</button>
      <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">Sign up</button>
     </div>
     <div className="lg:hidden cursor-pointer text-blue-600 text-3xl"onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? 'X' : '='}
     </div>
      </div> 

      {/* Mobile menu */}
      <div className={`lg:hidden flex flex-col gap-4 mt-4 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
      <ul className="flex flex-col gap-2 text-gray-600 font-medium">
        <li className="text-blue-600 text-[18px] font-semibold cursor-pointer">Home</li>
        <li className="text-[18px] cursor-pointer hover:text-blue-500">About</li>
        <li className="text-[18px] cursor-pointer hover:text-blue-500">Services</li>
        <li className="text-[18px] cursor-pointer hover:text-blue-500">Blogs</li>
        <li className="text-[18px] cursor-pointer hover:text-blue-500">Contact</li>
      </ul>
      </div>
    </motion.nav>
    </>
  )
}

export default Nav
