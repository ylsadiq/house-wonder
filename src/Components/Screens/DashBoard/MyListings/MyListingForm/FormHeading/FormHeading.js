import React from 'react';
import './FormHeading.css'

function FormHeading({ screenNumber, formTitle, formUser, formsecondTitle }) {
    return (
        <div>
            <div className="my-listing-step">
                <div className="progress-count">
                    <h6>Step {screenNumber} of 4</h6>
                </div>
                <div className="progress form-progress mb-4">
                    <div className="progress-bar form-prog"></div>
                </div>
                <div className="form-title margin_top">
                    <span>{formTitle}</span>
                    <span className='second-line'>{formsecondTitle}</span>
                </div>
            </div>
        </div>
    )
}

export default FormHeading