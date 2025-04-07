import React from 'react';

const DownloadAppBanner = () => {
  return (
    <section className="bg-gray-100 py-12 ml-25 mr-25 mb-10">
      <div className="mx-6 md:mx-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="/app-banner-image.png"
              alt="Download App"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>

          {/* Text + Button Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download Our App
            </h2>
            <p className="text-gray-600 mb-6">
              Enjoy seamless experience and exclusive features. Get our app now and stay connected on the go!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
              >
                <img src="/google-play.png" alt="Google Play" className="w-6" />
                Google Play
              </a>
              <a
                href="#"
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
              >
                <img src="/app-store.png" alt="App Store" className="w-6" />
                App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppBanner;
