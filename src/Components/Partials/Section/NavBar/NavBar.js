import React, {useState} from 'react';
import './NavBar.css';
import logo from  '../../../../Assets/logo.svg'
import { Link } from 'react-router-dom';
import SignIn from '../../Section/SignIn/SignIn'

function NavBar() {
    const [showModal, setShowModal] = useState(false);
    const handleModal = (e) =>{
        e.preventDefault();
        setShowModal((showModal) => !showModal);
        console.log(showModal);
     }
  return (
    <>
    <nav className='autohide bg-light'>
        <div className="container-fluid">
            <div className="nav-menu">
            <Link to="" className='navbar-brand'>
                <img src={logo} alt="" />
            </Link>
            <div className="left_menu">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/buy">Buy</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="">Rent</Link></li>
                    <li className="nav-item"><button onClick={handleModal} className='propery-fee btn'>Post property <span className='free'>free</span></button></li>
                </ul>
                </div>
            <div className="right_menu">
            <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/packages">Packages</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/service">Service</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">contact</Link></li>
                    <li className="nav-item"><button className='login btn'>Log In</button></li>
                </ul>
            </div>
            </div>           
    {showModal && <SignIn showModal={showModal} setShowModal={setShowModal}/>}
        </div>
    </nav>
    </>
  )
}

export default NavBar