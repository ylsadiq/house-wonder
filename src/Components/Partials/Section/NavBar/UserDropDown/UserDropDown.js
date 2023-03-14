import React, { useState } from 'react';
import './UserDropDown.css';
import userImg from '../../../../../Assets/image/profile/userImg.svg';
import arrowDown from '../../../../../Assets/home/arrowDown.svg';

import { Link } from 'react-router-dom';
import { Avatar, Logout } from '../../../../Screens/DashBoard/DashboardIcons/DashboardIcons';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../../../../../Redux/Features/Auth/authSlice';

function UserDropDown() {
    const [arrow, setArrow] = useState(false);
    const { consumer } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const handleLogin = () =>{
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
            <li className="nav-item user-item"> <span><Avatar /> <Link className="nav-link" to="/dashboard">My Profile</Link></span></li>
            <li  className="nav-item user-item"> <span><Logout /> <button onClick={handleLogout} className="nav-link" to="/contact">Log Out</button></span></li>
            </ul>
            </div>
            </div>
        </div>
    </section>
  )
}

export default UserDropDown