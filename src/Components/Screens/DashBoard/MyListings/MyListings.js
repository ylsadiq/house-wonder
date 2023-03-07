import React from 'react';
import './MyListings.css';
import addIcon from '../../../../Assets/home/add.svg'
import Listings from './Listings/Listings';
import { Link } from 'react-router-dom';


function MyListings() {
  // const [addForm, setAddForm] = useState(false);
  // const handleSteps = (e) =>{
  //   setAddForm((addForm) => !addForm);
  // }
  return (
    <section className="tab-content">
      <div className="container-fluid">
        <div className="listings-content">
      <div className="tab-content-header">
      <h1 class="listing-title">My Listings</h1>
      <button className='btn'>
        <span className='add-listing'><img src={addIcon} alt="" /></span>
        <span className='add-text'><Link to={`/dashboard/mylisting-form`}>Add Listing</Link></span></button>
      </div>

      <div className="my-listing-card">
        <Listings />
        <Listings />
        <Listings />
        <Listings />
        <Listings />
      </div>
      </div>
      </div>
    </section>
  )
}

export default MyListings