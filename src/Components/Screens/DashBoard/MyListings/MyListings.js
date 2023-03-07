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
      <button className='btn btn-outline btn-border'>
        <span className='add-listing'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M12 8V16" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M8 12H16" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
        <span className='add-text'><Link to={`/dashboard/mylisting-form`}>Add Listing</Link></span>
        </button>
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