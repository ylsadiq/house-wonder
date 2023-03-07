import React from 'react'
import { Link } from 'react-router-dom';
import myListing from '../../../../../Assets/image/property_images/2139664963.png';
import people from '../../../../../Assets/icon/people_alt.svg';
import location from '../../../../../Assets/home/location icon.svg';

function Listings() {
  return (
    <Link to='/'>
        <div className="listing-card card">
              <img src={myListing} alt="" />
              <div className="property-tag">
                <span>panding</span>
                <div class="property-status">
                  <span>3 <img src={people} alt="" /></span>
                </div>
              </div>
              
          <div className="card-body" style={}>
                  <h1>Luxurious Apartment</h1>
                    <p><span className='listing-location'><img src={location} alt="" /></span> Gulshan 1,
                        Dhaka</p>

                    <div className='property-card-body'>
                    <ul className=''>
                        <li>4 Bed</li>
                        <li>5 Bath</li>
                        <li>2300 sqft.</li>
                    </ul>
                    </div>
                    
                    <h6>For Sale</h6>
                    <h2>Tk. 2,00,00,000</h2>
              </div>
        </div>
      </Link>
  )
}

export default Listings