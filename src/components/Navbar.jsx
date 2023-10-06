import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  return (
    
        <div className='nav flex justify-between items-center max-w-[1240px] px-4 mx-auto h-24'>
            <h1 className='text-3xl text-green-600 font-bold '>Finance.</h1>
            <ul className='flex space-x-5'>
                <li className='text-white '>Home</li>
                <li className='text-white '>Company</li>
                <li className='text-white '>Services</li>
                <li className='text-white '>About</li>
                <li className='text-white '>Contact</li>
            </ul>
            <div className=''>
                <AiOutlineMenu color='white'/>
            </div>
        </div>
    
  )
}

export default Navbar