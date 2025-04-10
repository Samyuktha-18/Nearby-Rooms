import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

const videoList = [
  "/videos/3773486-hd_1920_1080_30fps.mp4",
  "/videos/8814724-uhd_3840_2160_25fps.mp4",
  "/videos/8293009-hd_1920_1080_30fps.mp4",
];

const AnimatedVideoSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videoList.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto my-14 rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[550px]">
        {/* Video Section */}
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait">
            <motion.video
              key={index}
              src={videoList[index]}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center items-start bg-orange-100 px-8 sm:px-12 py-10">
          <motion.h2
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-extrabold text-gray-900"
          >
            Explore Verified Rooms
          </motion.h2>

          <motion.p
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-700 text-lg mt-4 leading-relaxed"
          >
            No more random listings. Find safe, vetted, and fully detailed rental spaces nearby — perfect for students, professionals, and travelers.
          </motion.p>

          <ul className="mt-6 space-y-3 text-gray-800 text-base">
            <motion.li
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="text-orange-500 text-lg">✔</span> Fully Verified Listings
            </motion.li>
            <motion.li
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex items-center gap-3"
            >
              <span className="text-orange-500 text-lg">✔</span> Real Photos & Amenities
            </motion.li>
            <motion.li
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-3"
            >
              <span className="text-orange-500 text-lg">✔</span> Trusted by 10k+ users
            </motion.li>
          </ul>

          <motion.button
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-8 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-2 text-base font-semibold transition"
          >
            Browse Listings <ArrowRightCircle size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AnimatedVideoSlideshow;
