import React from 'react'
import './MyListingForm.css'
// import SecondForm from './SecondForm/SecondForm'
import ThirdForm from './ThirdForm/ThirdForm'

function MyListingForm() {
  return (
    <>
    
    
    <div className="my-listing-form">
        <div className="container-fluid">
            <div className="my-listing-step">
            <div className="progress-count">
                <h6>step <span>1</span> of <span>2</span></h6>
            </div>
            <div className="progress form-progress mb-4">
                <div className="progress-bar form-prog"></div>
            </div>
            <div className="form-title mt-2">
                Hi, <span>test11</span>
                <span className='second-line'>Let's start posting your property.</span>
            </div>
            </div>
            <div className="my-listing-map">
                <div className="post-map">

                </div>
            <h1 className='map-heading'>Find and pin the exact location of your property. This will make finding your property easier htmlFor the tenants. </h1>
            <form action="">

            <div className="ratio-box">
                <p className='owner-title'>I am the:</p>
                <div className="auth-form">
                <div className="auth-form-input">
                    <input type="radio" id="owner" name="mylisting" value="owner" />
                    <label htmlFor="owner">Owner</label>
                </div>
                <div className="auth-form-input">
                    <input type="radio" id="representative" name="mylisting" value="representative" />
                    <label htmlFor="representative">Representative</label>
                </div>
                <div className="auth-form-input">
                    <input type="radio" id="agent" name="mylisting" value="agent" />
                    <label htmlFor="agent">Agent</label>
                </div>
                </div>
            </div>
            <div className="ratio-box">
                <p className='owner-title'>I want to:</p>
                <div className="auth-form">
                <div className="auth-form-input">
                    <input type="radio" id="sell" name="mylisting" value="sell" />
                    <label htmlFor="sell">Sell</label>
                </div>
                <div className="auth-form-input">
                    <input type="radio" id="rent" name="mylisting" value="rent" />
                    <label htmlFor="rent">Rent</label>
                </div>
                </div>
            </div>
            <div className="grid-1">
            <div class="form-floating">
                <div class="form-floation mb-4 mt-2">
                    <input type="text" name="property_header" class="form-control" id='propHeader' placeholder="Property Header (Hint: Type your property tittle here)" />
                    <label htmlFor="propHeader">You can post your property under headers like "Shaptak Digonto: 3BHK flat htmlFor rent" or "Ready apartment htmlFor sale" etc.</label>
                </div>
            </div>
            </div>

            <div className="ratio-box">
                <p className='owner-title'>Property is:</p>
                <div className="auth-form">
                <div className="auth-form-input">
                    <input type="radio" id="readyToMove" name="mylisting" value="readyToMove" />
                    <label htmlFor="readyToMove">Ready to move</label>
                </div>

                <div className="auth-form-input">
                    <input type="radio" id="availableFrom" name="mylisting" value="availableFrom" />
                    <label htmlFor="availableFrom">Available from</label>
                </div>
                </div>
            </div>
            <div className="grid-2 mt-2">
                <div class="form-floation">
                    <select class="form-select" name="contact_regarding">
                    <option value="">Dhaka</option>
                    <option value="property">Property</option><option value="package">Package</option>
                    <option value="service">Service</option></select>
                    <label htmlFor="city">Property City</label>
                    </div>
                    
                    <div class="form-floation">
                    <select class="form-select" name="contact_regarding" id='city'>
                    <option value="">Select</option>
                    <option value="property">Property</option><option value="package">Package</option>
                    <option value="service">Service</option></select>
                    <label htmlFor="city">Property City</label>
                    </div>
                </div>

                <div className="grid-1">
            <div class="form-floating">
                <div class="form-floation mb-4 mt-2">
                    <input type="text" name="property_header" class="form-control" id='propStreetAdd' placeholder="Property Header" />
                    <label htmlFor="propStreetAdd">Property Street Address</label>
                </div>
            </div>
            </div>
            <div className="grid-2 mt-2">
                <div class="form-floation">
                <div class="form-floation mb-4 mt-2">
                    <input type="text" name="property_header" class="form-control" id='flat' placeholder="flat" />
                    <label htmlFor="flat">Flat/Unit No</label>
                </div>
                    </div>
                    
                    <div class="form-floation">
                    <div class="form-floation mb-4 mt-2">
                    <input type="text" name="property_header" class="form-control" id='house' placeholder="house" />
                    <label htmlFor="house">House No</label>
                </div>
                    </div>
                </div>
            <div className="grid-2 mt-2">
                <div class="form-floation">
                <div class="form-floation mb-4 mt-2">
                    <input type="text" name="property_header" class="form-control" id='road' placeholder="road" />
                    <label htmlFor="road">Road No</label>
                </div>
                    </div>
                    
                    <div class="form-floation">
                    <div class="form-floation mb-4 mt-2">
                    <input type="text" name="property_header" class="form-control" id='totalFloor' placeholder="totalFloor" />
                    <label htmlFor="totalFloor">Total Floor</label>
                </div>
                    </div>
                </div>
            <div className="grid-2 mt-2">
                <div class="form-floation">
                <div class="form-floation mb-4 mt-2">
                    <input type="text" name="property_header" class="form-control" id='yourFloor' placeholder="yourFloor" />
                    <label htmlFor="yourFloor">Your Floor</label>
                </div>
                    </div>
                    
                    <div class="form-floation">
                    <div class="form-floation mb-4 mt-2">
                    <input type="text" name="property_header" class="form-control" id='zipCode' placeholder="zipCode" />
                    <label htmlFor="zipCode">Zip Code</label>
                </div>
                    </div>
                </div>
            <div className="grid-1">
            <div class="form-floation mb-4 mt-2">
            <textarea class="form-control" 
            placeholder="Describe your property in a few lines. You can include the name of your house, the location it is situated in, number of bedrooms and bathrooms and other amenities."
            id="propDescr" name="property_description" spellCheck="false">
            </textarea>
            <label htmlFor="propDescr">Describe your property in a few lines. You can include the name of your house, the location it is situated in, number of bedrooms and bathrooms and other amenities.</label>
            </div>
            </div>
            
            <div className="grid-1">
            <div class="form-floation mb-4 mt-2">
            <input type="text" placeholder="Property Video Id(EX: IZXg_rDyZ18)" class="form-control" name="video_url" id="video_url" />
                <label htmlFor="video_url">Property Video Url</label>
            </div>
            </div>

            <div className="ratio-box">
                <p className='owner-title'>Contact Person</p>
                <div className="auth-form">
                <div className="auth-form-input">
                    <input type="radio" id="contactWithMe" name="mylisting" value="contactWithMe" />
                    <label htmlFor="contactWithMe">Contact With Me</label>
                </div>

                <div className="auth-form-input">
                    <input type="radio" id="assignPerson" name="mylisting" value="availableFrom" />
                    <label htmlFor="assignPerson">Assign Contact Person</label>
                </div>
                </div>
            </div>

            <div className="grid-2 mb-4 mt-2">
            <div class="form-floation">
            <input id="contactPersonName" name="property_contact_person_name" type="text" class="form-control required" placeholder="contactPersonName" />
            <label htmlFor="contactPersonName">Contact Person
                Name</label>
            </div>
            <div class="form-floation">
            <input id="contactPersonRel" name="property_contact_person_relation" type="text" class="form-control required" placeholder="contactPersonRel" />
            <label htmlFor="contactPersonRel">Contact Person
                Relation</label>
            </div>

            </div>
            <div className="grid-2 mb-4 mt-2">
            <div class="form-floation">
            <input id="contactPersonEmail" name="property_contact_person_email" type="text" class="form-control" placeholder="contactPersonRel" /> 
            <label htmlFor="contactPersonEmail">Contact Person Email</label>
            </div>
            <div class="form-floation">
            <input id="contactPersonPhone" name="property_contact_person_phone" type="text" class="form-control required" placeholder="contactPersonRel" />
            <label htmlFor="contactPersonPhone">Contact Person Phone</label>
            </div>

            </div>
            <div className="form-footer">
            <input type="submit" className='btn btn-dark mb-4 mt-2 listing-btn' value="Continue" />
            </div>
            </form>
            

            </div>
        </div>
    </div>

    {/* <SecondForm /> */}
    <ThirdForm />
    </>
  )
}

export default MyListingForm