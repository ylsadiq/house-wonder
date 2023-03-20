import React from 'react';
import './MyProfile.css';
import userProfile from '../../../../Assets/image/profile/userImg.svg'

function MyProfile() {
  return (
    <section className="my-profile">
      <div className="container-fluid">
        <h1 className='listing-title'>My Profile</h1>
        <div className="post-user-info">
          <div className="post-user-img">
            <img src={userProfile} alt="" />
          </div>
          <div className="post-btn">
            <div className="btn btn-dark">Change</div>
            {/* <div className="btn">Remove</div> */}
          </div>

        </div>
        <form action="">
          <div className="user-info-form grid-2">
            <div class="form-floation">
              <input type="text" class="form-control" placeholder="name" />
              <label>Name</label>
            </div>

            <div class="form-floation">
              <input type="text" class="form-control" placeholder="primaryPhone" disabled value='098765' />
              <label>Phone Number</label>
            </div>

            <div class="form-floation">
              <input type="email" class="form-control" placeholder="Email" />
              <label htmlFor="email">Email Address</label>
            </div>

            <div class="form-floation">
              <select class="form-select">
                <option value="0" hidden>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
              </select>
              <label>Gender</label>
            </div>

            <div class="form-floation">
              <input type="text" class="form-control" placeholder="primaryPhone" />
              <label>Secondary Phone Number</label>
            </div>

            <div class="form-floation">
              <input type="text" class="form-control" placeholder="streetAddress" />
              <label>City</label>
            </div>

            <div class="form-floation mt-2">
              <textarea class="form-control" placeholder="aboutSelft"></textarea>
              <label htmlFor="aboutSelft">Short Note About Yourself</label>
            </div>
          </div>

          <div className="my-profile-footer mt-2">
            <button className="btn btn-outline-dark">cancel</button>
            <button className="btn btn-dark">save Profile</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default MyProfile