import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CONSUMER_CONSULTENSIS_API, PROPERTY_CATEGORIES_API, PROPERTY_CITY_AREAS_API } from '../../../../../Utilities/APIs/APIs';
import './PostRequirements.css'

function PostRequirements({ handleClose }) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [occupation, setOccupation] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [longYouNeed, setLongYouNeed] = useState('');
    const [whenYouNeed, setWhenYouNeed] = useState('');
    const [numberOfMember, setNumberOfMember] = useState('');
    const [sqft, setSqft] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [acquisition, setAcquisition] = useState('buy');
    console.log(acquisition)
    const [propertyCategorys, setPropertyCategorys] = useState(null);
    const [selectedPropertyCategory, setSelectedPropertyCategory] = useState('');
    const [propertyCityAreas, setPropertyCityAreas] = useState(null);
    const [selectedPropertyCityArea, setSelectedPropertyCityArea] = useState('');

    useEffect(() => {
        async function getAndSetPropertyCategorys() {
            const { data } = await axios.get(PROPERTY_CATEGORIES_API)
            setPropertyCategorys(data)
        }

        getAndSetPropertyCategorys()
    }, [selectedPropertyCategory])

    useEffect(() => {
        async function getAndSetPropertyCityAreas() {
            const { data } = await axios.get(PROPERTY_CITY_AREAS_API)
            setPropertyCityAreas(data)
        }

        getAndSetPropertyCityAreas()
    }, [selectedPropertyCityArea])

    async function handleSubmit(e) {

        e.preventDefault()

        const serviceData = {
            name,
            email,
            phone,
            message,
            streetAddress,
            occupation,
            maritalStatus,
            longYouNeed,
            whenYouNeed,
            numberOfMember,
            sqft,
            minPrice,
            maxPrice,
            acquisition,
            "propertyCategory": selectedPropertyCategory,
            "propertyCityArea": selectedPropertyCityArea
        }

        const response = await axios.post(CONSUMER_CONSULTENSIS_API, serviceData)
        console.log(response)

        if (response.status === 200) {
            handleClose();

            setEmail('')
            setPhone('')
            setMessage('')
            setStreetAddress('')
            setOccupation('')
            setMaritalStatus('')
            setLongYouNeed('')
            setWhenYouNeed('')
            setNumberOfMember('')
            setSqft('')
            setMinPrice('')
            setMaxPrice('')
            setAcquisition('')
            setSelectedPropertyCategory('')
            setSelectedPropertyCityArea('')
        }
    }

    return (
       
        <form className='post_requirement_form' onSubmit={handleSubmit}>
            <div className="grid-2">
                <div>
                    <h6 className="form-title-info">Personal Info</h6>

                    <div className="grid-1">
                    <div className="form-floating">
                        <div className="form-floation mb-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <label>Your Name</label>
                        </div>
                        
                    </div>
                    </div>

                    <div className="grid-1">
                    <div className="form-floating">
                        <div className="form-floation mb-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Phone Number"
                            value={phone}
                            onChange={e => setName(e.target.value)}
                        />
                        <label>Your Phone Number</label>
                        </div>
                        
                    </div>
                    </div>

                    <div className="grid-1">
                        <div className="form-floating">
                            <div className="form-floation mb-5">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Your Email (Optional)"
                                value={phone}
                                onChange={e => setName(e.target.value)}
                            />
                            <label>Your Email (Optional)</label>
                            </div>
                            
                        </div>
                    </div>

                    <div class="form-floation mb-5">
                        <select class="form-select">
                            <option value="Immediately">Immediately</option>
                            <option value="Within a month">Within a month</option>
                            <option value="Within 3 month">Within 3 month</option>
                            <option value="Within 6 month">Within 6 month</option>
                            <option value="Within a year">Within a year</option>
                        </select>
                            <label htmlFor="floatingSelect">When do you require the property?</label>
                    </div>

                    <div className="form-floation mb-5">
                                <textarea
                                    className="form-control"
                                    placeholder="Your Message"
                                    spellCheck="false"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                >

                                </textarea>
                                <label htmlFor="">Your Massage</label>
                            </div>
                </div>


                <div>
                    <h6 className="form-title-info">Property Info</h6>
                    <div className="radio_inputs">
                        <label>You’re looking to:</label>
                        <div>
                            <input
                                type="radio"
                                id='buy'
                                value='buy'
                                checked={acquisition === 'buy'}
                                onChange={e => setAcquisition(e.target.value)}
                            />
                            <label htmlFor="buy">Buy</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id='rent'
                                value='rent'
                                checked={acquisition === 'rent'}
                                onChange={e => setAcquisition(e.target.value)}
                            />
                            <label htmlFor="rent">Rent</label>
                        </div>
                    </div>
                    <div className="grid-2">
                    <div className="form-floating">
                        <div className="form-floation mb-5 mt-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="No. Of Bedrooms"
                            value={phone}
                            onChange={e => setName(e.target.value)}
                        />
                        <label>No. Of Bedrooms</label>
                        </div>
                        
                    </div>
                    <div className="form-floating">
                        <div className="form-floation mb-5 mt-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="No. Of Bedrooms"
                            value={phone}
                            onChange={e => setName(e.target.value)}
                        />
                        <label>No. Of Bedrooms</label>
                        </div>
                        
                    </div>

                    </div>

                    <div className="grid-2">
                        <div class="form-floation mb-5">
                        <select class="form-select">
                                <option value="Immediately">Property Type</option>
                                <option value="Within a month">Residential For Buy</option>
                                <option value="Within 3 month">Commercial To Buy</option>

                            </select>
                                <label htmlFor="floatingSelect">Property Type</label>
                        </div>

                        <div class="form-floation mb-5">
                            <select class="form-select">
                                

                            </select>
                                <label htmlFor="floatingSelect">Sub-Type</label>
                        </div>
                    </div>

                    <div className="grid-2">
                        <div class="form-floation mb-5">
                        <select class="form-select">
                                <option value="">Preferred City</option>
                                <option value="1">Dhaka</option>

                            </select>
                                <label htmlFor="floatingSelect">Preferred City</label>
                        </div>

                        <div className="form-floating">
                            <div className="form-floation mb-5">
                            <input
                                type="text"
                                className="form-control"
                                value={phone}
                                onChange={e => setName(e.target.value)}
                            />
                            <label>Area</label>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className="grid-1">

                        <div className="form-floating">
                            <div className="form-floation mb-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="flatSize"
                                value={phone}
                                onChange={e => setName(e.target.value)}
                            />
                            <label>Flat Size (sqft.)</label>
                            </div>
                            
                        </div>

                    </div>

                    <div className="grid-2">
                    <div className="form-floating">
                        <div className="form-floation mb-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Price (Max)- BDT"
                            value={maxPrice}
                            onChange={e => setMaxPrice(e.target.value)}
                        />
                        <label>Price (Max)- BDT</label>
                        </div>
                        
                    </div>
                    <div className="form-floating">
                        <div className="form-floation mb-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Price (Max)- BDT"
                            value={maxPrice}
                            onChange={e => setMaxPrice(e.target.value)}
                        />
                        <label>Price (Max)- BDT</label>
                        </div>
                        
                    </div>
                    </div>
             
                </div>
            </div>
            <div className="my-profile-btn mt-2">
                <button className="btn btn-dark" type='submit'>submit requirement</button>
            </div>
        </form>
      
    )
}

export default PostRequirements