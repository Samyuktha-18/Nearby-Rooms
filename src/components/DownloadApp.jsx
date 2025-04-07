import React from 'react';
import googlePlay from '../assets/googlePlay.svg';
import appleIcon from '../assets/appleIcon.png';

const DownloadAppBanner = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 md:px-12 lg:px-20 mb-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/banner.jpg"
            alt="Download App"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Download Our App
          </h2>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl">
            Enjoy a seamless experience and exclusive features. Get our app now and stay connected on the go!
            Whether you're managing your account, exploring new features, or getting instant updates —
            everything is just a tap away. Download now and elevate your mobile experience!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            {/* Google Play */}
            <a
              href="#"
              className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-lg shadow hover:bg-gray-800 transition"
            >
              <img
                src={googlePlay}
                alt="Google Play"
                className="w-8 h-10 object-contain"
              />
              <div className="text-left">
                <p className="text-xs leading-tight">GET IT ON</p>
                <p className="text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-lg shadow hover:bg-gray-800 transition"
            >
              <img
                src={appleIcon}
                alt="App Store"
                className="w-8 h-10 object-contain"
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
