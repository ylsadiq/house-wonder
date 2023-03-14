import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { PROPERTY_PROPERTTIES_API } from '../../../../../Utilities/APIs/APIs';
import FirstForm from './FirstForm/FirstForm';
import SecondForm from './SecondForm/SecondForm'
import ThirdForm from './ThirdForm/ThirdForm'
import './MyListingForm.css'

function MyListingForm() {
    

    const [formStep, setFormStep] = useState(1);
    const MAX_STEPS = 4;
    const { consumer } = useSelector(state => state.auth)

    const completeFormStep = () =>{
        setFormStep(cur => cur + 1)
      }
    const goToPreStep = () =>{
        setFormStep(cur => cur - 1)
      }

    
    return (
        <>
            {formStep >= 1 ? <div className={formStep === 1 ? 'd-block': 'd-none'}>
            <FirstForm formStep={formStep} completeFormStep={completeFormStep}/>
            </div> : null}

            {formStep >= 2 ? <div className={formStep === 2 ? 'd-block': 'd-none'}>
            <SecondForm formStep={formStep} completeFormStep={completeFormStep} goToPreStep={goToPreStep}/>
            </div> : null}
            
            {formStep >= 3 ? <div className={formStep === 3 ? 'd-block': 'd-none'}>
            <ThirdForm formStep={formStep} completeFormStep={completeFormStep} goToPreStep={goToPreStep} />
            </div> : null}
        </>
    )
}

export default MyListingForm