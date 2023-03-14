import React, { useState } from 'react'

function FirstForm({formStep, completeFormStep }) {

    const [acquisition, setAcquisition] = useState(null);
    const [propertyPerspective, setpropertyPerspective] = useState(null);
    const [propertyHeader, setPropertyHeader] = useState(null);
    const [readyToMove, setReadyToMove] = useState(null);
    const [propertyStreetAddress, setPropertyStreetAddress] = useState(null);
    const [PropertyLandArea, setPropertyLandArea] = useState(null);
    const [PropertyAddress, setPropertyAddress] = useState(null);
    const [FlatNumber, setFlatNumber] = useState(null);
    const [houseNumber, setHouseNumber] = useState(null);
    const [roadNumber, setRoadNumber] = useState(null);
    const [totalFlat, setTotalFlat] = useState(null);
    const [myFlat, setMyFlat] = useState(null);
    const [postCode, setPostCode] = useState(null);
    const [propertyDescription, setPropertyDescription] = useState(null);
    const [videoURL, setVideoURL] = useState(null);
    const [name, setName] = useState(null);
    const [relation, setRelation] = useState(null);
    const [email, setEmail] = useState(null);
    const [number, setNumber] = useState(null);

    const renderBtn = () => {
        if(formStep > 4){
            return undefined
        }else if(formStep === 4){
            return(
            <button
            type='submit'  
            // disabled={error}
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
            )}
        }

    async function handleSubmit(e) {
        e.preventDefault()
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${consumer.token}`
    //   }
    // }
    const itemData = new FormData()
        itemData.append('acquisition', acquisition)
        itemData.append('propertyHeader', propertyHeader)
        itemData.append('propertyStreetAddress', propertyStreetAddress)
        itemData.append('PropertyLandArea', PropertyLandArea)
        itemData.append('PropertyAddress', PropertyAddress)
        itemData.append('FlatNumber', FlatNumber)
        itemData.append('houseNumber', houseNumber)
        itemData.append('roadNumber', roadNumber)
        itemData.append('totalFlat', totalFlat)
        itemData.append('myFlat', myFlat)
        itemData.append('postCode', postCode)
        itemData.append('propertyDescription', propertyDescription)
        itemData.append('name', name)
        itemData.append('relation', relation)
        itemData.append('videoURL', videoURL)
        itemData.append('email', email)
        itemData.append('number', number)
        const property = {propertyHeader, propertyStreetAddress, PropertyLandArea, PropertyAddress, FlatNumber, houseNumber, totalFlat, myFlat, postCode, propertyDescription, name, relation, email, number}
        console.log(property);
        // const response = await axios.post(PROPERTY_PROPERTTIES_API, data, config)
        }

  return (
    <div className="my-listing-form">
                <div className="container-fluid">
                    <div className="my-listing-step">
                        <div className="progress-count">
                            <h6>step <span>1</span> of <span>4</span></h6>
                        </div>
                        <div className="progress form-progress mb-4">
                            <div className="progress-bar form-prog"></div>
                        </div>
                        <div className="form-title margin_top">
                            Hi, <span>Test11!</span>
                            <span className='second-line'>Let's start posting your property.</span>
                        </div>
                    </div>
                    <div className="my-listing-map">
                        <div className="post-map">

                        </div>
                        <h1 className='map-heading'>Find and pin the exact location of your property. This will make finding your property easier htmlFor the tenants. </h1>
                        <form action="" onSubmit={handleSubmit}>
                        {formStep >= 1 ? <div className={formStep === 1 ? 'd-block': 'd-none'}>
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
                                        <input onChange={(e) => setAcquisition(e.target.value)} type="radio" id="sell" name="mylisting" value="sell" />
                                        <label htmlFor="sell">Sell</label>
                                    </div>
                                    <div className="auth-form-input">
                                        <input onChange={(e) => setAcquisition(e.target.value)} type="radio" id="rent" name="mylisting" value="rent" />
                                        <label htmlFor="rent">Rent</label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-1">
                                <div class="form-floating">
                                    <div class="form-floation mb-4 mt-2">
                                        <input onBlur={(e) => setPropertyHeader(e.target.value)} type="text" name="property_header" class="form-control" id='propHeader' placeholder="Property Header (Hint: Type your property tittle here)" />
                                        <label htmlFor="propHeader">You can post your property under headers like "Shaptak Digonto: 3BHK flat htmlFor rent" or "Ready apartment htmlFor sale" etc.</label>
                                    </div>
                                </div>
                            </div>

                            <div className="ratio-box">
                                <p className='owner-title'>Property is:</p>
                                <div className="auth-form">
                                    <div className="auth-form-input">
                                        <input onChange={(e) => setReadyToMove(e.tar)} type="radio" id="readyToMove" name="mylisting" value="readyToMove" />
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
                                    <select onChange={(e) => setPropertyStreetAddress(e.target.value)} class="form-select" name="contact_regarding">
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Rajshahi">Rajshahi</option><option value="package">Package</option>
                                        <option value="Barishal">Barishal</option></select>
                                    <label htmlFor="city">Property City</label>
                                </div>

                                <div class="form-floation">
                                    <select onChange={(e) => setPropertyLandArea(e.target.value)} class="form-select" name="contact_regarding" id='city'>
                                        <option value="Select">Select</option>
                                        <option value="pabna">pabna</option><option value="package">Package</option>
                                        <option value="MohammadPur">MohammadPur</option></select>
                                    <label htmlFor="city">Property City</label>
                                </div>
                            </div>

                            <div className="grid-1">
                                <div class="form-floating">
                                    <div class="form-floation mb-4 mt-2">
                                        <input onChange={(e) => setPropertyAddress(e.target.value)} type="text" name="property_header" class="form-control" id='propStreetAdd' placeholder="Property Header" />
                                        <label htmlFor="propStreetAdd">Property Street Address</label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-2 mt-2">
                                <div class="form-floation">
                                    <div class="form-floation mb-4 mt-2">
                                        <input onChange={(e) => setFlatNumber(e.target.value)} type="text" name="property_header" class="form-control" id='flat' placeholder="flat" />
                                        <label htmlFor="flat">Flat/Unit No</label>
                                    </div>
                                </div>

                                <div class="form-floation">
                                    <div class="form-floation mb-4 mt-2">
                                        <input onChange={(e) => setHouseNumber(e.target.value)} type="text" name="property_header" class="form-control" id='house' placeholder="house" />
                                        <label htmlFor="house">House No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-2 mt-2">
                                <div class="form-floation">
                                    <div class="form-floation mb-4 mt-2">
                                        <input onChange={(e) => setRoadNumber(e.target.value)} type="text" name="property_header" class="form-control" id='road' placeholder="road" />
                                        <label htmlFor="road">Road No</label>
                                    </div>
                                </div>

                                <div class="form-floation">
                                    <div class="form-floation mb-4 mt-2">
                                        <input onChange={(e) => setTotalFlat(e.target.value)} type="text" name="property_header" class="form-control" id='totalFloor' placeholder="totalFloor" />
                                        <label htmlFor="totalFloor">Total Floor</label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-2 mt-2">
                                <div class="form-floation">
                                    <div class="form-floation mb-4 mt-2">
                                        <input onChange={(e) => setMyFlat(e.target.value)} type="text" name="property_header" class="form-control" id='yourFloor' placeholder="yourFloor" />
                                        <label htmlFor="yourFloor">Your Floor</label>
                                    </div>
                                </div>

                                <div class="form-floation">
                                    <div class="form-floation mb-4 mt-2">
                                        <input onChange={(e) => setPostCode(e.target.value)} type="text" name="property_header" class="form-control" id='zipCode' placeholder="zipCode" />
                                        <label htmlFor="zipCode">Zip Code</label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-1">
                                <div class="form-floation mb-4 mt-2">
                                    <textarea onChange={(e) => setPropertyDescription(e.target.value)} class="form-control"
                                        placeholder="Describe your property in a few lines. You can include the name of your house, the location it is situated in, number of bedrooms and bathrooms and other amenities."
                                        id="propDescr" name="property_description" spellCheck="false">
                                    </textarea>
                                    <label htmlFor="propDescr">Describe your property in a few lines. You can include the name of your house, the location it is situated in, number of bedrooms and bathrooms and other amenities.</label>
                                </div>
                            </div>

                            <div className="grid-1">
                                <div class="form-floation mb-4 mt-2">
                                    <input onChange={(e) => setVideoURL(e.target.value)} type="text" placeholder="Property Video Id(EX: IZXg_rDyZ18)" class="form-control" name="video_url" id="video_url" />
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
                                    <input
                                    onChange={(e) => setName(e.target.value)}
                                    id="contactPersonName" name="property_contact_person_name"
                                    type="text" class="form-control required" placeholder="contactPersonName" />
                                    <label htmlFor="contactPersonName">Contact Person
                                        Name</label>
                                </div>
                                <div class="form-floation">
                                    <input
                                    onChange={(e) => setNumber(e.target.value)}
                                    value={number} 
                                    id="contactPersonRel" name="property_contact_person_relation" type="text" class="form-control required" placeholder="contactPersonRel" />
                                    <label htmlFor="contactPersonRel">Contact Person
                                        Relation</label>
                                </div>

                            </div>
                            <div className="grid-2 mb-4 mt-2">
                                <div class="form-floation">
                                    <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="contactPersonEmail" name="property_contact_person_email" type="text" class="form-control" placeholder="contactPersonRel" />
                                    <label htmlFor="contactPersonEmail">Contact Person Email</label>
                                </div>
                                <div class="form-floation">
                                    <input
                                    onChange={(e) => setRelation(e.target.value)}
                                    id="contactPersonPhone" name="property_contact_person_phone" type="text" class="form-control required" placeholder="contactPersonRel" />
                                    <label htmlFor="contactPersonPhone">Contact Person Phone</label>
                                </div>

                            </div>
                            <div className="form-footer">
                                {/* <input type="submit" className='btn btn-dark mb-4 mt-2 listing-btn' value="Continue" /> */}
                                {renderBtn()}
                            </div>
                            </div> : null}
                        </form>


                    </div>
                </div>
            </div>
  )
}

export default FirstForm