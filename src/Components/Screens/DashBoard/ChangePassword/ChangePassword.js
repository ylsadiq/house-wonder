import React from 'react';
import './ChangePassword.css'

function ChangePassword() {
  return (
    <section className="profile-password">
        <div className="container-fluid">
        <h1 class="listing-title">My Profile</h1>

        <div className="users-password-form grid-1">
        <div class="form-floation mt-2">
            <input type="text" class="form-control" placeholder="currentPass" />
            <label htmlFor="currentPass">Current Password</label>
        </div>
        <div class="form-floation mt-2">
            <input type="text" class="form-control" placeholder="newpass" />
            <label htmlFor="newpass">Current Password</label>
        </div>
        <div class="form-floation mt-2">
            <input type="text" class="form-control" placeholder="confirmPass" />
            <label htmlFor="confirmPass">Current Password</label>
        </div>
        </div>
        <div className="my-profile-footer mt-2">
                <button className="btn btn-outline-dark">cancle</button>
                <button className="btn btn-dark">save Password</button>
              </div>
        </div>
    </section>
  )
}

export default ChangePassword