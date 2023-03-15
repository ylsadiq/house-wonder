import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PROPERTY_CATEGORIES_API, PROPERTY_PROPERTTIES_API } from '../../../../../../Utilities/APIs/APIs';
import minus from '../../../../../../Assets/icon/remove.svg'
import plus from '../../../../../../Assets/home/add.svg'
import FormHeading from '../FormHeading/FormHeading';
import './SecondForm.css'

function SecondForm({formStep, completeFormStep, goToPreStep}) {
    const [count, setCount] = useState(1);
    const [check, setCheck] = useState(false);
    const [propetyTypes, setPropertyTypes] = useState(null);
    const [propetySubTypes, setPropertySubTypes] = useState(null);
    const [propertyCatagories, setPropertyCatagories] = useState(null);

    const { consumer } = useSelector(state => state.auth)


    useEffect(() => {
        async function getPropertyCatagories() {
            const { data } = await axios.get(PROPERTY_CATEGORIES_API)
            setPropertyCatagories(data)
            console.log(data);
        }
        getPropertyCatagories()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${consumer.token}`
    //   }
    // }
    
    const itemData = new FormData()
        itemData.append('propetyTypes', propetyTypes)
        itemData.append('propetySubTypes', propetySubTypes)
        itemData.append('propertyCatagories', propertyCatagories)
        const propertyTypes = {propetyTypes, propetySubTypes, propertyCatagories}
        console.log(propertyTypes);
        // const response = await axios.post(PROPERTY_PROPERTTIES_API, propertyTypes, config)
        }

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

    const renderBtn = () => {
        if(formStep > 4){
            return undefined
        }else if(formStep === 4){
            return(
            <button
            type='submit'  
            // disabled={gerror}
            className="btn btn-dark mb-4 mt-2 listing-btn">Finish</button>
            )
        }
        else{
            return(
            <button
            type='button'   
            onClick={completeFormStep}
            // disabled={!treatment}
            className="btn btn-dark mb-4 mt-2 listing-btn">Continue</button>
            )
        }
        }

    return (
        <div className="my-listing-second-form">
            <div className="container-fluid">
                {/* <div className="my-listing-step">
                    <div className="progress-count">
                        <h6>step <span>2</span> of <span>4</span></h6>
                    </div>
                    <div className="progress form-progress">
                        <div className="progress-bar-second form-prog"></div>
                    </div>
                    <div className="progress-count margin_top">
                        <h1 className='form-title'>Great! Now tell us more<span className='second-line'>about your property!</span></h1>
                    </div>
                </div> */}
                <FormHeading
                formstepFirst='step'
                formNumber='2'
                formDivide='of'
                formStepLast='4'
                formTitle='Great! Now tell us more'
                formsecondTitle="about your property!"
                />

                <form onSubmit={handleSubmit} action="">
                <div className="grid-2 mt-2">
                    <div className="form-floation">
                        
                            <select onChange={(e) => setPropertyTypes(e.target.value)} className="form-select" name="contact_regarding" propertyType="propertyType">
                            {propertyCatagories?.map((propertyCatargory => (
                            <option value="property">{propertyCatargory?.name}</option>
                            )))}
                            </select>
                        
                        <label htmlFor="propertyType">Property Type</label>
                    </div>

                    <div className="form-floation">
                        <select onChange={(e) => setPropertySubTypes(e.target.value)} className="form-select" name="contact_regarding" id='property_sub_type_id'>
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
                                    <button className="decBtn" type="button" onClick={handleDecreaseCounter}><img src={minus} alt="" /></button>
                                    <input type="text" value={count} className='counter' name="property_info[0][property_info_quantity]" />

                                    <button className="IncBtn" type="button" onClick={handleIncreaseCounter}><img src={plus} alt="" /></button>
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
                                <div className="floor_size">
                                    <div className="form-floation">
                                        <div className="form-floation mb-4 mt-2">
                                            <input type="text" name="property_header" className="form-control" id='yourFloor' placeholder="Area(Shift)" />
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
                    <h5 className="feature-title margin_top">Property Amenities</h5>

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
                    <button onClick={goToPreStep} className='btn btn-outline-dark listing-btn'>Go back</button>
                    {renderBtn()}
                </div>
                </form>
            </div>
        </div>
    )
}

export default SecondForm