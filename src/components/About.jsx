import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 ml-8 mr-8">
      <motion.div
      initial={{opacity: 0, x: -200}}
      transition={{duration: 2}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
       className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Building dreams into stunning{" "}
            <span className="text-orange-500">real estate</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4">
            We take pride in our track record of excellence and innovation in the real estate industry. Here’s a glimpse of our notable achievements.
          </p>
          <button className="cursor-pointer mt-6 border-2 border-orange-500 px-6 py-2 text-base sm:text-lg text-black font-semibold flex items-center hover:bg-orange-500 hover:text-white transition">
            More About Us <span className="ml-2">↗</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-orange-100 p-6 sm:p-8 text-center rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">5000+</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-orange-100 p-6 sm:p-8 text-center rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">2000+</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Verified Properties</p>
          </div>
          <div className="bg-orange-100 p-6 sm:p-8 text-center rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">15+</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Pune Locations</p>
          </div>
          <div className="bg-orange-100 p-6 sm:p-8 text-center rounded-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">98%</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">Customer Satisfaction</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
