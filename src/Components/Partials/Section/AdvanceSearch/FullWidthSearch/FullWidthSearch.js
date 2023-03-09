import React, { useState } from 'react';
import search from '../../../../../Assets/home/search icon.svg';
import filter from '../../../../../Assets/home/filter icon.svg';
import FullFilter from './FullFilter';
import './FullWidthSearch.css'

function FullWidthSearch() {
  const [expandFilter, setExpandFilter] = useState(false);

    const toggleExpandFilter = () => {
        setExpandFilter(pervState => !pervState)
    }
  return (
    <div className="search-container">
      <section className="advacneSearchSticky lg-advance-search">
      <form action="https://bastu.com.bd/beta-thirteen/property/advance/search" method="get">
        <div className="advanceSearchCont">
        <div class="search-box">
            <div className="full-advance-search-content">
                <div className="rent-search">
        <div className="advance-input">
        <div className="property_search_box">
              <input type="email" className='search_input' placeholder='Search for city, area, ZIP...' />
              <img src={search} alt="" />
        </div>
    </div>
    </div>
    <div className="text-end">
        <button onClick={toggleExpandFilter} type="button" className="btn">
            <img src={filter} alt="" />
            </button>
        <button type="submit" className="btn btn-dark full-search-btn">search</button>
    </div>
    </div>
    
    </div>
    </div>

        {expandFilter && <FullFilter />}
        </form>
                        
    </section>
    </div>
  )
}

export default FullWidthSearch