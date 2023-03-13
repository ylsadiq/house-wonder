import React, { useState } from 'react';
import filterClose from '../../../../../Assets/home/fi_plus-circle.svg';
import './FullFilter.css'

function FullFilter() {

  return (
        
            <div className="advance-search full-search">
            <h5 class="advance-search-title">Advanced Search</h5>
            <div className="advance-search-filter">
            <div class="user-info-form grid-6">
            <div class="form-floation">
                <select class="form-select">
                    <option selected="">Buy</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <label htmlFor="">Looking to</label>
            </div>
                            <div class="form-floation">
                                <select class="form-select">
                                    <option selected="">All Cities</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label htmlFor="City">Preferred Area</label>
                            </div>
                            <div class="form-floation">
                                <select class="form-select">
                                    <option selected="">All Areas</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label htmlFor="Area">Preferred Area</label>
                            </div>
                            <div class="form-floation">
                                <select class="form-select">
                                    <option selected="">All</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label htmlFor="Area">Property Type</label>
                            </div>
                            <div class="form-floation">
                                <select class="form-select">
                                    <option selected="">All</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label htmlFor="Area">Property Sub-Type</label>
                            </div>

                            <div class="form-floation">
                                <input type="text" class="form-control" placeholder="Property ID" value="" />
                                <label htmlFor="lastName">Property ID</label>
                            </div>

                        <div class="form-floation">
                                <select class="form-select">
                                    <option selected="">All</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label htmlFor="Area">Bedroooms</label>
                            </div>
                            <div class="form-floation">
                                <select class="form-select">
                                    <option selected="">All</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <label htmlFor="Area">Bathrooms</label>
                            </div>

                            <div class="form-floation">
                                <input type="text" class="form-control" placeholder="minSqft" value="" />
                                <label htmlFor="lastName">Size (Min)- sqft.</label>
                            </div>
                            <div class="form-floation">
                                <input type="text" class="form-control" placeholder="minSqft" value="" />
                                <label htmlFor="lastName">Size (Max)- sqft.</label>
                            </div>
                            <div class="form-floation">
                                <input type="text" class="form-control" placeholder="minSqft" value="" />
                                <label htmlFor="lastName">Price (Min)- BDT</label>
                            </div>
                            <div class="form-floation">
                                <input type="text" class="form-control" placeholder="minSqft" value="" />
                                <label htmlFor="lastName">Price (Max)- BDT</label>
                            </div>
                            
                    </div>
                    <div className="full-search-close-btn">
                                <button type="button">
                                    <div className="close-img">
                                    <img src={filterClose} alt="" />
                                    </div>
                                    </button>
                                <button type="submit" className="clear-btn">clear filters</button>
                            </div>
            </div>
            </div>
  )
}

export default FullFilter