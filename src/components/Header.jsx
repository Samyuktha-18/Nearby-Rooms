import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div 
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }} 
      id="Header"
    >
      <Navbar />

      <div className="container mx-auto text-white text-center py-4 px-6 md:px-20 lg:px-22 mt-25 mb-40">

        {/* Heading */}
        <motion.h2 
          className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Find Your Perfect Living Space
        </motion.h2>

        {/* Subheading */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h3 className="text-sm sm:text-lg md:text-2xl inline-block max-w-3xl">
            Discover verified rooms, apartments, and shared spaces across Pune
          </h3>
        </motion.div>

        {/* Search Form */}
        <motion.div 
          className="mt-8 bg-white p-2 md:p-6 rounded shadow flex flex-col md:flex-row gap-3 items-center mr-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >

          {/* Location Input */}
          <div className="flex-1">
            <label className="block text-gray-700 font-medium">LOCATION</label>
            <input 
              type="text" 
              placeholder="Enter an address, state, city" 
              className="w-full p-2 border-b border-gray-400 outline-none focus:border-black text-gray-800 placeholder-gray-500"
            />
          </div>

          {/* Type Dropdown */}
          <div className="flex-1">
            <label className="block text-gray-700 font-medium">TYPE</label>
            <select className="w-full p-2 border-b border-gray-400 outline-none focus:border-black bg-white text-gray-800">
              <option value="" disabled selected hidden>Select Property Type</option>
              <option>Rentals</option>
              <option>PG</option>
              <option>Single Room</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
            </select>
          </div>

          {/* Category Dropdown */}
          <div className="flex-1">
            <label className="block text-gray-700 font-medium">CATEGORY</label>
            <select className="w-full p-2 border-b border-gray-400 outline-none focus:border-black bg-white text-gray-800">
              <option value="" disabled selected hidden>Select Category</option>
              <option>Apartment</option>
              <option>Flats</option>
              <option>PG</option>
              <option>Shared Rooms</option>
              <option>Offices</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition">
            SUBMIT
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Header;
