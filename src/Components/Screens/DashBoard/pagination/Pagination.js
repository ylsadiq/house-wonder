import React from 'react';
import './Pagination.css'

function Pagination() {
  return (
    <div className="pagination-container">
        <div class="page_show">Showing 1 to 10 of 14 entries</div>
        <div className="pagination">
            <button className="prev page">Previous</button>
            <button className="page page-active">1</button>
            <button className="page">2</button>
            <button className="next page">Next</button>
        </div>
    </div>
  )
}

export default Pagination