import AboutSection from "./About";
import AnimatedVideoSlideshow from "./Animated";
import DownloadAppBanner from "./DownloadApp";
import FAQ from "./Faq";
import FeaturedProperties from "./FeaturedProperties";
import Header from "./Header";
import CTABanner from "./PropertiesBanner";
import Testimonials from "./Testimonials";
import WhyChooseUs from "./WhyChooseUs";


const Home= () => {
    return (
      <div className='w-full overflow-hidden'>
        <Header/>
        <WhyChooseUs/>
        <div className="relative">
        <FeaturedProperties />
        <CTABanner />
      </div>
        <AboutSection/>
        <AnimatedVideoSlideshow/>
        <Testimonials/>
        <FAQ/>
        <DownloadAppBanner/>
      </div>
    )
  }
  
  export default Home;
  