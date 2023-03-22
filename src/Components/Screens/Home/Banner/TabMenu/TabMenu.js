import React, { useState } from 'react';
import './TabMenu.css';
import searchIcon from '../../../../../Assets/home/search icon.svg';
import filter from '../../../../../Assets/home/filter icon.svg'
function TabMenu() {
    const [toggleState, setToggleState] = useState(1);
    const [expandFilter, setExpandFilter] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    const toggleExpandFilter = () => {
        setExpandFilter(pervState => !pervState)
    }

    return (
        <div className="property_filter_wrapper">
            <div className="property_filter_tabs">
                <button onClick={() => toggleTab(1)} className={toggleState === 1 ? 'property_filter_tab active' : 'property_filter_tab'}>Buy</button>
                <button onClick={() => toggleTab(2)} className={toggleState === 2 ? 'property_filter_tab active' : 'property_filter_tab'}>Rent</button>
            </div>

            {toggleState && <div className={`property_filter_search ${expandFilter ? 'expanded' : null}`}>
                <form className="flex_container">
                    <div className='flex_item'>
                        <div className="property_search_box">
                            <input type="email" className='search_input' placeholder='Search for city, area, ZIP...' />
                            <img src={searchIcon} alt="" />
                        </div>
                        <div className='search-expand-btn'>
                            <img src={filter} alt="" onClick={toggleExpandFilter} />
                        </div>
                    </div>
                    <div className='flex_item'>
                        <div className="filter_select_group">
                            <div className="grid_container form_search">
                                <div className='grid_item'>
                                    <label>Property Type</label>
                                    <select className='form_select'>
                                        <option value="">Select</option>
                                        <option value="">P type 1</option>
                                        <option value="">P type 2</option>
                                        <option value="">P type 3</option>
                                    </select>
                                </div>
                                <div className='grid_item'>
                                    <label>Property Sub-Type</label>
                                    <select className='form_select'>
                                        <option value="">Select</option>
                                        <option value="">P Sub-Type 1</option>
                                        <option value="">P Sub-Type 2</option>
                                        <option value="">P Sub-Type 3</option>
                                    </select>
                                </div>
                                <div className="grid_item">
                                    <img src={filter} alt="" onClick={toggleExpandFilter} />
                                    <button type='button' className='btn dark_btn search_btn'>search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>}
        </div>
    )
}

export default TabMenu