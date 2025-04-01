import { CheckCircle, Shield, MapPin, Star } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-10 h-10 text-blue-600" />, 
    title: "Verified Listings", 
    description: "100% authentic properties with detailed verification"
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />, 
    title: "Safe & Secure", 
    description: "Secure transactions and personal data protection"
  },
  {
    icon: <MapPin className="w-10 h-10 text-blue-600" />, 
    title: "Prime Locations", 
    description: "Best properties in premium locations across Pune"
  },
  {
    icon: <Star className="w-10 h-10 text-blue-600" />, 
    title: "Premium Partners", 
    description: "Trusted partnerships with top property owners"
  }
];

export default function WhyChooseUs() {
  return (
    <div className="py-6 bg-gray-100 text-center min-h-screen px-6 md:px-16 lg:px-32 font-['Outfit']">
      <h2 className="text-4xl  text-gray-800 mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold mt-4 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
