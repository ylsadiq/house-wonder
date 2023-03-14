import React from 'react';
import { Link } from 'react-router-dom';
import FormHeading from '../FormHeading/FormHeading';
import './FourForm.css'

function FourForm({formStep, completeFormStep, goToPreStep }) {

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
            <form action="">
            <div className="grid-1">
                        <div class="form-floating">
                            <div class="form-floation mb-4 mt-2">
                                <input type="text" name="property_header" class="form-control" id='propHeader' placeholder="Property Rent" />
                                <label htmlFor="propHeader">Please enter price amount for your property (৳)</label>
                            </div>
                        </div>
                    </div>

                        <div className="grid-1 pb-4">
                            <div className="auth-form-start">
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
                        <p className='owner-title'>Is the price negotiable?</p>
                        <div className="auth-form">
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

                    <div className="grid-1 pb-4">
                            <div className="auth-form-start">
                                <div className="auth-form-input">
                                    <input type="radio" id="representative" name="mylisting" value="representative" />
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