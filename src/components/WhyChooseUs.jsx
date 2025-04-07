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
    <div className="flex flex-col items-center justify-center container mx-auto px-6 py-10 md:px-12 lg:px-24 w-full overflow-hidden" id="About">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Why 
        <span className="underline underline-offset-4 decoration-2 font-light pl-2">Choose Us</span>
      </h1>
      <p className="text-gray-500 text-center max-w-2xl mb-12">
        Passionate about properties, dedicated to your vision..
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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