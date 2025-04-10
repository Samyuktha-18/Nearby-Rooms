import React from 'react';
import googlePlay from '../assets/googlePlay.svg';
import appleIcon from '../assets/appleIcon.png';
import { motion } from 'framer-motion';

const DownloadAppBanner = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-12 lg:px-20 mb-10">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto"
      >
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/banner.jpg"
            alt="Download App"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Download Our App
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
            Enjoy a seamless experience and exclusive features. Whether you're managing your account,
            exploring new options, or getting instant updates — everything is just a tap away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            {/* Google Play */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="group flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition duration-300 ease-in-out"
            >
              <img
                src={googlePlay}
                alt="Google Play"
                className="w-8 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="text-left">
                <p className="text-xs">GET IT ON</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </motion.a>

            {/* App Store */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="group flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition duration-300 ease-in-out"
            >
              <img
                src={appleIcon}
                alt="App Store"
                className="w-8 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadAppBanner;
