import React from "react";
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const ContactFooter = () => {
  return (
    <div className="relative">
      {/* Contact Section */}
      <div className="relative bg-[#fdf2ec] text-black p-16 rounded-lg max-w-6xl mx-auto -mb-16 z-10 shadow-lg">
        <h2 className="text-4xl font-bold">
          Find your <span className="text-orange-500">dream home</span> today!
        </h2>
        <p className="mt-4 text-xl">
          Discover the perfect property tailored to your needs and preferences with our expert guidance.
        </p>
        <button className="cursor-pointer mt-6 border border-black px-8 py-3 text-lg rounded-lg flex items-center gap-2 hover:bg-black hover:text-white transition">
          Contact US <span className="text-2xl">↗</span>
        </button>
      </div>

      {/* Footer Section */}
      <div className="bg-black text-white pt-24 pb-12 px-12 mt-0 text-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold">Nearby Rooms</h3>
            <p className="mt-6 text-lg">
              We are your personal real estate navigator, and
              Your trusted partner in finding quality rental accommodations.
            </p>
            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Email"
                className="p-3 w-64 bg-gray-800 border border-gray-700 text-white rounded-l-md focus:outline-none text-lg"
              />
              <button className="p-3 bg-orange-500 text-white rounded-r-md text-lg cursor-pointer">Subscribe</button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-2xl font-semibold text-orange-500">Links</h4>
            <ul className="mt-6 space-y-4 text-lg cursor-pointer">
              <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a></li>
              <li><a href="#About" className='cursor-pointer hover:text-gray-400'>About</a></li>
              <li><a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a></li>
              <li><a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
              <li><a href="#Contact" className='cursor-pointer hover:text-gray-400'>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-semibold">Contact</h4>
            <div className="mt-6 flex items-center gap-3 text-lg">
              <Phone /> <p>+91 9960276026</p>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <Mail /> <p>info@nearbyrooms.com</p>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <MapPin /> <p>Pune, Maharashtra</p>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 flex space-x-5">
              <a href="https://x.com/nearbyrooms" target="_blank" rel="noopener noreferrer">
                <Twitter className="p-3 bg-gray-700 rounded-full text-white" size={45} />
              </a>
              <a href="https://www.facebook.com/people/Nearby-Rooms/61550898845863/?rdid=JSTj6D9ypXGGxI5o&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15eZMh6jnT%2F" target="_blank" rel="noopener noreferrer">
                <Facebook className="p-3 bg-gray-700 rounded-full text-white" size={45} />
              </a>
              <a href="https://www.instagram.com/nearbyrooms/?igsh=MXlmN2tiMmdzMXkx#" target="_blank" rel="noopener noreferrer">
                <Instagram className="p-3 bg-gray-700 rounded-full text-white" size={45} />
              </a>
              <a href="https://www.linkedin.com/company/nearbyrooms/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="p-3 bg-gray-700 rounded-full text-white" size={45} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Horizontal Line */}
        <div className="border-t border-gray-600 mt-12"></div>
        
        <p className="text-center text-lg text-gray-500 mt-6">2025 © Nearby Rooms. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactFooter;
