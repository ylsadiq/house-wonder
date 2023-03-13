import React, { useState } from 'react';
import './SecondForm.css'

function SecondForm() {
    const [count, setCount] = useState(1);
    const [check, setCheck] = useState(false);

    const handleIncreaseCounter = () => {
        setCount((prev) => prev + 1)
    }

    const handleDecreaseCounter = () => {
        if (count !== 1) {
            setCount((prev) => prev - 1);
        }
    }
    const handleCheckBox = () => {
        setCheck((prevCheck) => !prevCheck)
    }

    return (
        <div className="my-listing-second-form">
            <div className="container-fluid">
                <div className="my-listing-step">
                    <div className="progress-count">
                        <h6>step <span>2</span> of <span>4</span></h6>
                    </div>
                    <div className="progress form-progress">
                        <div className="progress-bar-second form-prog"></div>
                    </div>
                    <div className="progress-count margin_top">
                        <h1 className='form-title'>Great! Now tell us more<span className='second-line'>about your property!</span></h1>
                    </div>
                </div>

                <div className="grid-2 mt-2">
                    <div class="form-floation">
                        <select class="form-select" name="contact_regarding" propertyType="propertyType">
                            <option value="">Select Property Type</option>
                            <option value="property">Property</option><option value="package">Package</option>
                            <option value="service">Service</option></select>
                        <label htmlFor="propertyType">Property Type</label>
                    </div>

                    <div class="form-floation">
                        <select class="form-select" name="contact_regarding" id='property_sub_type_id'>
                            <option value="">Select Property Sub Type</option>
                            <option value="property">Property</option><option value="package">Package</option>
                            <option value="service">Service</option></select>
                        <label htmlFor="property_sub_type_id">Property Sub Type</label>
                    </div>
                </div>
                <div className="grid-1 mb-4">
                    <h5 className="feature-title margin_top">Property Features</h5>

                    <div className="property-form">
                        <div className="grid-2">

                            <div className='check-box'>
                                <input type="checkbox" className='form-check-input' id="scales"
                                    onChange={handleCheckBox}
                                    name="scales" value={check} />
                                <label htmlFor="scales" className='form-check-label'>Kitchen</label>
                            </div>

                            <div className={`${check ? 'active' : 'authFormInput'}`}>
                                <div className="featuresInpGroup propFeature1">
                                    <button className="decBtn" type="button" onClick={handleDecreaseCounter}><img src="https://bastu.com.bd/beta-twelve/frontend/new_ui/assets/images/icon/remove.svg" alt="" /></button>
                                    <input type="text" value={count} className='counter' name="property_info[0][property_info_quantity]" />

                                    <button class="IncBtn" type="button" onClick={handleIncreaseCounter}><img src="https://bastu.com.bd/beta-twelve/frontend/new_ui/assets/images/icon/add.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>

                        <div className="grid-1">
                            <div className='check-box'>
                                <input type="checkbox" className='form-check-input' id="horns" name="horns" />
                                <label htmlFor="horns" onChange={handleCheckBox}
                                    className='form-check-label'>Bath</label>
                            </div>
                        </div>
                        <div className="grid-1">
                            <div className='check-box'>
                                <input type="checkbox" className='form-check-input' id="horns" name="horns" />
                                <label htmlFor="horns" onChange={handleCheckBox}
                                    className='form-check-label'>Floor Size</label>
                                <div class="floor_size">
                                    <div class="form-floation">
                                        <div class="form-floation mb-4 mt-2">
                                            <input type="text" name="property_header" class="form-control" id='yourFloor' placeholder="Area(Shift)" />
                                            <label htmlFor="yourFloor">Area(Shift)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="grid-1">
                            <div className='check-box'>
                                <input type="checkbox" className='form-check-input' id="horns" name="horns" />
                                <label htmlFor="horns" onChange={handleCheckBox}
                                    className='form-check-label'>BedRoom</label>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="grid-1">
                    <h5 class="feature-title margin_top">Property Amenities</h5>

                    <div className="property-form">
                        <div className="grid-1">
                            <div className='check-box'>
                                <input type="checkbox" className='form-check-input' id="horns" name="horns" />
                                <label htmlFor="horns" onChange={handleCheckBox}
                                    className='form-check-label'>Garden</label>
                            </div>
                        </div>
                        <div className="grid-1">
                            <div className='check-box'>
                                <input type="checkbox" className='form-check-input' id="horns" name="horns" />
                                <label htmlFor="horns" onChange={handleCheckBox}
                                    className='form-check-label'>Pool</label>
                            </div>
                        </div>
                        <div className="grid-1">
                            <div className='check-box'>
                                <input type="checkbox" className='form-check-input' id="horns" name="horns" />
                                <label htmlFor="horns" onChange={handleCheckBox}
                                    className='form-check-label'>Gym</label>
                            </div>
                        </div>
                        <div className="grid-1">
                            <div className='check-box'>
                                <input type="checkbox" className='form-check-input' id="horns" name="horns" />
                                <label htmlFor="horns" onChange={handleCheckBox}
                                    className='form-check-label'>Parking Spot</label>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="second-form">
                    <button className='btn btn-outline-dark listing-btn'>Go back</button>
                    <button className='btn btn-dark listing-btn'>continue</button>
                </div>
            </div>
        </div>
    )
}

export default SecondForm