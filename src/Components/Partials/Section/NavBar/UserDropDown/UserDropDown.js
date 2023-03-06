import React, { useState } from 'react';
import './UserDropDown.css';
import userImg from '../../../../../Assets/image/profile/userImg.svg';
import arrowDown from '../../../../../Assets/home/arrowDown.svg';

import { Link } from 'react-router-dom';
import { Avatar, Logout } from '../../../../Screens/DashBoard/DashboardIcons/DashboardIcons';

function UserDropDown() {
    const [arrow, setArrow] = useState(false);
    const handleLogin = () =>{
        setArrow(!arrow)
    }
  return (
    <section className="user-dropdown">
        <div className="container-fluid">
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
            <li className="nav-item user-item"> <Avatar /> <Link className="nav-link" to="/service"> Service</Link></li>
            <li className="nav-item user-item"> <Logout /> <Link className="nav-link" to="/contact">contact</Link></li>
            </ul>
            </div>
        </div>
    </section>
  )
}

export default UserDropDown