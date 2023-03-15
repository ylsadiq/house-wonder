import React from 'react';
import { Link } from 'react-router-dom';
import './MyListings.css';
import property from '../../../Assets/home/property image 1.png';
import location from '../../../Assets/home/gps_fixed.svg'

function MyListings() {
  return (
    <section className="search-contentiner">
        <div className="mylistings-section">
        <div className="my-listing-details">
        <h6 className="result-title">
        <span>Search Results:</span> <span>“Gulshan 1”</span> 
        <span>( 8 Listings Available)</span>
        </h6>
        <div className="card-bg">
        <Link className="my-listing-items">
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
        <Link className="my-listing-items">
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
        <Link className="my-listing-items">
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
        <iframe src="" title="description"></iframe>
        </div>
        </div>
    </section>
  )
}

export default MyListings