import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { PROPERTY_PROPERTIES_API } from '../../../../../Utilities/APIs/APIs';
import FirstForm from './FirstForm/FirstForm';
import SecondForm from './SecondForm/SecondForm'
import ThirdForm from './ThirdForm/ThirdForm'
import './MyListingForm.css'
import FourForm from './FourForm/FourForm';

function MyListingForm() {
    
    // form field states
    // first form states
    const [properyTypeCityArea, setProperyTypeCityArea] = useState(null);
    const [ownerAcquisition, setOwnerAcquisition] = useState(null);
    const [userPostAs, setUserPostAs] = useState(null);
    const [acquisition, setAcquisition] = useState(null);
    const [propertyPerspective, setpropertyPerspective] = useState(null);
    const [propertyHeader, setPropertyHeader] = useState(null);
    const [readyToMove, setReadyToMove] = useState(null);
    const [propertyStreetAddress, setPropertyStreetAddress] = useState(null);
    const [PropertyLandArea, setPropertyLandArea] = useState(null);
    const [PropertyAddress, setPropertyAddress] = useState(null);
    const [propertyAvailavleFrom, setPropertyAvailavleFrom] = useState(null);
    const [propertyFlat, setPropertyFlat] = useState(null);
    const [propertyHouse, setPropertyHouse] = useState(null);
    const [propertyRoad, setPropertyRoad] = useState(null);
    const [propertyTotalFlat, setPropertyTotalFlat] = useState(null);
    const [contactPersonFlat, setContactPersonFlat] = useState(null);
    const [postCode, setPostCode] = useState(null);
    const [propertyDescription, setPropertyDescription] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null);
    const [contactWithMe, setContactWithMe] = useState(null);
    const [contactPersonName, setContactPersonName] = useState(null);
    const [contactPersonRelation, setContactPersonRelation] = useState(null);
    const [contactPersonEmail, setContactPersonEmail] = useState(null);
    const [contactPersonPhone, setContactPersonPhone] = useState(null);
    //Second form states
    const [propetyTypes, setPropertyTypes] = useState(null);
    const [propetyTypesCatagory, setPropertyTypesCatagory] = useState(null);
    const [propetySubTypes, setPropertySubTypes] = useState(null);
    const [propertyCatagories, setPropertyCatagories] = useState(null);
    //Third form states

    //Four form states
    const [propertyAmount, setPropertyAmount] = useState(null);
    const [amountPerSqft, setAmountPerSqft] = useState(null);
    const [priceNagotiable, setPriceNegotiable] = useState(null);

    // form steps section
    const [formStep, setFormStep] = useState(1);
    const MAX_STEPS = 4;

    const completeFormStep = () =>{
        setFormStep(cur => cur + 1)
      }
    const goToPreStep = () =>{
        setFormStep(cur => cur - 1)
      }
      const { consumer } = useSelector(state => state.auth)

      async function handleSubmit(e) {
        e.preventDefault()
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${consumer.token}`
    //   }
    // }
    
    const itemData = new FormData()
        itemData.append('userPostAs', userPostAs)
        itemData.append('acquisition', acquisition)
        itemData.append('propertyHeader', propertyHeader)
        itemData.append('propertyStreetAddress', propertyStreetAddress)
        itemData.append('PropertyLandArea', PropertyLandArea)
        itemData.append('PropertyAddress', PropertyAddress)
        itemData.append('propertyFlat', propertyFlat)
        itemData.append('propertyHouse', propertyHouse)
        itemData.append('propertyRoad', propertyRoad)
        itemData.append('readyToMove', readyToMove)
        itemData.append('propertyAvailavleFrom', propertyAvailavleFrom)
        itemData.append('contactPersonFlat', contactPersonFlat)
        itemData.append('propertyTotalFlat', propertyTotalFlat)
        itemData.append('postCode', postCode)
        itemData.append('propertyDescription', propertyDescription)
        itemData.append('contactPersonName', contactPersonName)
        itemData.append('contactPersonRelation', contactPersonRelation)
        itemData.append('videoUrl', videoUrl)
        itemData.append('contactWithMe', contactWithMe)
        itemData.append('contactPersonEmail', contactPersonEmail)
        itemData.append('contactPersonPhone', contactPersonPhone)
        itemData.append('propetyTypes', propetyTypes)
        itemData.append('propertyCatagories', propertyCatagories)
        itemData.append('propertyAmount', propertyAmount)
        itemData.append('priceNagotiable', priceNagotiable)
        
        const properties = {propertyHeader, acquisition, userPostAs, propertyStreetAddress, PropertyLandArea, PropertyAddress, propertyFlat, propertyHouse, propertyRoad, propertyTotalFlat, postCode, propertyDescription, readyToMove, propertyAvailavleFrom, contactPersonFlat, contactPersonName, contactPersonRelation, videoUrl, contactWithMe, contactPersonEmail, contactPersonPhone, propetyTypes, propertyCatagories, propertyAmount, priceNagotiable}
        console.log(properties);
        const response = await axios.post(PROPERTY_PROPERTIES_API, properties)
        console.log(response)
        }
    
    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            {
                formStep >= 1 &&
                <div className={formStep === 1 ? 'd-block': 'd-none'}>
                    <FirstForm
                        properyTypeCityArea={properyTypeCityArea} 
                        setProperyTypeCityArea={setProperyTypeCityArea}
                        ownerAcquisition={ownerAcquisition} 
                        setOwnerAcquisition={setOwnerAcquisition}
                        userPostAs={userPostAs} 
                        setUserPostAs={setUserPostAs} 
                        acquisition={acquisition} 
                        setAcquisition={setAcquisition}
                        propertyPerspective={propertyPerspective}
                        setpropertyPerspective={setpropertyPerspective}
                        propertyHeader={propertyHeader}
                        setPropertyHeader={setPropertyHeader}
                        readyToMove={readyToMove}
                        setReadyToMove={setReadyToMove}
                        propertyStreetAddress={propertyStreetAddress}
                        setPropertyStreetAddress={setPropertyStreetAddress}
                        PropertyLandArea={PropertyLandArea}
                        setPropertyLandArea={setPropertyLandArea}
                        PropertyAddress={PropertyAddress} 
                        setPropertyAddress={setPropertyAddress}
                        propertyAvailavleFrom={propertyAvailavleFrom}
                        setPropertyAvailavleFrom={setPropertyAvailavleFrom}
                        propertyFlat={propertyFlat}
                        setPropertyFlat={setPropertyFlat}
                        propertyHouse={propertyHouse}
                        setPropertyHouse={setPropertyHouse}
                        propertyRoad={propertyRoad}
                        setPropertyRoad={setPropertyRoad}
                        propertyTotalFlat={propertyTotalFlat}
                        setPropertyTotalFlat={setPropertyTotalFlat}
                        contactPersonFlat={contactPersonFlat}
                        setContactPersonFlat={setContactPersonFlat}
                        postCode={postCode}
                        setPostCode={setPostCode}
                        propertyDescription={propertyDescription}
                        setPropertyDescription={setPropertyDescription}
                        videoUrl={videoUrl}
                        setVideoUrl={setVideoUrl}
                        contactWithMe={contactWithMe}
                        setContactWithMe={setContactWithMe}
                        contactPersonName={contactPersonName}
                        setContactPersonName={setContactPersonName}
                        contactPersonRelation={contactPersonRelation}
                        setContactPersonRelation={setContactPersonRelation}
                        contactPersonEmail={contactPersonEmail}
                        setContactPersonEmail={setContactPersonEmail}
                        contactPersonPhone={contactPersonPhone}
                        setContactPersonPhone={setContactPersonPhone}

                        formStep={formStep} 
                        completeFormStep={completeFormStep}
                    />
                </div>
            }

            {
                formStep >= 2 && 
                <div className={formStep === 2 ? 'd-block': 'd-none'}>
                    <SecondForm
                        propetyTypes={propetyTypes}
                        setPropertyTypes={setPropertyTypes}
                        propetyTypesCatagory={propetyTypesCatagory}
                        setPropertyTypesCatagory={setPropertyTypesCatagory}
                        propetySubTypes={propetySubTypes}
                        setPropertySubTypes={setPropertySubTypes}
                        propertyCatagories={propertyCatagories}
                        setPropertyCatagories={setPropertyCatagories}

                        formStep={formStep} 
                        completeFormStep={completeFormStep} 
                        goToPreStep={goToPreStep}
                    />
                </div>             
            }
            
            {
                formStep >= 3 && 
                <div className={formStep === 3 ? 'd-block': 'd-none'}>
                    <ThirdForm 
                        formStep={formStep} 
                        completeFormStep={completeFormStep}
                        goToPreStep={goToPreStep} 
                    />
                </div>             
            }

            {
                formStep >= 4 && 
                <div className={formStep === 4 ? 'd-block': 'd-none'}>
                    <FourForm
                        propertyAmount={propertyAmount}
                        setPropertyAmount={setPropertyAmount}
                        formStep={formStep} 
                        completeFormStep={completeFormStep} 
                        goToPreStep={goToPreStep}
                        amountPerSqft={amountPerSqft}
                        setAmountPerSqft={setAmountPerSqft}
                        priceNagotiable={priceNagotiable}
                        setPriceNegotiable={setPriceNegotiable}
                    />
                </div> 
            }
            </form>
        </>
    )
}

export default MyListingForm