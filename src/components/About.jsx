const AboutSection = () => {
  return (
    <section className="bg-white py-10 px-12 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between lg:mx-20 xl:mx-28">
        {/* Left Section */}
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-black">
            Building dreams into stunning <span className="text-orange-500">real estate</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            We take pride in our track record of excellence and innovation
             in the real estate industry.
            Here’s a glimpse of our notable achievements.
          </p>
          <button className="cursor-pointer mt-6 border-2 border-orange-500 px-6 py-2 text-lg text-black font-semibold flex items-center hover:bg-orange-500 hover:text-white transition">
            More About Us <span className="ml-2">↗</span>
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-8 mt-8 md:mt-0 cursor-pointer">
          <div className="bg-orange-100 p-8 text-center rounded-lg">
            <h2 className="text-4xl font-bold text-black">5000+</h2>
            <p className="text-lg text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-orange-100 p-8 text-center rounded-lg">
            <h2 className="text-4xl font-bold text-black">2000+</h2>
            <p className="text-lg text-gray-600">Verified Properties</p>
          </div>
          <div className="bg-orange-100 p-8 text-center rounded-lg">
            <h2 className="text-4xl font-bold text-black">15+</h2>
            <p className="text-lg text-gray-600">Pune Locations</p>
          </div>
          <div className="bg-orange-100 p-8 text-center rounded-lg">
            <h2 className="text-4xl font-bold text-black">98%</h2>
            <p className="text-lg text-gray-600">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
