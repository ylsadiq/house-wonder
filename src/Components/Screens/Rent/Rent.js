import React from 'react'
import './Rent.css';
import FullWidthSearch from '../../Partials/Section/AdvanceSearch/FullWidthSearch/FullWidthSearch';

function Rent() {
  return (
        <>
        <FullWidthSearch />
    <div className="rent-content">
    <div className="container-fluid">
        <div className="package-container">
        <div className="rent-container">
            <div className="rent-details-left">
                <h2><span> 0 Listings Available</span></h2>
            </div>
            <div className="rent-details-right">
                <div className="rent-map"></div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Rent