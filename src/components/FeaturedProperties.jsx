import React, { useState, useEffect, useRef } from 'react';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import project4Image from '../assets/project4.jpg';
import project5Image from '../assets/project5.jpg';
import project6Image from '../assets/project6.jpg';
import project7Image from '../assets/project7.jpg';
import project8Image from '../assets/project8.jpg';
import left_arrow from '../assets/left_arrow.svg'
import right_arrow from '../assets/right_arrow.svg'

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const scrollContainerRef = useRef(null);

  // Sample data - This could be fetched from an API
  const initialProperties = [
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
      id: 7,
      title: "1BHK & office in Baner",
      price: "₹50,000/month",
      location: "Baner",
      image: project7Image,
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
      id: 8,
      title: "2BHK in Baner",
      price: "₹40,000/month",
      location: "Baner",
      image: project8Image,
      amenities: ["Parking", "Gym", "Swimming Pool"],
      link: "#"
    }
  ];

  // useEffect to set properties when component mounts (could be fetched from an API)
  useEffect(() => {
    setProperties(initialProperties);
  }, []);

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
    <section className="bg-white py-4">
      <div className="container mx-auto px-6">
        <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-2 w-full overflow-hidden" id="Projects">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
            Featured 
            <span className="underline underline-offset-4 decoration-1 under font-light pl-2">
              Properties
            </span>
          </h1>
          <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
            Crafting Spaces, Building legacies - Explore Our Portfolio
          </p>

          {/* Slider Buttons */}
          <div className="flex justify-end items-center mb-0">
            <button 
              onClick={() => scroll('left')} 
              className="p-3 bg-gray-200 rounded mr-2" 
              aria-label="Previous Project"
            >
              <img src={left_arrow} alt="previous" />
            </button>

            <button 
              onClick={() => scroll('right')} 
              className="p-3 bg-gray-200 rounded mr-2" 
              aria-label="Next Project"
            >
              <img src={right_arrow} alt="next" />
            </button>
          </div>

        </div>

        {/* Scrollable container with hidden scrollbar */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-4 scrollbar-hide justify-center gap-6"
          style={{ 
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
            WebkitOverflowScrolling: 'touch' // Smooth scrolling on iOS
          }}
        >

          {/* Displaying all properties */}
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"
            >
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{property.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-blue-600 font-medium">{property.price}</span>
                  <span className="bg-[#FF5733] text-white px-3 py-1 rounded-full text-xs flex items-center">
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
                  className="block w-full text-center bg-[#364a75] hover:bg-[#111827] text-white py-2 rounded transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;
