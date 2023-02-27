import React from 'react';
import './Footer.css';
import whiteLogo from '../../../../Assets/home/bastu logo white.svg';
import telephone from '../../../../Assets/home/phone-alt-solid 1.svg';
import address from '../../../../Assets/home/envelope-open-text-solid 1.svg';
import location from '../../../../Assets/home/location icon.svg';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks/SocialLinks';

function Footer() {
  return (
    <section className="footer">
        <div className="container-fluid">
            <div className="custom-container">
                <div className="footer-content">
                <div className="social-home">
                    <Link to="/"><img src={whiteLogo} alt="logo" /></Link>
                    <SocialLinks />
                    {/* <div className="social-link">
                        <a href="s.com">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="s.com">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="s.com">
                            <img src={twitter} alt="" />
                        </a>
                    </div> */}
                </div>
                <div className="footer-menu">
                <h6>customer service</h6>
                <ul>
                    <li><Link className='footer-link' to="/">FAQs</Link></li>
                    <li><Link className='footer-link' to="/">Paument</Link></li>
                    <li><Link className='footer-link' to="/">Shipping</Link></li>
                </ul>
                </div>
                <div className="footer-menu">
                <h6>company</h6>
                <ul>
                    <li><Link className='footer-link' to="/">About Us</Link></li>
                    <li><Link className='footer-link' to="/">Careers</Link></li>
                    <li><Link className='footer-link' to="/">Terms & Policies</Link></li>
                </ul>
                </div>
                <div className="footer-menu">
                <h6>CONTACT INFO</h6>
                <ul>
                    <li className='footer-link'><img className='footer-icon' src={telephone} alt="" />+8809613823343,</li>
                    <li className='footer-link number'><span className='footer-number'>+8801678133343</span></li>
                    <li className='footer-link'><img className='footer-icon' src={address} alt="" /> info@bastu.com.bd</li>
                    <li className='footer-link'><img className='footer-icon' src={location} alt="" /> Dhanmondi, Dhaka-1209</li>
                </ul>
                </div>
                </div>
                <div className="copyright-content">
                <div className="copyright">
                        ©
                        Copyright 2020 - 2021
                        <span className="dot"></span>
                        All rights reserved by Bastu
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Footer