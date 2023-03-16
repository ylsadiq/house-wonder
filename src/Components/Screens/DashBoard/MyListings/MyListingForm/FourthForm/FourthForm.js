import React from 'react';
import { Link } from 'react-router-dom';
import FormHeading from '../FormHeading/FormHeading';
import './FourthForm.css'

function FourthForm({ setPropertyAmount,  setPriceNegotiable }) {

    return (
        <div 
        className="my-listing-second-form">
            <div 
            className="container-fluid">
                <FormHeading
                    formstepFirst='step'
                    formNumber='4'
                    formDivide='of'
                    formStepLast='4'
                    formTitle='Finally, how much do you want'
                    formsecondTitle="to sell your property for?"
                />
                    <div 
                    className="grid-1">
                        <div 
                        className="form-floating">
                            <div 
                            className="form-floation mb-4 mt-2">
                                <input 
                                onChange={(e) => setPropertyAmount(e.target.value)} 
                                type="text" name="property_header" 
                                className="form-control" 
                                id='propHeader' 
                                placeholder="Property Rent" />
                                <label htmlFor="propHeader">
                                Please enter price amount for your property (৳)
                                </label>
                            </div>
                        </div>
                    </div>

                    <div 
                    className="grid-1 pb-4">
                        <div 
                        className="auth-form-start">
                            <div 
                            className="auth-form-input">
                                <input type="radio" 
                                id="representative" 
                                name="mylisting1" 
                                value="representative" />
                                <label 
                                htmlFor="representative"
                                >
                                Representative
                                </label>
                            </div>
                            <div 
                            className="auth-form-input">
                                <input 
                                type="radio" 
                                id="agent" 
                                name="mylisting1" 
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
                        Is the price negotiable?
                        </p>
                        <div 
                        className="auth-form">
                            <div 
                            className="auth-form-input">
                                <input 
                                onChange={(e) => setPriceNegotiable(e.target.value)} 
                                type="radio" 
                                id="negotiable"
                                name="mylisting3" 
                                />
                                <label 
                                htmlFor="negotiable">
                                Negotiable
                                </label>
                            </div>
                            <div 
                            className="auth-form-input">
                                <input 
                                onChange={(e) => setPriceNegotiable(e.target.value)} 
                                type="radio" 
                                id="nonnegotiable" 
                                name="mylisting3" 
                                />
                                <label 
                                htmlFor="nonnegotiable">
                                Non-negotiable
                                </label>
                            </div>
                        </div>
                    </div>

                    <div 
                    className="grid-1 pb-4">
                        <div 
                        className="grid-1">
                            <div 
                            className="check-box">
                                <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="horns" 
                                name="horns" 
                                />
                                <label 
                                className="accept"
                                htmlFor="representative">
                                Accept Terms & 
                                <Link 
                                to="" 
                                className="condition">
                                Conditions
                                </Link>
                                </label>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default FourthForm