import React from 'react';
import './LookingProperty.css';
import lookingFor from '../../../Assets/home/what are you looking for-image.png'

function LookingProperty() {
  return (
    <section className="Looking-property">
        <div className="container-fluid">
            <div className="custom-container">
            <div className="looking-content">
                <div className="looking-content-img">
                    <img src={lookingFor} alt="" />
                </div>
                <div className="looking-content-details">
                    <h3>What are you looking for?</h3>
                    <p>Bastu helps you sell your home faster and for more money by covering the cost of home
                        improvement services — no upfront fees or interest charged.</p>
                    <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#postReqModal">
                        Postyour requirement
                    </button>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default LookingProperty