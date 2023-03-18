import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PROPERTY_CATEGORIES_API} from '../../../../../../Utilities/APIs/APIs';
import minus from '../../../../../../Assets/icon/remove.svg'
import plus from '../../../../../../Assets/home/add.svg'
import './SecondForm.css'

function SecondForm({setPropertyTypes,  setPropertyTypesCatagory, setPropertySubTypes, propertyCatagories, setPropertyCatagories}) {
    const [count, setCount] = useState(1);
    const [check, setCheck] = useState(false);
    

    useEffect(() => {
        async function getPropertyCatagories() {
            const { data } = await axios.get(PROPERTY_CATEGORIES_API)
            setPropertyCatagories(data)
            console.log(data);
        }
        getPropertyCatagories()
    }, [])
    

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
    const handleSubClick = (e) => {
        setPropertyTypesCatagory(e)
    }


    return (
        <div 
        className="my-listing-second-form"
        >
            <div 
            className="container-fluid"
            >
                <div 
                className="grid-2 mt-2"
                >
                    <div 
                    className="form-floation"
                    >
                        <select 
                        onChange={(e) => setPropertyTypes(e.target.value)} 
                        className="form-select" 
                        name="contact_regarding" 
                        propertyType="propertyType">
                        {propertyCatagories?.map((propertyCatargory => (
                        <option 
                        onClick={(e) => handleSubClick(e)} 
                        value="property">{propertyCatargory?.name}
                        </option>
                        )))}
                        </select>
                        
                        <label 
                        htmlFor="propertyType">
                        Property Type
                        </label>
                    </div>

                    <div 
                    className="form-floation">
                        <select 
                        onChange={(e) => setPropertySubTypes(e.target.value)} 
                        className="form-select" 
                        name="contact_regarding" 
                        id='property_sub_type_id'>
                            <option value="">Select Property Sub Type</option>
                            <option value="property">Property</option>
                            <option value="package">Package</option>
                            <option value="service">Service</option>
                            </select>
                        <label 
                        htmlFor="property_sub_type_id">
                        Property Sub Type
                        </label>
                    </div>
                </div>
                <div 
                className="grid-1 mb-4">
                    <h5 
                    className="feature-title margin_top">
                    Property Features
                    </h5>

                    <div 
                    className="property-form">
                        <div 
                        className="grid-2">

                            <div 
                            className='check-box'>
                                <input 
                                type="checkbox" 
                                className='form-check-input' 
                                id="scales"
                                onChange={handleCheckBox}
                                name="scales" value={check} 
                                />
                                <label 
                                htmlFor="scales" 
                                className='form-check-label'>
                                Kitchen
                                </label>
                            </div>
                            <div 
                            className={`${check ? 'active' : 'authFormInput'}`}>
                                <div 
                                className="featuresInpGroup propFeature1"
                                >
                                    <button 
                                    className="decBtn" 
                                    type="button" 
                                    onClick={handleDecreaseCounter}>
                                    <img src={minus} alt="" />
                                    </button>
                                    <input type="text" 
                                    value={count} 
                                    className='counter' 
                                    name="property_info[0][property_info_quantity]" 
                                    />

                                    <button 
                                    className="IncBtn" 
                                    type="button" onClick={handleIncreaseCounter}>
                                    <img src={plus} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div 
                        className="grid-1">
                            <div 
                            className='check-box'>
                                <input 
                                type="checkbox" 
                                className='form-check-input' 
                                id="horns" 
                                onChange={handleCheckBox}
                                value={check}


                                name="horns" />
                                <label htmlFor="horns" 
                                className='form-check-label'
                                >
                                Bath
                                </label>
                            </div>
                            <div 
                            className={`${check ? 'active' : 'authFormInput'}`}>
                                <div 
                                className="featuresInpGroup propFeature1"
                                >
                                    <button 
                                    className="decBtn" 
                                    type="button" 
                                    onClick={handleDecreaseCounter}>
                                    <img src={minus} alt="" />
                                    </button>
                                    <input type="text" 
                                    value={count} 
                                    className='counter' 
                                    name="property_info[0][property_info_quantity]" 
                                    />

                                    <button 
                                    className="IncBtn" 
                                    type="button" onClick={handleIncreaseCounter}>
                                    <img src={plus} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div 
                        className="grid-1">
                            <div 
                            className='check-box'>
                                <input 
                                type="checkbox" 
                                className='form-check-input' 
                                id="horns" 
                                name="horns" 
                                />
                                <label htmlFor="horns" 
                                onChange={handleCheckBox}                                  
                                className='form-check-label'>
                                Floor Size
                                </label>
                                <div 
                                className="floor_size">
                                    <div 
                                    className="form-floation">
                                        <div 
                                        className="form-floation mb-4 mt-2">
                                            <input 
                                            type="text"
                                            name="property_header" 
                                            className="form-control" 
                                            id='yourFloor' 
                                            placeholder="Area(Shift)" />
                                            <label 
                                            htmlFor="yourFloor">
                                            Area(Shift)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div 
                        className="grid-1">
                            <div 
                            className='check-box'>
                                <input 
                                type="checkbox" 
                                className='form-check-input' 
                                id="horns" name="horns" />
                                <label htmlFor="horns" 
                                onChange={handleCheckBox}
                                className='form-check-label'>
                                BedRoom
                                </label>
                            </div>
                        </div>
                    </div>


                </div>
                <div 
                className="grid-1">
                    <h5 
                    className="feature-title margin_top">
                    Property Amenities
                    </h5>

                    <div 
                    className="property-form">
                        <div 
                        className="grid-1">
                            <div 
                            className='check-box'>
                                <input 
                                type="checkbox" 
                                className='form-check-input' 
                                id="horns" 
                                name="horns" />
                                <label htmlFor="horns" 
                                onChange={handleCheckBox}
                                className='form-check-label'>
                                Garden
                                </label>
                            </div>
                        </div>
                        <div 
                        className="grid-1">
                            <div 
                            className='check-box'>
                                <input 
                                type="checkbox" 
                                className='form-check-input' 
                                id="horns" name="horns" />
                                <label htmlFor="horns" 
                                onChange={handleCheckBox}
                                className='form-check-label'>
                                Pool
                                </label>
                            </div>
                        </div>
                        <div 
                        className="grid-1">
                            <div 
                            className='check-box'>
                                <input 
                                type="checkbox" 
                                className='form-check-input' 
                                id="horns" 
                                name="horns" 
                                />
                                <label 
                                htmlFor="horns" 
                                onChange={handleCheckBox}
                                className='form-check-label'
                                >
                                Gym
                                </label>
                            </div>
                        </div>
                        <div 
                        className="grid-1">
                            <div 
                            className='check-box'>
                                <input 
                                type="checkbox" 
                                className='form-check-input' 
                                id="horns" 
                                name="horns" 
                                />
                                <label 
                                htmlFor="horns" 
                                onChange={handleCheckBox}
                                className='form-check-label'>
                                Parking Spot
                                </label>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SecondForm