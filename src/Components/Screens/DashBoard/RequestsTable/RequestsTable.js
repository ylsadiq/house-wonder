import React from 'react'
import TableListing from '../Listing/TableListing'

function RequestsTable({RequestsHeading}) {
  return (
    <div>
        {RequestsHeading && <h1 class="listing-title">{RequestsHeading}</h1>}
        <div className="listing-items">
            <TableListing />
        </div>
    </div>
  )
}

export default RequestsTable