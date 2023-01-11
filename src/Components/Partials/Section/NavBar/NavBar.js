import React from 'react';
import './NavBar.css';
import logo from  '../../../../Assets/logo.svg'

function NavBar() {
  return (
    <nav className='autohide bg-light'>
        <div className="container-fluid">
            <div className="nav-menu">
            <a href="" className='navbar-brand'>
                <img src={logo} alt="" />
            </a>
            <div className="left_menu">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="">Buy</a></li>
                    <li className="nav-item"><a className="nav-link" href="">Rent</a></li>
                    <li className="nav-item"><button className='propery-fee btn'>Post property <span className='free'>free</span></button></li>
                </ul>
                </div>
            <div className="right_menu">
            <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="">Packages</a></li>
                    <li className="nav-item"><a className="nav-link" href="">Service</a></li>
                    <li className="nav-item"><a className="nav-link" href="">contact</a></li>
                    <li className="nav-item"><button className='login btn'>Log In</button></li>
                </ul>
            </div>
            </div>            
        </div>
    </nav>
  )
}

export default NavBar