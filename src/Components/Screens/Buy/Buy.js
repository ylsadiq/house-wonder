import React from 'react';
// import AdvanceSearch from '../../Partials/Section/AdvanceSearch/AdvanceSearch';
import MyListings from '../MyListings/MyListings';
import './Buy.css';

function Buy() {
  return (
    <section className="buy">
        <div className="container-fluid">
            {/* <AdvanceSearch /> */}
            <MyListings />
        </div>
    </section>
  )
}

export default Buy