import { motion } from "framer-motion";
import { Building2, Users, CheckCircle2, Smile } from "lucide-react";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const stats = [
  { icon: <Smile className="w-8 h-8 text-orange-500" />, value: 5000, suffix: "+", label: "Happy Customers" },
  { icon: <CheckCircle2 className="w-8 h-8 text-orange-500" />, value: 2000, suffix: "+", label: "Verified Properties" },
  { icon: <Building2 className="w-8 h-8 text-orange-500" />, value: 15, suffix: "+", label: "Pune Locations" },
  { icon: <Users className="w-8 h-8 text-orange-500" />, value: 98, suffix: "%", label: "Customer Satisfaction" },
];

const AboutSection = () => {
  const [counterKey, setCounterKey] = useState(0);

  // Loop the count every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounterKey((prev) => prev + 1);
    }, 4000); // Every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 mx-8">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10"
      >
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
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white border-2 border-transparent hover:border-orange-400 p-6 sm:p-8 text-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                <CountUp
                  key={counterKey + "-" + index} // force re-animation
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                />
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
