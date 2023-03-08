import React from 'react';
import search from '../../../../../Assets/home/search icon.svg';
import filter from '../../../../../Assets/home/filter icon.svg';

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
        <div className="property_search_box">
                            <input type="email" className='search_input' placeholder='Search for city, area, ZIP...' />
                            <img src={search} alt="" />
                        </div>
    </div>
    </div>
    <div className="text-end">
        <button type="button" className="btn">
            <img src={filter} alt="" />
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