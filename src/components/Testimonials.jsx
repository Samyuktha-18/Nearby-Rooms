import React from 'react';

const testimonials = [
  {
    name: "Alice Johnson",
    message: "This platform is amazing! I got results way faster than expected.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Mark Smith",
    message: "Outstanding service and great support team. Highly recommend!",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Priya Patel",
    message: "Sleek design and seamless experience. Totally loved it!",
    avatar: "https://i.pravatar.cc/150?img=3"
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
