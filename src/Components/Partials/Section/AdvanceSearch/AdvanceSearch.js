import React from 'react';
import './advanceSearch.css';
import search from '../../../../Assets/home/fi_search.svg';
import filter from '../../../../Assets/home/filter icon.svg'

function AdvanceSearch() {

  return (
    <section className="advance-search-sticky advance-search">
        <div className="container-fluid">
        <div className="advance-search-content">
            <div className="adv-search-box">
                <div className="advance-search-input">
                    <input type="text" className='form-control' placeholder="Search for city, area, ZIP..."/>
                    <img src={search} alt="" />
                </div>
                <div className="advance-search-btn">
                    <div className="advance-filter-btn">
                        <img src={filter} alt="" />
                        <button className='btn advance-btn'>search</button>
                    </div>
                </div>
            </div>
            <div className="advance-content">
            <div className="advance-selector">
            <h5 class="advance-search-title ">Advanced Search</h5>
                <div className="advance-select">
                <div class="form-floating formSearch">
                        <select id="lookingto" class="form-select searchSelect">
                            <option selected="">Buy</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="lookingto">Looking to</label>
                    </div>
                <div class="form-floating formSearch">
                        <select id="lookingto" class="form-select searchSelect">
                            <option selected="">All Cities</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="lookingto">Looking to</label>
                    </div>
                <div class="form-floating formSearch">
                        <select id="lookingto" class="form-select searchSelect">
                            <option selected="">All Areas</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="lookingto">Looking to</label>
                    </div>
                <div class="form-floating formSearch">
                        <select id="lookingto" class="form-select searchSelect">
                            <option selected="">All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="lookingto">Looking to</label>
                    </div>
                <div class="form-floating formSearch">
                        <select id="lookingto" class="form-select searchSelect">
                            <option selected="">All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="lookingto">Looking to</label>
                    </div>
                    <div class="form-floating">
                    <input type="text" class="form-input" id="minSqft" />
                    <label for="minSqft">Size (Min)- sqft.</label>
                    </div>

                    <div class="form-floating formSearch">
                        <select id="lookingto" class="form-select searchSelect">
                            <option selected="">All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="lookingto">Looking to</label>
                    </div>
                    <div class="form-floating formSearch">
                        <select id="lookingto" class="form-select searchSelect">
                            <option selected="">All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label for="lookingto">Looking to</label>
                    </div>

                    <div class="form-floating">
                    <input type="text" class="form-input" id="minSqft" />
                    <label for="minSqft">Size (Min)- sqft.</label>
                    </div>
                    <div class="form-floating">
                    <input type="text" class="form-input" id="minSqft" />
                    <label for="minSqft">Size (Min)- sqft.</label>
                    </div>

                    <div class="form-floating">
                    <input type="text" class="form-input" id="minSqft" />
                    <label for="minSqft">Size (Min)- sqft.</label>
                    </div>
                    <div class="form-floating">
                    <input type="text" class="form-input" id="minSqft" />
                    <label for="minSqft">Size (Min)- sqft.</label>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
        </div>
    </section>
    
  )
}

export default AdvanceSearch