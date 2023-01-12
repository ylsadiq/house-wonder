import './App.css';
import Footer from './Partials/Section/Footer/Footer';
import NavBar from './Partials/Section/NavBar/NavBar';
import Banner from './Screens/Banner/Banner';
import FeaturedProperties from './Screens/FeaturedProperties/FeaturedProperties';
import LookingProperty from './Screens/LookingProperty/LookingProperty';
import LuxuryProperty from './Screens/LuxuryProperty/LuxuryProperty';
import OneStopSolution from './Screens/OneStopSolution/OneStopSolution';
import Testimonial from './Screens/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <OneStopSolution />
        <FeaturedProperties />
        <LuxuryProperty />
        <LookingProperty />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;
