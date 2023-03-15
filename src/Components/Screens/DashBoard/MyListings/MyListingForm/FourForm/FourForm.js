import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PROPERTY_PROPERTTIES_API } from '../../../../../../Utilities/APIs/APIs';
import FormHeading from '../FormHeading/FormHeading';
import './FourForm.css'

function FourForm({formStep, completeFormStep, goToPreStep }) {
    const [propertyAmount, setPropertyAmount] = useState(null);
    const [amountPerSqft, setAmountPerSqft] = useState(null);
    const [priceNagotiable, setPriceNegotiable] = useState(null);

    const { consumer } = useSelector(state => state.auth)

    async function handleSubmit(e) {
        e.preventDefault()
    const config = {
      headers: {
        Authorization: `Bearer ${consumer.token}`
      }
    }
    
    const itemData = new FormData()
        itemData.append('propertyAmount', propertyAmount)
        itemData.append('priceNagotiable', priceNagotiable)
        // itemData.append('propetySubTypes', propetySubTypes)
        const finalForm = {propertyAmount, priceNagotiable}
        console.log(finalForm);
        const response = await axios.post(PROPERTY_PROPERTTIES_API, finalForm, config)
        
        }

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
  return (
    <div className="my-listing-second-form">
            <div className="container-fluid">
                <FormHeading 
                formstepFirst='step'
                formNumber='4'
                formDivide='of'
                formStepLast='4'
                formTitle='Finally, how much do you want'
                formsecondTitle="to sell your property for?"
                />
            <form action="" onSubmit={handleSubmit}>
            <div className="grid-1">
                        <div class="form-floating">
                            <div class="form-floation mb-4 mt-2">
                                <input onChange={(e) => setPropertyAmount(e.target.value)} type="text" name="property_header" class="form-control" id='propHeader' placeholder="Property Rent" />
                                <label htmlFor="propHeader">Please enter price amount for your property (৳)</label>
                            </div>
                        </div>
                    </div>

                        <div className="grid-1 pb-4">
                            <div className="auth-form-start">
                                <div className="auth-form-input">
                                    <input type="radio" id="representative3" name="mylisting2" value="representative3" />
                                    <label htmlFor="representative3">Representative</label>
                                </div>
                                <div className="auth-form-input">
                                    <input type="radio" id="agent" name="mylisting2" value="agent" />
                                    <label htmlFor="agent">Agent</label>
                                </div>
                            </div>
                        </div>

                        <div className="ratio-box">
                        <p className='owner-title'>Is the price negotiable?</p>
                        <div className="auth-form">
                            <div className="auth-form-input">
                                <input onChange={(e) => setPriceNegotiable(e.target.value)} type="radio" id="representative2" name="mylisting3" value="representative2" />
                                <label htmlFor="representative2">Negotiable</label>
                            </div>
                            <div className="auth-form-input">
                                <input onChange={(e) => setPriceNegotiable(e.target.value)} type="radio" id="agent" name="mylisting3" value="agent" />
                                <label htmlFor="agent">Non-negotiable</label>
                            </div>
                        </div>
                    </div>

                    <div className="grid-1 pb-4">
                            {/* <div className="auth-form-start">
                                <div className="auth-form-input">
                                <div class="check-box"><input type="checkbox" class="form-check-input" id="scales" name="scales" value="false" />
                                <label htmlFor="representative">Accept Terms & <Link to="" className="condition">Conditions</Link></label>
                                </div>
                                    
                                </div>
                            </div> */}
                            <div class="grid-1">
                                <div class="check-box">
                                    <input type="checkbox" class="form-check-input" id="horns" name="horns" />
                            <label htmlFor="representative">Accept Terms & <Link to="" className="condition">Conditions</Link></label>
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

export default FourForm