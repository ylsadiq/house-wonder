import { Link } from 'react-router-dom';
import property from '../../../Assets/home/property image 1.png';
import location from '../../../Assets/home/gps_fixed.svg';

import './MyListings.css';
import { useState } from 'react';

function MyListings() {
    const [viewMap, setViewMap] = useState(false);
    const handleMapProperty = () =>{
        setViewMap(viewPropeties => !viewPropeties)
    }
    return (
        <section className="mylistings-section">
            <div className="custom-container">
                <div className="mylisting_grid">
                    <div className="my-listing-details">
                        <h6 className="result-title">
                            <span>Search Results:</span> <span>“Gulshan 1”</span>
                            <span>( 8 Listings Available)</span>
                        </h6>
                        <div className="card-bg">
                            <Link to='/details' className="my-listing-items">
                                <div className="card items-img">
                                    <img src={property} alt="" />
                                    <div className="property-tag">
                                        <span>verified</span>
                                    </div>
                                </div>
                                <div className="items-details">
                                    <div className="propertyCardbody horizontal-prop-card">
                                        <h5 className="propertyId">ID: #BB635340</h5>
                                        <div className="horizontalGps">
                                            <h1>Luxurious Apartment</h1>
                                            <div>
                                                <img src={location} alt="" />
                                            </div>
                                        </div>
                                        <p><img src={location} alt="" />Gulshan 1, Dhaka</p>

                                        <ul>
                                            <li>4 Bed</li>
                                            <li>5 Bath</li>
                                            <li>2300 sqft.</li>
                                        </ul>

                                        <h6>For Sale</h6>
                                        <h2>Tk. 2,00,00,000</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="card-bg">
                            <Link to='/details'  className="my-listing-items">
                                <div className="card items-img">
                                    <img src={property} alt="" />
                                    <div className="property-tag">
                                        <span>verified</span>
                                    </div>
                                </div>
                                <div className="items-details">
                                    <div className="propertyCardbody horizontal-prop-card">
                                        <h5 className="propertyId">ID: #BB635340</h5>
                                        <div className="horizontalGps">
                                            <h1>Luxurious Apartment</h1>
                                            <div>
                                                <img src={location} alt="" />
                                            </div>
                                        </div>
                                        <p><img src={location} alt="" />Gulshan 1, Dhaka</p>

                                        <ul>
                                            <li>4 Bed</li>
                                            <li>5 Bath</li>
                                            <li>2300 sqft.</li>
                                        </ul>

                                        <h6>For Sale</h6>
                                        <h2>Tk. 2,00,00,000</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="card-bg">
                            <Link to='/details'  className="my-listing-items">
                                <div className="card items-img">
                                    <img src={property} alt="" />
                                    <div className="property-tag">
                                        <span>verified</span>
                                    </div>
                                </div>
                                <div className="items-details">
                                    <div className="propertyCardbody horizontal-prop-card">
                                        <h5 className="propertyId">ID: #BB635340</h5>
                                        <div className="horizontalGps">
                                            <h1>Luxurious Apartment</h1>
                                            <div>
                                                <img src={location} alt="" />
                                            </div>
                                        </div>
                                        <p>
                                            <img src={location} alt="" />
                                            Gulshan 1, Dhaka</p>

                                        <ul>
                                            <li>4 Bed</li>
                                            <li>5 Bath</li>
                                            <li>2300 sqft.</li>
                                        </ul>

                                        <h6>For Sale</h6>
                                        <h2>Tk. 2,00,00,000</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                    <div className="my-listing-map">
                        {/* <iframe src="" title="description"></iframe> */}
                        <div className="map_wrapper">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.231854394116!2d90.4003407266515!3d23.778885856366898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1679225785118!5m2!1sen!2sbd" 
                            allowFullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            title="iframe"
                            ></iframe>
                        </div>
                    </div>
                    <div className="list_view_btn">
                        <button className="btn btn-dark">Map View</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyListings