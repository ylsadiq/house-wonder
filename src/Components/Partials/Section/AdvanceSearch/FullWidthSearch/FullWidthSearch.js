import React from 'react';
import search from '../../../../../Assets/home/search icon.svg';

function FullWidthSearch() {
  return (
    <div className="search-container">
      <section className="advacneSearchSticky lg-advance-search">
      <form action="https://bastu.com.bd/beta-thirteen/property/advance/search" method="get">
        <div className="advanceSearchCont">
        <div class="search-box">
            <div className="advance-search-content">
                <div className="rent-search">
        <div className="advance-input">
            <input className='form-control' type="text" placeholder="Search for city, area, ZIP..." />
            <img src={search} alt="" />
    </div>
    </div>
    <div className="text-end">
        <button type="button" className="btn">
            <img src="https://bastu.com.bd/beta-thirteen/frontend/new_ui/assets/images/home/filter icon.svg" alt="" />
            </button>
        <button type="submit" className="btn btn-dark">search</button>
    </div>
    </div>
    
    </div>
    </div>
        </form>
                        
    </section>
    </div>
  )
}

export default FullWidthSearch