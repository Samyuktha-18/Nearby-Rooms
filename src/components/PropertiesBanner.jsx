import React from "react";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <div className="relative bg-[#111827] py-20 flex justify-center items-center">
      <div className="bg-[#FF5733] text-white rounded-lg px-14 py-12 flex flex-col md:flex-row md:items-center justify-between max-w-5xl w-full shadow-lg">
        <div>
          <h2 className="text-4xl font-bold">Looking for a dream home?</h2>
          <p className="text-lg mt-3">We can help you realize your dream of a new home</p>
        </div>
        <button className="cursor-pointer mt-6 md:mt-0 bg-white text-black px-8 py-3 text-lg rounded-md flex items-center gap-3 font-semibold shadow-md hover:bg-gray-100 transition-all">
          Explore Properties <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default CTABanner;
