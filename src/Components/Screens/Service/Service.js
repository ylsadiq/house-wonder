import React from 'react';
import './Services.css';
import service from '../../../Assets/service-image/rental-furniture.png';
import post from '../../../Assets/image/service_logo/1621940851.svg';
import post2 from '../../../Assets/image/service_logo/820407232.svg';
import post3 from '../../../Assets/image/service_logo/1593538309.svg';
import post4 from '../../../Assets/image/service_logo/1119305927.svg';
import post5 from '../../../Assets/image/service_logo/623050345.svg';
import post6 from '../../../Assets/image/service_logo/515605017.svg';
import post7 from '../../../Assets/image/service_logo/95148178.svg';
import post8 from '../../../Assets/image/service_logo/1424214789.svg';
import { Link } from 'react-router-dom';
import Property from './Property/Property';

function Service() {
  return (
    <>
    <section className="services pt">
        <div className="container-fluid">
            <div className="services-container">
                <div className="services-items">
                    <div className="services-details">
                    <h3>Introducing</h3>
                    <h1>Property Services</h1>
                    <p class="one-para">One-stop destination for all your property-related needs</p>
                    <div className="service-box">

                    <div className="service-list">
                        <ul>
                            <li className=''><Link to="" className="service-pack"><span className='service-img'><img src={post} alt="" /></span>Post Your Property</Link></li>
                        </ul>
                    </div>
                    <div className="service-list">
                        <ul>
                            <li className=''><Link to="" className="service-pack"><span className='service-img'><img src={post5} alt="" /></span>Advertise Your Property</Link></li>
                        </ul>
                    </div>
                    <div className="service-list">
                        <ul>
                            <li className=''><Link to="" className="service-pack"><span className='service-img'><img src={post2} alt="" /></span>Home repair and refurbishment</Link></li>
                        </ul>
                    </div>
                    <div className="service-list">
                        <ul>
                            <li className=''><Link to="" className="service-pack"><span className='service-img'><img src={post6} alt="" /></span>Property management</Link></li>
                        </ul>
                    </div>
                    <div className="service-list">
                        <ul>
                            <li className=''><Link to="" className="service-pack"><span className='service-img'><img src={post3} alt="" /></span>Real estate/New developments</Link></li>
                        </ul>
                    </div>
                    <div className="service-list">
                        <ul>
                            <li className=''><Link to="" className="service-pack"><span className='service-img'><img src={post7} alt="" /></span>Legal services</Link></li>
                        </ul>
                    </div>
                    <div className="service-list">
                        <ul>
                            <li className=''><Link to="" className="service-pack"><span className='service-img'><img src={post4} alt="" /></span>Home Loan</Link></li>
                        </ul>
                    </div>
                    <div className="service-list">
                        <ul>
                            <li className=''><Link to="" className="service-pack"><span className='service-img'><img src={post8} alt="" /></span>Pack and move</Link></li>
                        </ul>
                    </div>

                    </div>
                    
                    <p class="service-property-details">You can post your property on our website for free
                        or
                        you can subscribe to one of our packages to sell/rent your property faster.
                    </p>
                    </div>
                    
                    <div className="services-img">
                        <img src={service} alt="" />
                    </div>
                   
                </div>
        <Property />
            </div>
        </div>
    </section>
    </>
  )
}

export default Service