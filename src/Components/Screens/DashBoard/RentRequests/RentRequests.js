import React from 'react'
import RequestsTable from '../RequestsTable/RequestsTable'

function RentRequests() {
  return (
    <section className="rent-requests">
        <div className="container-fluid">
        <RequestsTable
        RequestsHeading='Rent Requests' 
        />    
        </div>
    </section>
  )
}

export default RentRequests