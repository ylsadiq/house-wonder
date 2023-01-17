import React from 'react';
import './MyListings.css';
import addIcon from '../../../../Assets/home/add.svg'

function MyListings() {
  return (
    <section className="tab-content">
      <div className="tab-content-header">
      <h1 class="listing-title">My Listings</h1>
      <button className='btn'><span className='add-listing'><img src={addIcon} alt="" /></span> Add Listing</button>
      </div>
    </section>
  )
}

export default MyListings