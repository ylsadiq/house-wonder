import React from 'react';
import './FormHeading.css'

function FormHeading({formstepFirst, formNumber, formDivide, formStepLast, formTitle, formUser, formsecondTitle}) {
  return (
            <div className="my-listing-step">
                <div className="progress-count">
                    <h6>{formstepFirst} <span>{formNumber}</span> {formDivide} <span> {formStepLast}</span></h6>
                </div>
                <div className="progress form-progress mb-4">
                    <div className="progress-bar form-prog"></div>
                </div>
                <div className="form-title margin_top">
                    {formTitle}<span>{formUser}</span>
                    <span className='second-line'>{formsecondTitle}</span>
                </div>
                </div>
  )
}

export default FormHeading