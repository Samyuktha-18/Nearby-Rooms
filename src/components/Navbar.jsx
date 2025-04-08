import React, { useEffect, useState } from 'react';
import menu_icon from '../assets/menu_icon.svg';
import cross_icon from '../assets/cross_icon.svg';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  const navLinks = [
    { href: '#Header', label: 'Home' },
    { href: '#About', label: 'About' },
    { href: '#Projects', label: 'Projects' },
    { href: '#Testimonials', label: 'Testimonials' },
    { href: '#Contact', label: 'Contact' }
  ];

  return (
    <div className='absolute top-0 left-0 w-full z-50'>
      {/* Main Navbar */}
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        {/* Logo */}
        <a href="#" className='text-white font-bold text-3xl font-Outfit'>Nearby Rooms</a>

        {/* Desktop Links */}
        <ul className='hidden md:flex flex-grow justify-center space-x-8 text-white'>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className='cursor-pointer hover:text-gray-400'>
              {link.label}
            </a>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className='hidden md:flex space-x-4 ml-auto'>
          <a
            href="https://play.google.com/store/apps/details?id=com.darth.nearbyroom"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-white text-black px-6 py-2 rounded-full'
          >
            Get App
          </a>
          <button className='bg-white px-8 py-2 rounded-full'>
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <img
            onClick={() => setShowMobileMenu(true)}
            src={menu_icon}
            className='w-7 cursor-pointer'
            alt="menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Icon */}
        <div className='flex justify-end p-6'>
          <img
            onClick={() => setShowMobileMenu(false)}
            src={cross_icon}
            className='w-6 cursor-pointer'
            alt="close"
          />
        </div>

        {/* Mobile Links */}
        <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              onClick={() => setShowMobileMenu(false)}
              href={link.href}
              className='px-4 py-2 rounded-full inline-block text-black hover:bg-gray-100'
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://play.google.com/store/apps/details?id=com.darth.nearbyroom"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-black text-white px-6 py-2 rounded-full mt-4'
          >
            Get App
          </a>
          <button className='bg-black text-white px-8 py-2 rounded-full'>
            Sign Up
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
