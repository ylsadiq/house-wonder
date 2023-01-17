import React from 'react';
import './ContactForm.css'

function ContactForm() {
  return (
    <section className="contact-us">
        <div className="container-fluid">
        <div className="contact-container">
            <div className="contact-details">
            <h1 className="section-title pb-1">Contact Us</h1>
            <p className="section-description">With a question or conern</p>
            </div>
            <form className='contact-info'>
                <div className="contact-input">
                    <div className="form-floation">
                        <input type="text" className='form-control' placeholder='yourName'/>
                        <label htmlFor="Name">yourName</label>
                    </div>
                    <div className="form-floation">
                        <input type="text" className='form-control' placeholder='yourEmail'/>
                        <label htmlFor="Name">yourEmail</label>
                        {/* <p className="error" htmlFor="contact_email">Please enter a valid email address.</p> */}
                    </div>
                    <div className="form-floation">
                        <input type="text" className='form-control' placeholder='yourPhone'/>
                        <label htmlFor="Name">yourPhone</label>
                        {/* <p className="error" htmlFor="contact_email">Please enter at least 11 characters.</p> */}
                    </div>
                    <div className="form-floation">
                    <select className="form-select" name="contact_regarding">
                                <option value="">Select</option>
                                <option value="property">Property</option>
                                <option value="package">Package</option>
                                <option value="service">Service</option>
                            </select>
                    </div>
                    <div className="form-floation">
                    <textarea className="form-control" placeholder="Your Message" spellCheck="false"></textarea>
                    <label htmlFor="">Your Massage</label>
                    </div>
                </div>
                <button className="btn btn-dark">Send</button>
            </form>
        </div>
        </div>
        
    </section>
  )
}

export default ContactForm