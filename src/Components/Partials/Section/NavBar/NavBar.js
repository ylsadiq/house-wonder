import React, { useState } from 'react';
import logo from '../../../../Assets/logo.svg'
import { Link } from 'react-router-dom';
import SignIn from '../../Section/SignIn/SignIn';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import SignUp from '../SignIn/SignUp/SignUp';
import UserDropDown from './UserDropDown/UserDropDown';
import SideMenu from './SideMenu/SideMenu';

import './NavBar.css';

function NavBar() {

    const { consumer } = useSelector((state) => state.auth);

    const [showModal, setShowModal] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [sideBar, setSideBar] = useState(false);

    function handleClose() {
        setShowModal(false);
        setShowSignIn(false);
        setShowSignUp(false);
        setSideBar(false)
    }

    return (
        <>
            <nav className='autohide bg-light'>
                <div className="container-fluid">
                    <div className="nav-menu">
                        <Link to="/" className='navbar-brand'>
                            <img src={logo} alt="" />
                        </Link>
                        <button
                            onClick={() => {
                                setSideBar(true)
                            }}
                            className="nav-band">
                            <img src='https://bastu.antopolis.xyz/frontend/new_ui/assets/images/hamburger.svg' alt="" />
                        </button>
                        
                        <div className="left_menu">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link nav-hover" to="/buyRent/buy">Buy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-hover" to="/buyRent/rent">Rent</Link>
                                </li>
                                {!consumer
                                    ?
                                    <li className="nav-item">
                                        <button onClick={() => {
                                            setShowModal(true)
                                            setShowSignIn(true)
                                        }} className='propery-fee btn btn-outline-light'>Post property <span className='free'>free</span>
                                        </button>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <Link to={`/dashboard/mylisting-form`}>
                                            <button className='propery-fee btn btn-outline-light'>Post property
                                                <span className='free'>free</span>
                                            </button>
                                        </Link>
                                    </li>
                                }
                            </ul>
                        </div>

                        <div className="right_menu">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link nav-hover" to="/packages">Packages</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-hover" to="/service">Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-hover" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    {consumer
                                        ?
                                        <li className="nav-item"><UserDropDown /></li>
                                        :
                                        <button onClick={() => {
                                            setShowModal(true)
                                            setShowSignIn(true)
                                        }} className='login btn'>Log In</button>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                    {showModal &&
                        <Modal
                            handleClose={handleClose}
                        >
                            {showSignIn &&
                                <SignIn
                                    handleClose={handleClose}
                                    setShowSignIn={setShowSignIn}
                                    setShowSignUp={setShowSignUp}
                                />
                            }
                            {showSignUp &&
                                <SignUp
                                    handleClose={handleClose}
                                    setShowSignIn={setShowSignIn}
                                    setShowSignUp={setShowSignUp}
                                />
                            }
                        </Modal>
                    }

                    {sideBar &&
                        <SideMenu
                            handleClose={handleClose}
                        />

                    }
                </div>
            </nav>
        </>
    )
}

export default NavBar