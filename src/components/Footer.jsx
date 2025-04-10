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

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Contact CTA Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-r from-orange-100 to-orange-100 text-black p-6 sm:p-10 lg:p-16 rounded-2xl max-w-7xl mx-auto -mb-20 z-10 shadow-2xl text-center md:text-left"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Find your <span className="text-orange-500">dream home</span> today!
        </h2>
        <p className="mt-4 text-lg sm:text-xl max-w-3xl">
          Discover the perfect property tailored to your lifestyle with our expert guidance and personalized recommendations.
        </p>
        <button className="mt-6 border border-black px-8 py-3 text-lg font-medium rounded-full flex items-center gap-2 justify-center mx-auto md:mx-0 hover:bg-black hover:text-white transition-all duration-300 group">
          Contact Us{" "}
          <span className="text-2xl group-hover:translate-x-1 transition-transform">↗</span>
        </button>
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-black text-white pt-40 pb-14 px-6 lg:px-12 mt-0 text-base sm:text-lg"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Nearby Rooms</h3>
            <p>
              Your personal real estate navigator and trusted partner in discovering quality rental accommodations.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full sm:w-64 bg-gray-800 border border-gray-700 text-white rounded-t-md sm:rounded-l-md sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="p-3 bg-orange-500 text-white font-semibold rounded-b-md sm:rounded-r-md sm:rounded-bl-none w-full sm:w-auto hover:bg-orange-600 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-semibold text-orange-500 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-orange-400 transition duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
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
            <div className="mt-6 flex gap-4">
              {[
                { icon: <Twitter />, link: "https://x.com/nearbyrooms" },
                { icon: <Facebook />, link: "https://www.facebook.com/people/Nearby-Rooms/61550898845863" },
                { icon: <Instagram />, link: "https://www.instagram.com/nearbyrooms" },
                { icon: <Linkedin />, link: "https://www.linkedin.com/company/nearbyrooms/" },
              ].map(({ icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-700 hover:bg-orange-500 text-white p-2 rounded-full transition-all"
                >
                  {React.cloneElement(icon, { size: 32 })}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          2025 © Nearby Rooms. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
