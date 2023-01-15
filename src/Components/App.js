import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Partials/Section/Footer/Footer';
import NavBar from './Partials/Section/NavBar/NavBar';
import Buy from './Screens/Buy/Buy';
import Home from './Screens/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/buy" element={<Buy />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
