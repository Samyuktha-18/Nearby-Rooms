import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <a href="#" className='text-white font-bold text-3xl font-Outfit'>Nearby Rooms</a>

        <ul className='hidden md:flex flex-grow justify-center space-x-8 text-white'>
            <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
            <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            <a href="#Contact" className='cursor-pointer hover:text-gray-400'>Contact</a>
        </ul>

        <div className='hidden md:flex space-x-4 ml-auto'>
          <button className='bg-white text-black px-6 py-2 rounded-full'>Download</button>
          <button className='bg-white text-black px-6 py-2 rounded-full'>Signup</button>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
