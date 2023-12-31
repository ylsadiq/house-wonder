import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { PROPERTY_PROPERTIES_API } from '../../../../../Utilities/APIs/APIs';
import FirstForm from './FirstForm/FirstForm';
import SecondForm from './SecondForm/SecondForm'
import ThirdForm from './ThirdForm/ThirdForm'
import FourthForm from './FourthForm/FourthForm';
import FormHeading from './FormHeading/FormHeading';
import './MyListingForm.css'

function MyListingForm() {

    // Screen Number Section
    const [screenNumber, setScreenNumber] = useState(1);

    function clickNextButton () {
        if (screenNumber <= 3) {
            setScreenNumber(cur => cur + 1)
        }
        if (screenNumber === 4) {
            handleSubmit()
        }
    }
    function clickPreviousButton () {
        setScreenNumber(cur => cur - 1)
    }

    // form field states
    // first form states
    const [ownerAcquisition, setOwnerAcquisition] = useState(null);
    const [acquisition, setAcquisition] = useState(null);
    // Property Info
    const [propertyHeader, setPropertyHeader] = useState(null);
    const [properyTypeCityArea, setProperyTypeCityArea] = useState(null);
    const [propertyStreetAddress, setPropertyStreetAddress] = useState(null);
    const [propertyFlat, setPropertyFlat] = useState(null);
    const [propertyHouse, setPropertyHouse] = useState(null);
    const [propertyRoad, setPropertyRoad] = useState(null);
    const [propertyTotalFloor, setPropertyTotalFloor] = useState(null);
    const [contactPersonFloor, setContactPersonFloor] = useState(null);
    const [postCode, setPostCode] = useState(null);
    const [propertyDescription, setPropertyDescription] = useState(null);
    const [videoUrl, setVideoUrl] = useState(null);

    const [contactWithMe, setContactWithMe] = useState('');
    // Asign Contact Person
    const [contactPersonName, setContactPersonName] = useState(null);
    const [contactPersonRelation, setContactPersonRelation] = useState(null);
    const [contactPersonEmail, setContactPersonEmail] = useState(null);
    const [contactPersonPhone, setContactPersonPhone] = useState(null);

    const [userPostAs, setUserPostAs] = useState(null);

    const [propertyPerspective, setpropertyPerspective] = useState(null);
    const [readyToMove, setReadyToMove] = useState(null);
    const [PropertyLandArea, setPropertyLandArea] = useState(null);
    const [PropertyAddress, setPropertyAddress] = useState(null);
    const [propertyAvailavleFrom, setPropertyAvailavleFrom] = useState(null);
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


    

    const { consumer } = useSelector(state => state.auth)

    async function handleSubmit() {

        const config = {
          headers: {
            Authorization: `Bearer ${consumer.token}`
          }
        }

        const propertyData = new FormData()

        propertyData.append('userPostAs', userPostAs)
        propertyData.append('acquisition', acquisition)
        propertyData.append('propertyHeader', propertyHeader)
        propertyData.append('propertyStreetAddress', propertyStreetAddress)
        propertyData.append('PropertyLandArea', PropertyLandArea)
        propertyData.append('PropertyAddress', PropertyAddress)
        propertyData.append('propertyFlat', propertyFlat)
        propertyData.append('propertyHouse', propertyHouse)
        propertyData.append('propertyRoad', propertyRoad)
        propertyData.append('readyToMove', readyToMove)
        propertyData.append('propertyAvailavleFrom', propertyAvailavleFrom)
        propertyData.append('contactPersonFloor', contactPersonFloor)
        propertyData.append('propertyTotalFloor', propertyTotalFloor)
        propertyData.append('postCode', postCode)
        propertyData.append('propertyDescription', propertyDescription)
        propertyData.append('contactPersonName', contactPersonName)
        propertyData.append('contactPersonRelation', contactPersonRelation)
        propertyData.append('videoUrl', videoUrl)
        propertyData.append('contactWithMe', contactWithMe)
        propertyData.append('contactPersonEmail', contactPersonEmail)
        propertyData.append('contactPersonPhone', contactPersonPhone)
        propertyData.append('propetyTypes', propetyTypes)
        propertyData.append('propertyCatagories', propertyCatagories)
        propertyData.append('propertyAmount', propertyAmount)
        propertyData.append('priceNagotiable', priceNagotiable)
        console.log(propertyData);

        const response = await axios.post(PROPERTY_PROPERTIES_API, propertyData, config)
        console.log(response)
    }

    const titles = [
        {
            title: 'Hi! ' + consumer?.name,
            secondTitle: "Let's start posting your properties"
        },
        {
            title: 'Great! ',
            secondTitle: "Now tell us more about your property"
        },
        {
            title: 'Great ',
            secondTitle: "Now let’s upload some photos"
        },
        {
            title: 'Finally, ',
            secondTitle: "how much do you want to sell your property for?"
        },
    ]

    return (
        <>
           <FormHeading
                    screenNumber={screenNumber}
                    formTitle={titles[screenNumber-1].title}
                    formsecondTitle={titles[screenNumber-1].secondTitle}
            />

            <form encType='multipart/form-data'>
                {
                    screenNumber === 1 &&
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
                            propertyTotalFloor={propertyTotalFloor}
                            setPropertyTotalFloor={setPropertyTotalFloor}
                            contactPersonFloor={contactPersonFloor}
                            setContactPersonFloor={setContactPersonFloor}
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
                            screenNumber={screenNumber}
                        />
                }

                {
                    screenNumber === 2 && 
                        <SecondForm
                            propetyTypes={propetyTypes}
                            setPropertyTypes={setPropertyTypes}
                            propetyTypesCatagory={propetyTypesCatagory}
                            setPropertyTypesCatagory={setPropertyTypesCatagory}
                            propetySubTypes={propetySubTypes}
                            setPropertySubTypes={setPropertySubTypes}
                            propertyCatagories={propertyCatagories}
                            setPropertyCatagories={setPropertyCatagories}
                            screenNumber={screenNumber}
                        />
                    
                }

                {
                    screenNumber === 3 &&
                        <ThirdForm
                            screenNumber={screenNumber}
                        />
                    
                }

                {
                    screenNumber === 4 &&
                        <FourthForm
                            propertyAmount={propertyAmount}
                            setPropertyAmount={setPropertyAmount}
                            screenNumber={screenNumber}
                            amountPerSqft={amountPerSqft}
                            setAmountPerSqft={setAmountPerSqft}
                            priceNagotiable={priceNagotiable}
                            setPriceNegotiable={setPriceNegotiable}
                        />
                }

                <div className={screenNumber === 1 ? "d-end" : "second-form"}>
                    {
                        screenNumber > 1 && screenNumber <= 4 &&
                        <button
                            className="btn btn-outline-dark listing-btn"
                            onClick={clickPreviousButton}
                        >
                            Go back
                        </button>
                    }

                    <button 
                        type="button"
                        className="btn btn-dark mb-4 mt-2 listing-btn"
                        onClick={clickNextButton}
                    >
                        {screenNumber <= 3 ? 'Continue' : 'Finish'}
                    </button>

                </div>

            </form>
        </>
    )
}

export default MyListingForm