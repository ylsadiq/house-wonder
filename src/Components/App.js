import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Partials/Section/Footer/Footer';
import NavBar from './Partials/Section/NavBar/NavBar';

import Buy from './Screens/Buy/Buy';
import ContactForm from './Screens/ContactForm/ContactForm';
import ChangePassword from './Screens/DashBoard/ChangePassword/ChangePassword';
import DashBoard from './Screens/DashBoard/DashBoard';
import MyListings from './Screens/DashBoard/MyListings/MyListings';
import MyProfile from './Screens/DashBoard/MyProfile/MyProfile';
import Home from './Screens/Home/Home';
import Packages from './Screens/Packages/Packages';
import Service from './Screens/Service/Service';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/buy" element={<Buy />}/>
        <Route path="/packages" element={<Packages />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/contact" element={<ContactForm />}/>
        <Route
        path="/dashboard"
        element={
            <DashBoard />
        } >
        <Route index element={<MyListings />}></Route>
        <Route path='myprofile' element={<MyProfile />}></Route>
        <Route path='changePassword' element={<ChangePassword />}></Route>
      </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
