import React from 'react';

const testimonials = [
  {
    name: "Rahul Sharma ",
    message: "Found my perfect 1BHK in Hinjewadi through Nearby Rooms. The verification process gave me confidence in the listing.",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Avatar123"
  },
  {
    name: "Priya Mehta ",
    message: "Nearby Rooms made my house-hunting process effortless. The filter options helped me find exactly what I was looking for!",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Samyuktha"
  },
  {
    name: "Amit Verma ",
    message: "I moved to a new city for work and struggled to find a place. Nearby Rooms helped me secure a rental within days!",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Avatar123"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 ml-25 mr-25 mb-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">What Customers Say About Us</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 mt-3">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
