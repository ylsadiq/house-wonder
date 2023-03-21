import { useState } from 'react';
import './DashBoard.css';
import userlogo from '../../../Assets/image/profile/userImg.svg';
import arrowDown from '../../../Assets/home/arrowDown.svg';
import { Link, Outlet } from 'react-router-dom';
import { Avatar, Home, Logout, Packages, Password, Properties, Services } from './DashboardIcons/DashboardIcons';

function DashBoard() {
    const [dropDown, setDropDown] = useState(true);
    const handleDropdown = () => {
        setDropDown(!dropDown);

    }
    return (
        <section className="dashboard">
            <div className="container-fluid">
                <div className="dashboard-container">
                    <div className="dashboard-box">
                        <div className="dashboard-drawar">
                            <div class="postUser">
                                <img src={userlogo} alt="" />
                                <h3>Sheehan Rahman</h3>
                            </div>
                            <ul className='post-item'>
                                <li className='nav-item'><Link className='nav-link active' to="/dashboard"> <Home /> My Listings</Link></li>
                                <li className='nav-item'><Link className='nav-link' to="/dashboard/myprofile"><Avatar /> My Profile</Link></li>
                                <li className='nav-item'><Link className='nav-link' to="/dashboard/changePassword"><Password />Change Password</Link></li>
                                <li className='nav-item'><Link className='nav-link' to="/dashboard/RequestedPackages"> <Packages /> Requested Packages</Link></li>
                                <li className='nav-item'><Link className='nav-link' to=""><Services /> Requested Services</Link></li>
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
                                <li className='nav-item'><Link className='nav-link' to=""><Logout /> Log Out </Link></li>
                            </ul>
                        </div>
                        <div className="dashboard-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashBoard