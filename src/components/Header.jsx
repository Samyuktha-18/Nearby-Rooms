import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Building } from 'lucide-react';
import Navbar from './Navbar';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } }
};

const Header = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <Navbar />

      <motion.div
        className="container mx-auto text-white text-center py-8 px-10 md:px-20 relative z-10 flex flex-col items-center justify-center min-h-[80vh]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Heading */}
        <motion.h2
  className="mt-20 text-4xl sm:text-5xl md:text-[60px] font-bold max-w-4xl leading-tight drop-shadow-md"
  variants={itemVariants}
>
  Find Your Perfect <span className="text-orange-500">Living Space</span>
</motion.h2>


        {/* Subheading */}
        <motion.h3
          className="text-3xl sm:text-xl md:text-2xl mt-4 max-w-2xl text-gray-200"
          variants={itemVariants}
        >
          Discover verified rooms, apartments, and shared spaces across Pune.
        </motion.h3>

        {/* Search Box */}
        <motion.div
          className="mt-10 bg-white p-4 md:p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-4 md:gap-6 items-center w-full max-w-5xl text-left"
          variants={itemVariants}
        >
          {/* Location Input */}
          <div className="flex items-center gap-2 w-full md:w-1/3">
            <MapPin className="text-orange-500" />
            <div className="w-full">
              <label className="block text-sm text-gray-700 font-semibold">LOCATION</label>
              <input
                type="text"
                placeholder="Enter address, city, or state"
                className="w-full p-2 border-b border-gray-300 outline-none focus:border-orange-500 text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Type Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-1/3">
            <Home className="text-orange-500" />
            <div className="w-full">
              <label className="block text-sm text-gray-700 font-semibold">TYPE</label>
              <select className="w-full p-2 border-b border-gray-300 outline-none focus:border-orange-500 bg-white text-gray-800">
                <option hidden>Select Property Type</option>
                <option>Rentals</option>
                <option>PG</option>
                <option>Single Room</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
              </select>
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-1/3">
            <Building className="text-orange-500" />
            <div className="w-full">
              <label className="block text-sm text-gray-700 font-semibold">CATEGORY</label>
              <select className="w-full p-2 border-b border-gray-300 outline-none focus:border-orange-500 bg-white text-gray-800">
                <option hidden>Select Category</option>
                <option>Apartment</option>
                <option>Flats</option>
                <option>PG</option>
                <option>Shared Rooms</option>
                <option>Offices</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button className="bg-orange-600 hover:bg-orange-700 transition text-white px-8 py-3 rounded-lg font-semibold shadow-lg">
            SUBMIT
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
