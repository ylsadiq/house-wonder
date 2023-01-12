import './App.css';
import NavBar from './Partials/Section/NavBar/NavBar';
import Banner from './Screens/Banner/Banner';
import FeaturedProperties from './Screens/FeaturedProperties/FeaturedProperties';
import OneStopSolution from './Screens/OneStopSolution/OneStopSolution';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <OneStopSolution />
        <FeaturedProperties />
    </div>
  );
}

export default App;
