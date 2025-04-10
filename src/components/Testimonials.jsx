import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const StarRating = ({ count = 5 }) => {
  return (
    <div className="flex gap-1 text-yellow-400 mb-4 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

const testimonials = [
  {
    name: 'Rahul Sharma',
    message:
      'Found my perfect 1BHK in Hinjewadi through Nearby Rooms. The verification process gave me confidence in the listing.',
  },
  {
    name: 'Priya Mehta',
    message:
      'Nearby Rooms made my house-hunting process effortless. The filter options helped me find exactly what I was looking for!',
  },
  {
    name: 'Amit Verma',
    message:
      'I moved to a new city for work and struggled to find a place. Nearby Rooms helped me secure a rental within days!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-24 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
          Hear From Our Happy Customers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-start items-center mb-3 text-orange-500">
                <Quote className="w-6 h-6" />
              </div>
              <StarRating />
              <h3 className="text-lg font-semibold text-blue-900">{testimonial.name}</h3>
              <p className="text-sm sm:text-base text-gray-700 mt-3 leading-relaxed">
                “{testimonial.message}”
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
