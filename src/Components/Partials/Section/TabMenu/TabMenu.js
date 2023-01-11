import React from 'react';
import './TabMenu.css';
import searchIcon from '../../../../Assets/home/search icon.svg';
import filter from '../../../../Assets/home/filter icon.svg'
function TabMenu() {
  return (
    <div className="tab-container">
        <div className="tab-button">
            <button className='tabs tab-active'>Buy</button>
            <button className='tabs'>Rent</button>
        </div>

        <div className="search-box">
        <form action="">
        <div className="tab-details">
            <div className="tab-input">
                <input type="email" className='search-input' placeholder='Search for city, area, ZIP...'/>
                <img src={searchIcon} alt="" />
            </div>
            <div className="tab-button">
                <img src={filter} alt="" />
                <button className='btn dark-btn search-btn'>search</button>
            </div>
        </div>
        </form>
        </div>
        
    </div>
  )
}

export default TabMenu