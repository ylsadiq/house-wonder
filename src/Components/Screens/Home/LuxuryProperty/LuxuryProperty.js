import React, { useState } from 'react';
import './LuxuryProperty.css';
import location from '../../../../Assets/home/location icon.svg';
import luxuryImage from '../../../../Assets/home/luxury image.png'
import Modal from '../../../Partials/Section/Modal/Modal';
import BuyRequest from '../../BuyRequest/BuyRequest';

function LuxuryProperty() {
    const [showModal, setShowModal] = useState(false);
    const [Buyrequest, setBuyRequest] = useState(false);
    function handleClose() {
        setShowModal(false);
        setBuyRequest(false);
    }
  return (
    <div className="Luxury-property">
        <div className="container-fluid">
            <div className="custom-container">
            <h1 className='section-title'>
            Property That Defines <span className='luxury'>A New Dimension Of Luxury</span>
            </h1>
            <div className="luxury-content">
                <div className="luxury-details">
                <div className="property-card-body luxury-box">
                        <h1>Luxurious Apartment</h1>
                        <p><img src={location} alt="" />Gulshan 1, Dhaka</p>

                        <ul>
                            <li>4 Bed</li>
                            <li>5 Bath</li>
                            <li>2300 sqft.</li>
                        </ul>

                        <p className="description">
                            Massive windows, coffered ceilings, built-in bar, chefs kitchen with double oven and 5
                            burner gas range, custom vent hood, site-finished hardwoods throughout the entire home
                            except for 3 bedrooms, en-suite bathrooms in every bedroom.
                        </p>

                        <div className="luxury-footer">
                            <div className='luxury-items'>
                                <h6>For Sale</h6>
                                <h2>Tk. 2,00,00,000</h2>
                            </div>
                            <div className='buy-now'>
                                <button className="btn btn-dark" onClick={() => {
                                    setShowModal(true)
                                    setBuyRequest(true)
                                }}>buy now</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="luxury-img">
                    <img src={luxuryImage} alt="" />
                </div>
            </div>
            {showModal &&
                <Modal
                    handleClose={handleClose}
                    modalHeading='Buy Request'
                >
                    {Buyrequest &&
                        <BuyRequest
                            handleClose={handleClose}
                        />
                    }
                </Modal>
            }
            </div>
        </div>
    </div>  
    )
}

export default LuxuryProperty