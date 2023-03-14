import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../../../Assets/logo.svg'
import { Link } from 'react-router-dom';
import SignIn from '../../Section/SignIn/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../../../Redux/Features/Auth/authSlice';
import Modal from '../Modal/Modal';
import SignUp from '../SignIn/SignUp/SignUp';
import UserDropDown from './UserDropDown/UserDropDown';
import SideMenu from './SideMenu/SideMenu';

function NavBar() {

    const { consumer } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

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

    function handleLogout() {
        dispatch(logout());
        dispatch(reset());
        // navigate('/sign-in');
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
                                <li className="nav-item"><Link className="nav-link nav-hover" to="/buy">Buy</Link></li>
                                <li className="nav-item"><Link className="nav-link nav-hover" to="/rent">Rent</Link></li>
                                {/* <li className="nav-item"><button onClick={handleModal} className='propery-fee btn'>Post property <span className='free'>free</span></button></li> */}
                                {!consumer
                                ?<li className="nav-item">
                                    <button onClick={() => {
                                    setShowModal(true)
                                    setShowSignIn(true)
                                }} className='propery-fee btn btn-outline-light'>Post property <span className='free'>free</span></button></li>
                                :
                                <li className="nav-item">
                                    <Link to={`/dashboard/mylisting-form`}>
                                    <button className='propery-fee btn btn-outline-light'>Post property 
                                    <span className='free'>free</span></button></Link></li>
                                }
                            </ul>
                        </div>
                        <button
                        onClick={() => {
                            setSideBar(true)
                        }}
                        className="nav-band">
                            <img src='https://bastu.antopolis.xyz/frontend/new_ui/assets/images/hamburger.svg' alt="" />
                        </button>
                        <div className="right_menu">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link nav-hover" to="/packages">Packages</Link></li>
                                <li className="nav-item"><Link className="nav-link nav-hover" to="/service">Service</Link></li>
                                <li className="nav-item"><Link className="nav-link nav-hover" to="/contact">Contact</Link></li>
                                <li className="nav-item">
                                    {consumer
                                        ?
                                        <li className="nav-item"><UserDropDown /></li>
                                        :
                                        // <button onClick={handleModal} className='login btn'>Log In</button>
                                        <button onClick={() => {
                                            setShowModal(true)
                                            setShowSignIn(true)
                                        }} className='login btn'>Log In</button>
                                    }
                                </li>

                                {/* <li className="nav-item"><UserDropDown /></li> */}
                            </ul>
                        </div>
                    </div>
                    {/* {showModal && <SignIn showModal={showModal} setShowModal={setShowModal} />} */}
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