import React from 'react'
import RequestsTable from '../RequestsTable/RequestsTable'

function BuyRequests() {
  return (
    <section className="buy-requests">
        <div className="container-fluid">
        <RequestsTable
        RequestsHeading='Buy Request' 
        />    
        </div>
    </section>
  )
}

export default BuyRequests