import React from 'react';
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    message: "Found my perfect 1BHK in Hinjewadi through Nearby Rooms. The verification process gave me confidence in the listing.",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Avatar123"
  },
  {
    name: "Priya Mehta",
    message: "Nearby Rooms made my house-hunting process effortless. The filter options helped me find exactly what I was looking for!",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Samyuktha"
  },
  {
    name: "Amit Verma",
    message: "I moved to a new city for work and struggled to find a place. Nearby Rooms helped me secure a rental within days!",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Avatar123"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-20">
      <motion.div
      initial={{opacity: 0, x: 200}}
      transition={{duration: 2}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12">
          What Customers Say About Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-3">
                "{testimonial.message}"
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
