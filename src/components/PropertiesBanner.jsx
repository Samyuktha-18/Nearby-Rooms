import React from "react";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <div className="relative bg-[#111827] py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="bg-[#FF5733] text-white rounded-xl px-6 sm:px-10 md:px-14 py-10 sm:py-12 flex flex-col md:flex-row md:items-center justify-between w-full max-w-6xl shadow-xl gap-6 md:gap-0">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Looking for a dream home?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mt-3">
            We can help you realize your dream of a new home
          </p>
        </div>

        {/* CTA Button */}
        <button className="w-full md:w-auto mt-4 md:mt-0 bg-white text-black px-6 sm:px-8 py-3 text-base sm:text-lg rounded-md flex items-center justify-center gap-2 font-semibold shadow-md hover:bg-gray-100 transition-all">
          Explore Properties <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CTABanner;
