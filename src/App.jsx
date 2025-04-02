import React from 'react'
import Header from './components/Header'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedProperties from './components/FeaturedProperties'
import CTABanner from './components/PropertiesBanner'
import AboutSection from './components/About'
import ContactFooter from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <WhyChooseUs/>
      <FeaturedProperties/>
      <CTABanner/>
      <AboutSection/>
      <ContactFooter/>
    </div>
  )
}

export default App
