import FeaturedProperties from './FeaturedProperties/FeaturedProperties';
import LookingProperty from './LookingProperty/LookingProperty';
import LuxuryProperty from './LuxuryProperty/LuxuryProperty';
import OneStopSolution from './OneStopSolution/OneStopSolution';
import Testimonial from './Testimonial/Testimonial';
import Banner from './Banner/Banner';
import './Home.css';

function Home() {
  return (
    <>
        <Banner />
        <OneStopSolution />
        <FeaturedProperties />
        <LuxuryProperty />
        <LookingProperty />
        <Testimonial />
    </>
  )
}

export default Home