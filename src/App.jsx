import React from 'react'
import Header from './components/Header'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedProperties from './components/FeaturedProperties'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <WhyChooseUs/>
      <FeaturedProperties/>
    </div>
  )
}

export default App
