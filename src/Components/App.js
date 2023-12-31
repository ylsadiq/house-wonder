import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Partials/Section/Footer/Footer';
import NavBar from './Partials/Section/NavBar/NavBar';
import Buy from './Screens/Buy/Buy';
import BuyDetails from './Screens/Buy/BuyDetails/BuyDetails';
import ContactForm from './Screens/ContactForm/ContactForm';
import BuyRequests from './Screens/DashBoard/BuyRequests/BuyRequests';
import ChangePassword from './Screens/DashBoard/ChangePassword/ChangePassword';
import DashBoard from './Screens/DashBoard/DashBoard';
import MyListingForm from './Screens/DashBoard/MyListings/MyListingForm/MyListingForm';
import MyListings from './Screens/DashBoard/MyListings/MyListings';
import MyProfile from './Screens/DashBoard/MyProfile/MyProfile';
import RentRequests from './Screens/DashBoard/RentRequests/RentRequests';
import RequestedPackages from './Screens/DashBoard/RequestedPackages/RequestedPackages';
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
        <Route path="/buyRent/*" element={<Buy />}/>
        <Route path="/details" element={<BuyDetails />}/>
        <Route path="/packages" element={<Packages />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/contact" element={<ContactForm />}/>
        <Route path="/dashboard" element={<DashBoard />} >
          <Route index element={<MyListings />}></Route>
          <Route path='mylisting-form' element={<MyListingForm />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
          <Route path='changePassword' element={<ChangePassword />}></Route>
          <Route path='RequestedPackages' element={<RequestedPackages />}></Route>
          <Route path='buyRequests' element={<BuyRequests />}></Route>
          <Route path='rentRequests' element={<RentRequests />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
