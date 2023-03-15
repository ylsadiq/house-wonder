import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { PROPERTY_PROPERTTIES_API } from '../../../../../Utilities/APIs/APIs';
import FirstForm from './FirstForm/FirstForm';
import SecondForm from './SecondForm/SecondForm'
import ThirdForm from './ThirdForm/ThirdForm'
import './MyListingForm.css'
import FourForm from './FourForm/FourForm';

function MyListingForm() {
    
    // form field states
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

    // form steps section
    const [formStep, setFormStep] = useState(1);
    const MAX_STEPS = 4;

    const completeFormStep = () =>{
        setFormStep(cur => cur + 1)
      }
    const goToPreStep = () =>{
        setFormStep(cur => cur - 1)
      }

    
    return (
        <>
            {
                formStep >= 1 &&
                <div className={formStep === 1 ? 'd-block': 'd-none'}>
                    <FirstForm 
                        formStep={formStep} 
                        completeFormStep={completeFormStep}
                    />
                </div>
            }

            {
                formStep >= 2 && 
                <div className={formStep === 2 ? 'd-block': 'd-none'}>
                    <SecondForm 
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
                        formStep={formStep} 
                        completeFormStep={completeFormStep} 
                        goToPreStep={goToPreStep}
                    />
                </div> 
            }
        </>
    )
}

export default MyListingForm