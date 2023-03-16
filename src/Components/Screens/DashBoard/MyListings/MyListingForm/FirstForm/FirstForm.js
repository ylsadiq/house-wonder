import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { PROPERTY_CITY_AREAS_API, PROPERTY_PROPERTIES_API } from '../../../../../../Utilities/APIs/APIs';
import FormHeading from '../FormHeading/FormHeading';

function FirstForm({
    formStep, completeFormStep, properyTypeCityArea, setProperyTypeCityArea, ownerAcquisition, setOwnerAcquisition, userPostAs, setUserPostAs, acquisition, setAcquisition, propertyHeader, setPropertyHeader, propertyPerspective, setpropertyPerspective, readyToMove, setReadyToMove,
    propertyStreetAddress, setPropertyStreetAddress, propertyAvailavleFrom, setPropertyAvailavleFrom, propertyFlat, setPropertyFlat, propertyHouse, setPropertyHouse, propertyRoad, setPropertyRoad, propertyTotalFloor, contactPersonlFloor, setContactPersonlFloor, setPropertyTotalFloor, postCode, setPostCode, propertyDescription, setPropertyDescription, videoUrl, setVideoUrl, contactWithMe, setContactWithMe, PropertyLandArea, setPropertyLandArea, PropertyAddress, setPropertyAddress, contactPersonName, setContactPersonName, contactPersonRelation, setContactPersonRelation, contactPersonEmail, setContactPersonEmail, contactPersonPhone, setContactPersonPhone
}) {

    const [check, setCheck] = useState(false);


    const { consumer } = useSelector(state => state.auth)

    useEffect(() => {
        async function getProperyTypeCityArea() {
            const { data } = await axios.get(PROPERTY_CITY_AREAS_API)
            setProperyTypeCityArea(data)
        }
        getProperyTypeCityArea()
    }, [])


    const handleAvailable = (e) => {
        setReadyToMove(e.target.value)
        setReadyToMove(e.target.value)
        setPropertyAvailavleFrom(e.target.value)
        setCheck((prevCheck) => !prevCheck)

    }

    return (
        <div className="my-listing-form">
            <div className="container-fluid">

                <div 
                className="my-listing-map">
                    <div 
                    className="post-map">
                    </div>
                    <h1 className='map-heading'>
                    Find and pin the exact location of your properties. This will make finding your properties easier htmlFor the tenants. 
                    </h1>

                    <div
                    style={{backgroundColor: 'lightpink'}} 
                    className="ratio-box">
                        <p 
                        className='owner-title'>
                            I am the:
                        </p>
                        <div 
                        className="auth-form">
                            <div 
                            className="auth-form-input">
                                <input 
                                onChange={
                                    (e) => setUserPostAs(e.target.value)
                                } 
                                type="radio" id="owner" 
                                name="mylisting" 
                                value="owner" />
                                <label 
                                htmlFor="owner"
                                >
                                Owner
                                </label>
                            </div>
                            <div className="auth-form-input">
                                <input 
                                onChange={
                                    (e) => setUserPostAs(e.target.value)
                                } 
                                type="radio" id="representative" 
                                name="mylisting"
                                 value="representative" />
                                <label htmlFor="representative">Representative</label>
                            </div>

                            <div 
                            className="auth-form-input">
                                <input 
                                onChange={
                                (e) => setUserPostAs(e.target.value)
                                } 
                                type="radio" 
                                id="agent" 
                                name="mylisting" 
                                value="agent" 
                                />

                                <label 
                                htmlFor="agent"
                                >
                                Agent
                                </label>
                            </div>
                        </div>
                    </div>
                    <div 
                    className="ratio-box">
                        <p 
                        className='owner-title'>
                            I want to:</p>
                        <div 
                        className="auth-form">
                            <div 
                            className="auth-form-input">
                                <input 
                                onChange={
                                (e) => setAcquisition(e.target.value)
                                } 
                                type="radio" 
                                id="buy" 
                                name="mylisting2" 
                                value="buy" 
                                />

                                <label 
                                htmlFor="buy">
                                Buy
                                </label>
                            </div>

                            <div 
                            className="auth-form-input"
                            >
                                <input onChange={
                                    (e) => setAcquisition(e.target.value)
                                } 
                                type="radio" 
                                id="rent" 
                                name="mylisting2" 
                                value="rent" 
                                />

                                <label 
                                htmlFor="rent"
                                >
                                Rent
                                </label>
                            </div>
                        </div>
                    </div>
                    <div 
                    className="grid-1">
                        <div 
                        className="form-floating">
                            <div 
                            className="form-floation mb-4 mt-2">
                                <input 
                                onBlur={(e) => setPropertyHeader(e.target.value)} 
                                type="text" name="property_header" 
                                className="form-control" 
                                id='propHeader'
                                placeholder="Property Header (Hint: Type your properties tittle here)" 
                                />

                                <label 
                                htmlFor="propHeader"
                                >
                                You can post your properties under headers like "Shaptak Digonto: 3BHK flat htmlFor rent" or "Ready apartment htmlFor sale" etc.
                                </label>
                            </div>
                        </div>
                    </div>

                    <div 
                    className="ratio-box">
                        <p 
                        className='owner-title'
                        >
                            Property is:
                        </p>
                        <div 
                        className="auth-form">
                            <div 
                            className="auth-form-input">
                                <input 
                                onChange={(e) => handleAvailable(e)} 
                                type="radio" id="readyToMove" 
                                name="mylisting3" 
                                value="readyToMove" />
                                <label 
                                htmlFor="readyToMove"
                                >
                                Ready to move
                                </label>
                            </div>

                            <div 
                            className="auth-form-input">
                                <input 
                                onChange={(e) => handleAvailable(e)} 
                                type="radio" 
                                id="availableFrom" 
                                name="mylisting3" 
                                value="availableFrom" 
                                />
                                <label 
                                htmlFor="availableFrom"
                                >
                                Available from
                                </label>
                            </div>
                        </div>
                    </div>

                    {
                    check && 
                    <div 
                    className='grid-1'
                    >
                        <div 
                        className="form-floation mb-4 mt-2">
                            <input 
                            onChange={(e) => handleAvailable(e)} 
                            type="date" placeholder="Select Aailable Date" 
                            className="form-control" 
                            name="video_url" 
                            id="video_url" 
                            />
                            <label 
                            htmlFor="video_url"
                            >
                            Select Aailable Date
                            </label>
                        </div>
                    </div>
                    }

                    <div 
                    className="grid-2 mt-2">
                        <div 
                        className="form-floation">
                            <select 
                            onChange={(e) => setPropertyStreetAddress(e.target.value)} 
                            className="form-select" 
                            name="contact_regarding">
                                <option 
                                value="Dhaka"
                                >
                                Dhaka
                                </option>
                                <option 
                                value="Rajshahi"
                                >
                                Rajshahi
                                </option>
                                <option 
                                value="package"
                                >
                                Package
                                </option>
                                <option 
                                value="Barishal"
                                >Barishal
                                </option>
                            </select>
                            <label 
                            htmlFor="city"
                            >
                            Property City
                            </label>
                        </div>

                        <div 
                        className="form-floation"
                        >
                            <select 
                            onChange={(e) => setPropertyLandArea(e.target.value)} 
                            className="form-select" 
                            name="contact_regarding" 
                            id='city'
                            >
                                <option 
                                value="Select"
                                >
                                Select
                                </option>
                                <option 
                                value="pabna">
                                pabna
                                </option>
                                <option 
                                value="package"
                                >
                                Package
                                </option>
                                <option 
                                value="MohammadPur"
                                >
                                MohammadPur
                                </option>
                            
                            </select>
                            <label 
                            htmlFor="city">
                            Property City Area
                            </label>
                        </div>
                    </div>

                    <div 
                    className="grid-1">
                        <div 
                        className="form-floating">
                            <div 
                            className="form-floation mb-4 mt-2"
                            >
                                <input 
                                onChange={(e) => setPropertyAddress(e.target.value)} 
                                type="text" name="property_header" 
                                className="form-control" 
                                id='propStreetAdd' 
                                placeholder="Property Header" />
                                <label 
                                htmlFor="propStreetAdd"
                                >
                                Property Street Address
                                </label>
                            </div>
                        </div>
                    </div>
                    <div 
                    className="grid-2 mt-2">
                        <div 
                        className="form-floation">
                            <div 
                            className="form-floation mb-4 mt-2">
                                <input 
                                onChange={(e) => setPropertyFlat(e.target.value)} 
                                type="text" 
                                name="property_header" 
                                className="form-control" 
                                id='flat' 
                                placeholder="flat" />
                                <label 
                                htmlFor="flat"
                                >
                                Flat/Unit No
                                </label>
                            </div>
                        </div>

                        <div 
                        className="form-floation">
                            <div 
                            className="form-floation mb-4 mt-2">
                                <input 
                                onChange={(e) => setPropertyHouse(e.target.value)} 
                                type="text" 
                                name="property_header" 
                                className="form-control" 
                                id='house' 
                                placeholder="house" />

                                <label 
                                htmlFor="house">
                                House No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div 
                    className="grid-2 mt-2"
                    >
                        <div 
                        className="form-floation"
                        >
                            <div 
                            className="form-floation mb-4 mt-2"
                            >
                                <input 
                                onChange={(e) => setPropertyRoad(e.target.value)} 
                                type="text"
                                name="property_header" 
                                className="form-control" 
                                id='road' 
                                placeholder="road" />
                                <label 
                                htmlFor="road"
                                >
                                Road No
                                </label>
                            </div>
                        </div>

                        <div 
                        className="form-floation"
                        >
                            <div 
                            className="form-floation mb-4 mt-2"
                            >
                                <input 
                                onChange={(e) => setPropertyTotalFloor(e.target.value)} 
                                type="text" 
                                name="property_header" 
                                className="form-control" 
                                id='totalFloor' 
                                placeholder="totalFloor" />
                                <label 
                                htmlFor="totalFloor"
                                >
                                Total Floor
                                </label>
                            </div>
                        </div>
                    </div>
                    <div 
                    className="grid-2 mt-2"
                    >
                        <div 
                        className="form-floation"
                        >
                            <div 
                            className="form-floation mb-4 mt-2"
                            >
                                <input 
                                onChange={(e) => setContactPersonlFloor(e.target.value)} 
                                type="text"
                                name="property_header" 
                                className="form-control" 
                                id='yourFloor' 
                                placeholder="yourFloor" />
                                <label 
                                htmlFor="yourFloor"
                                >Your Floor
                                </label>
                            </div>
                        </div>

                        <div 
                        className="form-floation"
                        >
                            <div 
                            className="form-floation mb-4 mt-2"
                            >
                                <input 
                                onChange={(e) => setPostCode(e.target.value)} 
                                type="text" 
                                name="property_header" 
                                className="form-control" 
                                id='zipCode'
                                placeholder="zipCode" />
                                <label htmlFor="zipCode"
                                >
                                Zip Code
                                </label>
                            </div>
                        </div>
                    </div>

                    <div 
                    className="grid-1"
                    >
                        <div 
                        className="form-floation mb-4 mt-2"
                        >
                            <textarea 
                            onChange={(e) => setPropertyDescription(e.target.value)} 
                            className="form-control"
                            placeholder="Describe your properties in a few lines. You can include the name of your house, the location it is situated in, number of bedrooms and bathrooms and other amenities."
                            id="propDescr" 
                            name="property_description" 
                            spellCheck="false"
                            >
                            </textarea>
                            <label 
                            htmlFor="propDescr"
                            >Describe your properties in a few lines. You can include the name of your house, the location it is situated in, number of bedrooms and bathrooms and other amenities.
                            </label>
                        </div>
                    </div>

                    <div 
                    className="grid-1"
                    >
                        <div 
                        className="form-floation mb-4 mt-2"
                        >
                            <input 
                            onChange={(e) => setVideoUrl(e.target.value)} 
                            type="text" placeholder="Property Video Id(EX: IZXg_rDyZ18)" 
                            className="form-control" 
                            name="video_url" 
                            id="video_url" />
                            <label htmlFor="video_url"
                            >Property Video Url
                            </label>
                        </div>
                    </div>

                    <div 
                    className="ratio-box"
                    >
                        <p 
                        className='owner-title'>
                        Contact Person
                        </p>
                        <div 
                        className="auth-form"
                        >
                            <div 
                            className="auth-form-input"
                            >
                                <input
                                    onChange={e => setContactWithMe(e.target.value)}
                                    value={'true'}
                                    checked={contactWithMe === 'true'}
                                    type="radio"
                                    id='true'
                                />
                                <label 
                                htmlFor='true'>
                                Contact With Me
                                </label>
                            </div>

                            <div 
                            className="auth-form-input"
                            >
                                <input
                                    onChange={e => setContactWithMe(e.target.value)}
                                    value={'false'}
                                    checked={contactWithMe === 'false'}
                                    type="radio"
                                    id='false'
                                />
                                <label 
                                htmlFor="false"
                                >
                                Assign Contact Person
                                </label>
                            </div>
                        </div>
                    </div>

                    <div 
                    className="grid-2 mb-4 mt-2"
                    >
                        <div 
                        className="form-floation"
                        >
                            <input
                                onChange={(e) => setContactPersonName(e.target.value)}
                                id="contactPersonName" 
                                name="property_contact_person_name"
                                type="text" 
                                className="form-control required" 
                                placeholder="contactPersonName" />
                            <label 
                            htmlFor="contactPersonName"
                            >
                            Contact Person Name
                            </label>
                        </div>
                        <div 
                        className="form-floation">
                            <input
                                onChange={(e) => setContactPersonRelation(e.target.value)}
                                id="contactPersonRel" 
                                name="property_contact_person_relation" 
                                type="text" 
                                className="form-control required" 
                                placeholder="contactPersonRel" />
                            <label 
                            htmlFor="contactPersonRel"
                            >
                            Contact Person Relation
                            </label>
                        </div>

                    </div>
                    <div 
                    className="grid-2 mb-4 mt-2">
                        <div 
                        className="form-floation">
                            <input
                                onChange={(e) => setContactPersonEmail(e.target.value)}
                                id="contactPersonEmail" 
                                name="property_contact_person_email" 
                                type="text" 
                                className="form-control" 
                                placeholder="contactPersonRel" />
                            <label 
                            htmlFor="contactPersonEmail">
                            Contact Person Email
                            </label>
                        </div>
                        <div 
                        className="form-floation">
                            <input
                                onChange={(e) => setContactPersonPhone(e.target.value)}
                                id="contactPersonPhone"
                                name="property_contact_person_phone" 
                                type="text" 
                                className="form-control required" 
                                placeholder="contactPersonRel" 
                                />
                            <label 
                            htmlFor="contactPersonPhone"
                            >
                            Contact Person Phone
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstForm