import React from 'react';
import './MyListings.css';
import addIcon from '../../../../Assets/home/add.svg'
import Listings from './Listings/Listings';


function MyListings() {
  return (
    <section className="tab-content">
      <div className="tab-content-header">
      <h1 class="listing-title">My Listings</h1>
      <button className='btn'><span className='add-listing'><img src={addIcon} alt="" /></span> Add Listing</button>
      </div>

      <div className="my-listing-card">
        <Listings />
        <Listings />
        <Listings />
        <Listings />
        <Listings />
      </div>

    </section>
  )
}

export default MyListings