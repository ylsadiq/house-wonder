import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CONSUMER_CONSULTENSIS_API, PROPERTY_CATEGORIES_API, PROPERTY_CITY_AREAS_API } from '../../../../../Utilities/APIs/APIs';

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
                    <h6>Personal Info</h6>
                    <div className="form-floation">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <label>Your Name</label>
                    </div>
                    <div className="form-floation">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Phone Number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <label>Your Phone Number</label>
                    </div>
                    <div className="form-floation">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email (Optional)"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>Your Email (Optional)</label>
                    </div>
                    <div className="form-floation">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Occupation"
                            value={occupation}
                            onChange={e => setOccupation(e.target.value)}
                        />
                        <label>Occupation</label>
                    </div>
                    <div className="form-floation">
                        <select
                            className="form-select"
                            value={maritalStatus}
                            onChange={e => setMaritalStatus(e.target.value)}
                        >
                            <option value="0" hidden>Marital Status</option>
                            <option value="married">Married</option>
                            <option value="unmarried">Unmarried</option>
                        </select>
                    </div>
                    <div className="form-floation">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Number of Member"
                            value={numberOfMember}
                            onChange={e => setNumberOfMember(e.target.value)}
                        />
                        <label>Number of Member</label>
                    </div>

                    <div className="form-floation">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Street Address"
                            value={streetAddress}
                            onChange={e => setStreetAddress(e.target.value)}
                        />
                        <label>Street Address</label>
                    </div>
                    <div className="form-floation">
                        <select
                            className="form-select"
                            value={selectedPropertyCategory}
                            onChange={e => setSelectedPropertyCategory(e.target.value)}
                        >
                            <option value="0" hidden>Property Categorys</option>
                            {propertyCategorys?.map(propertyCategory => (
                                <option value={propertyCategory._id}>{propertyCategory.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-floation">
                        <select
                            className="form-select"
                            value={selectedPropertyCityArea}
                            onChange={e => setSelectedPropertyCityArea(e.target.value)}
                        >
                            <option value="0" hidden>Property City Area</option>
                            {propertyCityAreas?.map(propertyCityArea => (
                                <option value={propertyCityArea._id}>{propertyCityArea.name}</option>
                            ))}
                        </select>
                    </div>
                </div>


                <div>
                    <h6>Property Info</h6>
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
                    <div className="form-floation">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Long you Need"
                            value={longYouNeed}
                            onChange={e => setLongYouNeed(e.target.value)}
                        />
                        <label>Long you Need</label>
                    </div>
                    <div className="form-floation">
                        <select
                            className="form-select"
                            value={whenYouNeed}
                            onChange={e => setWhenYouNeed(e.target.value)}
                        >
                            <option value="0" hidden>When You Need</option>
                            <option value="immediately">Immediately</option>
                            <option value="within_a_month">Within a Month</option>
                            <option value="within_3_month">Within 3 Month</option>
                            <option value="within_6_month">Within 6 Month</option>
                            <option value="within_a_year">Within a Year</option>
                        </select>
                    </div>
                    <div className="form-floation">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Flat Size (sqft.)"
                            value={sqft}
                            onChange={e => setSqft(e.target.value)}
                        />
                        <label>Flat Size (sqft.)</label>
                    </div>
                    <div className="form-floation">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Price (Min)- BDT"
                            value={minPrice}
                            onChange={e => setMinPrice(e.target.value)}
                        />
                        <label>Price (Min)- BDT</label>
                    </div>
                    <div className="form-floation">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Price (Max)- BDT"
                            value={maxPrice}
                            onChange={e => setMaxPrice(e.target.value)}
                        />
                        <label>Price (Max)- BDT</label>
                    </div>
                    <div className="form-floation">
                        <textarea
                            className="form-control"
                            placeholder="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        ></textarea>
                        <label>Your Message</label>
                    </div>
                </div>
            </div>
            <div className="my-profile-footer mt-2">
                <button className="btn btn-dark" type='submit'>submit requirement</button>
            </div>
        </form>
    )
}

export default PostRequirements