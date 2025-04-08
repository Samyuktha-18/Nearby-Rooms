import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const ContactFooter = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Contact CTA Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-[#fdf2ec] text-black p-6 sm:p-10 lg:p-16 rounded-lg max-w-7xl mx-auto -mb-20 z-10 shadow-xl text-center md:text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Find your <span className="text-orange-500">dream home</span> today!
        </h2>
        <p className="mt-4 text-base sm:text-lg lg:text-xl">
          Discover the perfect property tailored to your needs and preferences with our expert guidance.
        </p>
        <button className="mt-6 border border-black px-6 py-3 sm:px-8 text-base sm:text-lg rounded-lg flex items-center gap-2 justify-center mx-auto md:mx-0 hover:bg-black hover:text-white transition">
          Contact Us <span className="text-xl sm:text-2xl">↗</span>
        </button>
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-black text-white pt-32 pb-12 px-4 sm:px-6 lg:px-12 mt-0 text-base sm:text-lg"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Nearby Rooms</h3>
            <p className="mt-4">
              We are your personal real estate navigator, and your trusted partner in finding quality rental accommodations.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full sm:w-64 bg-gray-800 border border-gray-700 text-white rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none"
              />
              <button className="p-3 bg-orange-500 text-white rounded-b-md sm:rounded-r-md sm:rounded-bl-none w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-orange-500">Links</h4>
            <ul className="mt-4 space-y-3">
              {["Home", "About", "Projects", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="hover:text-gray-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold">Contact</h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={20} /> <p>+91 9960276026</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} /> <p>info@nearbyrooms.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} /> <p>Pune, Maharashtra</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://x.com/nearbyrooms" target="_blank" rel="noopener noreferrer">
                <Twitter className="p-2 bg-gray-700 rounded-full" size={40} />
              </a>
              <a href="https://www.facebook.com/people/Nearby-Rooms/61550898845863" target="_blank" rel="noopener noreferrer">
                <Facebook className="p-2 bg-gray-700 rounded-full" size={40} />
              </a>
              <a href="https://www.instagram.com/nearbyrooms" target="_blank" rel="noopener noreferrer">
                <Instagram className="p-2 bg-gray-700 rounded-full" size={40} />
              </a>
              <a href="https://www.linkedin.com/company/nearbyrooms/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="p-2 bg-gray-700 rounded-full" size={40} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          2025 © Nearby Rooms. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
};

export default ContactFooter;
