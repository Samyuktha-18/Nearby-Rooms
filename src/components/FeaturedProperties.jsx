import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Project images
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import project4Image from '../assets/project4.jpg';
import project5Image from '../assets/project5.jpg';
import project6Image from '../assets/project6.jpg';
import project7Image from '../assets/project7.jpg';
import project8Image from '../assets/project8.jpg';

import leftArrow from '../assets/left_arrow.svg';
import rightArrow from '../assets/right_arrow.svg';

const FeaturedProperties = () => {
  const scrollRef = useRef(null);
  const [properties, setProperties] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const sampleProperties = [
    {
      id: 1,
      title: 'Luxury Studio in Kharadi',
      price: '₹25,000/month',
      location: 'Kharadi',
      image: project1Image,
      amenities: ['AC', 'WiFi', 'Fully Furnished'],
      link: '#',
    },
    {
      id: 2,
      title: 'Modern 1BHK in Hinjewadi',
      price: '₹35,000/month',
      location: 'Hinjewadi',
      image: project2Image,
      amenities: ['Parking', 'Security', 'Lift'],
      link: '#',
    },
    {
      id: 3,
      title: 'Shared Apartment in Kothrud',
      price: '₹15,000/month',
      location: 'Kothrud',
      image: project3Image,
      amenities: ['Balcony', 'Housekeeping', 'Laundry'],
      link: '#',
    },
    {
      id: 4,
      title: 'Cozy Studio in Viman Nagar',
      price: '₹22,000/month',
      location: 'Viman Nagar',
      image: project4Image,
      amenities: ['AC', 'Furnished', 'Power Backup'],
      link: '#',
    },
    {
      id: 5,
      title: '2BHK in Baner',
      price: '₹40,000/month',
      location: 'Baner',
      image: project5Image,
      amenities: ['Parking', 'Gym', 'Swimming Pool'],
      link: '#',
    },
    {
      id: 6,
      title: '2BHK & Office in Baner',
      price: '₹60,000/month',
      location: 'Baner',
      image: project6Image,
      amenities: ['Parking', 'Gym', 'Swimming Pool'],
      link: '#',
    },
    {
      id: 7,
      title: '1BHK & Office in Baner',
      price: '₹50,000/month',
      location: 'Baner',
      image: project7Image,
      amenities: ['Parking', 'Gym', 'Swimming Pool'],
      link: '#',
    },
    {
      id: 8,
      title: '2BHK in Baner',
      price: '₹40,000/month',
      location: 'Baner',
      image: project8Image,
      amenities: ['Parking', 'Gym', 'Swimming Pool'],
      link: '#',
    },
  ];

  useEffect(() => {
    setProperties(sampleProperties);
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const handleScroll = () => {
      const cardWidth = scrollEl.firstChild?.offsetWidth + 24;
      const index = Math.round(scrollEl.scrollLeft / (cardWidth * 4));
      setActiveIndex(index);
    };

    scrollEl.addEventListener('scroll', handleScroll);
    return () => scrollEl.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollHandler = (direction) => {
    const scrollAmount = scrollRef.current.firstChild.offsetWidth * 4 + 24 * 3;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const goToIndex = (index) => {
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
    scrollRef.current.scrollTo({
      left: index * cardWidth * 4,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-white py-16">
      <div className="px-6 md:px-20 lg:px-32 max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured
            <span className="text-gray-600 font-light underline underline-offset-4 pl-2">
              Properties
            </span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">
            Crafting Spaces, Building Legacies - Explore Our Portfolio
          </p>
        </motion.div>

        {/* Arrows */}
        <div className="flex justify-end mb-4 gap-2">
          <button onClick={() => scrollHandler('left')} className="p-3 bg-gray-200 rounded hover:bg-gray-300">
            <img src={leftArrow} alt="Left" />
          </button>
          <button onClick={() => scrollHandler('right')} className="p-3 bg-gray-200 rounded hover:bg-gray-300">
            <img src={rightArrow} alt="Right" />
          </button>
        </div>

        {/* Cards */}
        <motion.div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-4 cursor-grab select-none scrollbar-hide"
          initial={{opacity: 0, x: 200}}
          transition={{duration: 2, delay: 2.5}}
          whileInView={{opacity: 1, x:0}}
          viewport={{once: true}}>
          {properties.map((property) => (
            <motion.div
              key={property.id}
              className="snap-start flex-shrink-0 w-64 sm:w-72 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow"
              initial={{opacity: 0, x: 200}}
              transition={{duration: 2}}
              whileInView={{opacity: 1, x:0}}
              viewport={{once: true}} >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{property.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-blue-600 font-medium">{property.price}</span>
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs">
                    {property.location}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {property.amenities.map((item, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-3 py-1 text-xs rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={property.link}
                  className="block text-center bg-[#364a75] hover:bg-[#111827] text-white py-2 rounded transition-colors"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center items-center gap-2">
          {Array.from({ length: Math.ceil(properties.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === activeIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
