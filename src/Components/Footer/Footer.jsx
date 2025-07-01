import React from 'react'
import { motion, easeOut } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-800 text-gray-300 p-6'>
        <div className="grid items-center grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 lg-px-[12%] px-[8%] ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3}}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className="text-4xl font-bold font-bricolage">
              Impr<span className=' text-yellow-300'>ove</span>
            </div>
            <p className='text-sm mt-4 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat nostrum voluptatibus</p>
            <div className="flex space-x-5">
              <i className='hover:text-yellow-300 cursor-pointer text-xl'>Face</i>
              <i className='hover:text-yellow-300 cursor-pointer text-xl'>Link</i>
              <i className='hover:text-yellow-300 cursor-pointer text-xl'>Twit</i>
              <i className='hover:text-yellow-300 cursor-pointer text-xl'>Insta</i>
             
            </div>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3}}
            viewport={{ once: true, amount: 0.2 }}
            >
            <h3 className='text-white font-semibold mb-4 text-2xl'>About</h3>
            <ul className='space-y-3'>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>About Us</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Testimonal</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Security</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Pricing</a></li>
              </ul>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3}}
            viewport={{ once: true, amount: 0.2 }}
            >
            <h3 className='text-white font-semibold mb-4 text-2xl'>Partner</h3>
            <ul className='space-y-3'>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Integration</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Affilite Program</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Refer to Friend</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Commission</a></li>
              </ul>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4}}
            viewport={{ once: true, amount: 0.2 }}
            >
            <h3 className='text-white font-semibold mb-4 text-2xl'>Help</h3>
            <ul className='space-y-3'>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Account</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Support Center</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Privacy Police</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Terms&Conditions</a></li>
              </ul>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5}}
            viewport={{ once: true, amount: 0.2 }}
            >
            <h3 className='text-white font-semibold mb-4 text-2xl'>Contact us</h3>
            <ul className='space-y-3'>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>+91 8851015113</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>guptaakash1511@gmail.com</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>93A DDA Jnat flat Rampura New Delhi</a></li>
              <li><a href="#" className='hover:text-yellow-300 cursor-pointer'>Terms&Conditions</a></li>
              </ul>
            </motion.div>
        </div>
             <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6}}
            viewport={{ once: true, amount: 0.2 }}
            className='border-t border-gray-700 py-5 text-center text-sm text-gray-400'
            >
            &copy;2025 CopyRight Reserved by <a href="#" className='text-yellow-300 font-bold'> Ak Gupta</a>
            </motion.div>
      </footer>
    </>
  )
}

export default Footer
