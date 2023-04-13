import React from 'react'
import {IoIosArrowDown} from "react-icons/io"

const ProductNavBar = () => {
  return (
   <nav className=' bg-white md:px-10 py-10 sm:px-5 px-1 shadow-sm uppercase font-bold w-full'>
    <div className="flex sm:flex-row flex-col sm:gap-0 gap-3 justify-between items-center w-full">
        <div className="sm:flex grid grid-cols-4 sm:gap-5 gap-2 sm:text-xs text-[10px]  text-gray-400 w-full ">
            <div className='flex justify-center items-center'><a href="#" className='hover:text-gray-800'>All</a></div>
            <div className='flex justify-center items-center'><a href="#" className='hover:text-gray-800'>Home decor</a></div>
            <div className='flex justify-center items-center'><a href="#" className='hover:text-gray-800'>Lighting</a></div>
            <div className='flex justify-center items-center'><a href="#" className='hover:text-gray-800'>Decoration</a></div>
            <div className='flex justify-center items-center col-span-2'><a href="#" className='hover:text-gray-800 '>Vases</a></div>
            <div className='flex justify-center items-center col-span-2'><a href="#" className='hover:text-gray-800 '>Basics</a></div>
         </div>
         <div className='flex gap-10 sm:text-xs text-[10px] text-gray-800'>
            <span className='hover:cursor-pointer flex items-center gap-2'>filter<IoIosArrowDown/></span>
         </div>
    </div>
   </nav>
  )
}

export default ProductNavBar