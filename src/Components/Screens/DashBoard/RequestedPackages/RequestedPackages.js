import React from 'react';
import TableListing from '../Listing/TableListing';
import './RequestedPackages.css';

function RequestedPackages() {
  return (
    <section className="requested-packages">
        <div className="container-fluid">
        <h1 class="listing-title">Package Requests</h1>
        <div className="listing-items">
            <TableListing />
        </div>
        
        </div>
    </section>
  )
}

export default RequestedPackages