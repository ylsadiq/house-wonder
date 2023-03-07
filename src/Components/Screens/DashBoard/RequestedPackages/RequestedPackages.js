import React from 'react';
import TableListing from '../Listing/TableListing';
import RequestsTable from '../RequestsTable/RequestsTable';
import './RequestedPackages.css';

function RequestedPackages({RequestsHeading}) {
  return (
    <section className="requested-packages">
        <div className="container-fluid">
        <RequestsTable
        RequestsHeading='Package Requests' 
        />    
        </div>
    </section>
  )
}

export default RequestedPackages