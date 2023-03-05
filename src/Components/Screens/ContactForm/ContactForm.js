import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTACTS_API } from '../../../Utilities/APIs/APIs';
import './ContactForm.css'

function ContactForm() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    console.log(name)
    const [email, setEmail] = useState('');
    console.log(email)
    const [regarding, setRegarding] = useState('');
    console.log(regarding)
    const [phone, setPhone] = useState('');
    console.log(phone)
    const [message, setMessage] = useState('');
    console.log(message)

    async function handleSubmit(e) {

        e.preventDefault()

        const itemData = { name, email, regarding, phone, message }

        const response = await axios.post(CONTACTS_API, itemData)

        if (response.status === 200) {
            setName('')
            setEmail('')
            setRegarding('')
            setPhone('')
            setMessage('')

            navigate('/')
        }

    }

    return (
        <section className="contact-us">
            <div className="container-fluid">
                <div className="contact-container">
                    <div className="contact-details">
                        <h1 className="section-title pb-1">Contact Us</h1>
                        <p className="section-description">With a question or concern</p>
                    </div>
                    <form className='contact-info' onSubmit={handleSubmit}>
                        <div className="contact-input">
                            <div className="form-floation">
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='YourName'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <label htmlFor="Name">Your Name</label>
                            </div>
                            <div className="form-floation">
                                <input
                                    type="email"
                                    className='form-control'
                                    placeholder='YourEmail'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <label htmlFor="Name">Your Email</label>
                                {/* <p className="error" htmlFor="contact_email">Please enter a valid email address.</p> */}
                            </div>
                            <div className="form-floation">
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='YourPhone'
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                                <label htmlFor="Name">Your Phone</label>
                                {/* <p className="error" htmlFor="contact_email">Please enter at least 11 characters.</p> */}
                            </div>
                            
                            <div className="form-floation">
                                <select
                                    className="form-select"
                                    name="contact_regarding"
                                    value={regarding}
                                    onChange={e => setRegarding(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option value="property">Property</option>
                                    <option value="package">Package</option>
                                    <option value="service">Service</option>
                                </select>
                            </div>
                            <div className="form-floation">
                                <textarea
                                    className="form-control"
                                    placeholder="Your Message"
                                    spellCheck="false"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                ></textarea>
                                <label htmlFor="">Your Massage</label>
                            </div>
                        </div>
                        <button type='submit' className="btn btn-dark">Send</button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default ContactForm