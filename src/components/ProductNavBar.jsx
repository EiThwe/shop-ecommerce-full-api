import React from 'react'
import {IoIosArrowDown} from "react-icons/io"

const ProductNavBar = () => {
  return (
   <nav className=' bg-white p-10 shadow-sm uppercase font-bold'>
    <div className="flex justify-between items-center">
        <div className="flex gap-5 text-xs text-gray-400">
            <a href="#" className='hover:text-gray-800'>All</a>
            <a href="#" className='hover:text-gray-800'>Home decor</a>
            <a href="#" className='hover:text-gray-800'>Lighting</a>
            <a href="#" className='hover:text-gray-800'>Decoration</a>
            <a href="#" className='hover:text-gray-800'>Vases</a>
            <a href="#" className='hover:text-gray-800'>Basics</a>
         </div>
         <div className='flex gap-10 text-xs text-gray-800'>
            <span className='hover:cursor-pointer flex items-center gap-2'>filter<IoIosArrowDown/></span>
         </div>
    </div>
   </nav>
  )
}

export default ProductNavBar