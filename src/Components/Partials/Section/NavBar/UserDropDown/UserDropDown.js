import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../../../../Assets/image/profile/userImg.svg';
import arrowDown from '../../../../../Assets/home/arrowDown.svg';

import { Avatar, Logout, Packages, Password, Properties, Services } from '../../../../Screens/DashBoard/DashboardIcons/DashboardIcons';
import { useDispatch } from 'react-redux';
import { logout, reset } from '../../../../../Redux/Features/Auth/authSlice';

import './UserDropDown.css';

function UserDropDown() {
    const [arrow, setArrow] = useState(false);
    // const { consumer } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    const [dropDown, setDropDown] = useState(true);
    const handleDropdown = () => {
        setDropDown(!dropDown);

    }
    const handleLogin = () => {
        setArrow(!arrow)
    }
    function handleLogout() {
        dispatch(logout());
        dispatch(reset());
        // navigate('/sign-in');
    }
    return (
        <section className="user-dropdown">
            <div className="container-fluid">
                <div className="user-profile-content">
                    <div className="user-dropdown-content" onClick={handleLogin}>
                        <div className="user-img">
                            <img src={userImg} alt="" />
                        </div>
                        <div className="user-name">
                            <h4>test111</h4>
                        </div>
                        <div className={` ${arrow === true ? "user-arrow" : "user-icon-rotate"}`}>

                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                    <div className={` ${arrow ? "user-login-info" : "user-hidden"}`}>
                        <ul className="user-nav">
                            <li className="nav-item user-item">
                                <Link className="nav-link" to="/dashboard"><Avatar /> My Profile</Link>
                            </li>
                            <li className='nav-item d_lg_none'>
                                <Link className='nav-link' to="/dashboard/changePassword"><Password /> Change Password</Link>
                            </li>
                            <li className='nav-item d_lg_none'>
                                <Link className='nav-link' to="/dashboard/RequestedPackages"> <Packages /> Requested Packages</Link>
                            </li>
                            <li className='nav-item d_lg_none'>
                                <Link className='nav-link' to=""><Services /> Requested Services</Link>
                            </li>
                            <li className='nav-item d_lg_none'>
                                <div className="dropdown-wrapper">
                                    <span className="dropdown-toggle nav-link" onClick={handleDropdown} >
                                        <Properties />
                                        Requested properties
                                        &nbsp;
                                        <img className={`${dropDown ? "arrow-down" : null}`} src={arrowDown} alt="" />
                                    </span>
                                    <ul className={`dropdown ${dropDown ? "show" : ''}`}>
                                        <li className='nav-item'>
                                            <Link className='nav-link dropdown-link' to="/dashboard/buyRequests">Buy Requests</Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link className='nav-link dropdown-link' to="/dashboard/rentRequests">Rent Requests</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item user-item">
                                <button onClick={handleLogout} className="nav-link" to="/contact"><Logout /> Log Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserDropDown