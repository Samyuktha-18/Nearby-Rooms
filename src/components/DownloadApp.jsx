import React from 'react';
import googlePlay from '../assets/googlePlay.svg';
import appleIcon from '../assets/appleIcon.png';

const DownloadAppBanner = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-20 mb-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full">
          <img
            src="/banner.jpg" // Make sure this path is correct
            alt="Download App"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Text + Buttons Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download Our App
          </h2>
          <p className="text-gray-600 mb-6">
            Enjoy a seamless experience and exclusive features. Get our app now and stay connected on the go!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Google Play */}
            <a
              href="#"
              className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg shadow hover:bg-gray-800 transition"
            >
              <img
                src={googlePlay}
                alt="Google Play"
                className="w-6 h-12 object-contain"
              />
              <div className="text-left">
                <p className="text-xs leading-tight">GET IT ON</p>
                <p className="text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-lg shadow hover:bg-gray-800 transition"
            >
              <img
                src={appleIcon}
                alt="App Store"
                className="w-6 h-12 object-contain"
              />
              <div className="text-left">
                <p className="text-xs leading-tight">Download on the</p>
                <p className="text-sm font-semibold leading-tight">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppBanner;
