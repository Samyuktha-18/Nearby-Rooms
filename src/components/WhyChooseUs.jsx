import { CheckCircle, Shield, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <CheckCircle className="w-10 h-10 text-orange-500 group-hover:text-white transition duration-300" />,
    title: "Verified Listings",
    description: "100% authentic properties with detailed verification",
  },
  {
    icon: <Shield className="w-10 h-10 text-orange-500 group-hover:text-white transition duration-300" />,
    title: "Safe & Secure",
    description: "Secure transactions and personal data protection",
  },
  {
    icon: <MapPin className="w-10 h-10 text-orange-500 group-hover:text-white transition duration-300" />,
    title: "Prime Locations",
    description: "Best properties in premium locations across Pune",
  },
  {
    icon: <Star className="w-10 h-10 text-orange-500 group-hover:text-white transition duration-300" />,
    title: "Premium Partners",
    description: "Trusted partnerships with top property owners",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeIn" },
  }),
};

export default function WhyChooseUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white w-full flex flex-col items-center justify-center container mx-auto px-6 py-20 md:px-12 lg:px-24 overflow-hidden"
      id="About"
    >
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-black">
        Why <span className="text-orange-500">Choose Us</span>
      </h1>

      {/* Underline Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-32 h-1 bg-orange-400 rounded-full mb-10 origin-left"
      />

      {/* Subheading */}
      <p className="text-black text-center max-w-2xl mb-14 text-lg">
        Passionate about properties, dedicated to your vision.
      </p>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="group p-6 bg-white text-black shadow-lg rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:bg-orange-500 cursor-pointer"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
            <p className="mt-2 text-black group-hover:text-white transition">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
