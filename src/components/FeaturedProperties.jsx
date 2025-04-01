import React, { useRef } from 'react';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import project4Image from '../assets/project4.jpg';
import project5Image from '../assets/project5.jpg';
import project6Image from '../assets/project6.jpg';
import project7Image from '../assets/project7.jpg';
import project8Image from '../assets/project8.jpg';


const FeaturedProperties = () => {
  const scrollContainerRef = useRef(null);
  
  const properties = [
    {
      id: 1,
      title: "Luxury Studio in Kharadi",
      price: "₹25,000/month",
      location: "Kharadi",
      image: project1Image,
      amenities: ["AC", "WiFi", "Fully Furnished"],
      link: "#"
    },
    {
      id: 2,
      title: "Modern 1BHK in Hinjewadi",
      price: "₹35,000/month",
      location: "Hinjewadi",
      image: project2Image,
      amenities: ["Parking", "Security", "Lift"],
      link: "#"
    },
    {
      id: 4,
      title: "Cozy Studio in Viman Nagar",
      price: "₹22,000/month",
      location: "Viman Nagar",
      image: project4Image,
      amenities: ["AC", "Furnished", "Power Backup"],
      link: "#"
    },
    {
      id: 5,
      title: "2BHK in Baner",
      price: "₹40,000/month",
      location: "Baner",
      image: project5Image,
      amenities: ["Parking", "Gym", "Swimming Pool"],
      link: "#"
    },
    {
      id: 6,
      title: "2BHK & office in Baner",
      price: "₹60,000/month",
      location: "Baner",
      image: project6Image,
      amenities: ["Parking", "Gym", "Swimming Pool"],
      link: "#"
    },
    {
      id: 3,
      title: "Spacious Shared Apartment in Kothrud",
      price: "₹15,000/month",
      location: "Kothrud",
      image: project3Image,
      amenities: ["Balcony", "Housekeeping", "Laundry"],
      link: "#"
    },
    {
      id: 7,
      title: "1BHK & office in Baner",
      price: "₹50,000/month",
      location: "Baner",
      image: project7Image,
      amenities: ["Parking", "Gym", "Swimming Pool"],
      link: "#"
    },
    {
      id: 8,
      title: "2BHK in Baner",
      price: "₹40,000/month",
      location: "Baner",
      image: project8Image,
      amenities: ["Parking", "Gym", "Swimming Pool"],
      link: "#"
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust scroll amount as needed
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Featured Properties</h2>
          <div className="flex items-center">
            <button 
              onClick={() => scroll('left')} 
              className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 mr-2 focus:outline-none"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 mr-4 focus:outline-none"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            {/* <a href="#" className="text-blue-500 flex items-center">
              View All Properties 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a> */}
          </div>
        </div>
        
        {/* Scrollable container with hidden scrollbar */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-4 scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
            WebkitOverflowScrolling: 'touch' // Smooth scrolling on iOS
          }}
        >
          {/* Custom style to hide scrollbar for Webkit browsers */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="flex-shrink-0 w-64 sm:w-72 mr-4 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"
            >
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{property.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-blue-600 font-medium">{property.price}</span>
                  <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-xs flex items-center">
                    {property.location}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {property.amenities.map((amenity, index) => (
                    <span key={index} className="text-gray-600 bg-gray-100 px-3 py-1 text-xs rounded-full">
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={property.link} 
                  className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <a href="#" className="flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500 py-2 px-2 rounded-full transition-all duration-300">
  View All Properties
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
</a>

    </section>
    
  );
};

export default FeaturedProperties;