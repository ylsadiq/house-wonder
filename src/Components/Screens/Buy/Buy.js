import React from 'react';
import FullWidthSearch from '../../Partials/Section/AdvanceSearch/FullWidthSearch/FullWidthSearch';
import MyListings from '../MyListings/MyListings';
import './Buy.css';

function Buy() {
  return (
    <section className="buy">
        <div className="container-fluid">
            <FullWidthSearch />
            <MyListings />
        </div>
    </section>
  )
}

export default Buy