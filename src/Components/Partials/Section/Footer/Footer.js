import React from 'react';
import './Footer.css';
import whiteLogo from '../../../../Assets/home/bastu logo white.svg';
import facebook from '../../../../Assets/home/002-facebook.svg';
import instagram from '../../../../Assets/home/001-instagram.svg';
import twitter from '../../../../Assets/home/003-twitter.svg';
import telephone from '../../../../Assets/home/phone-alt-solid 1.svg';
import address from '../../../../Assets/home/envelope-open-text-solid 1.svg';
import location from '../../../../Assets/home/location icon.svg';

function Footer() {
  return (
    <section className="footer">
        <div className="container-fluid">
            <div className="custom-container">
                <div className="footer-content">
                <div className="social-home">
                    <a href=""><img src={whiteLogo} alt="" /></a>
                    <div className="social-link">
                        <a href="#">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="#">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="" />
                        </a>
                    </div>
                </div>
                <div className="footer-menu">
                <h6>customer service</h6>
                <ul>
                    <li><a className='footer-link' href="">FAQs</a></li>
                    <li><a className='footer-link' href="">Paument</a></li>
                    <li><a className='footer-link' href="">Shipping</a></li>
                </ul>
                </div>
                <div className="footer-menu">
                <h6>company</h6>
                <ul>
                    <li><a className='footer-link' href="">About Us</a></li>
                    <li><a className='footer-link' href="">Careers</a></li>
                    <li><a className='footer-link' href="">Terms & Policies</a></li>
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