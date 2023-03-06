import React from 'react'
import './BuyRequest.css'
function BuyRequest({handleClose}) {
  return (
    <form className='post_requirement_form' >
            <div className="grid-2">
                <div>
                    <h6 className="form-title-info">Personal Info</h6>

                    <div className="grid-1">
                    <div className="form-floating">
                        <div className="form-floation mb-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            // value={name}
                            // onChange={e => setName(e.target.value)}
                        />
                        <label>Your Name</label>
                        </div>
                        
                    </div>
                    </div>

                    <div className="grid-1">
                    <div className="form-floating">
                        <div className="form-floation mb-5">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                            // value={name}
                            // onChange={e => setName(e.target.value)}
                        />
                        <label>Your Email</label>
                        </div>
                        
                    </div>
                    </div>

                    <div className="grid-1">
                    <div className="form-floating">
                        <div className="form-floation mb-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Address"
                            // value={name}
                            // onChange={e => setName(e.target.value)}
                        />
                        <label>Your Address</label>
                        </div>
                        
                    </div>
                    </div>

                    <div className="grid-1">
                    <div className="form-floating">
                        <div className="form-floation mb-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Phone Number"
                            // value={phone}
                            // onChange={e => setPhone(e.target.value)}
                        />
                        <label>Your Phone Number</label>
                        </div>
                        
                    </div>
                    </div>

                    <div className="form-floation mb-5">
                                <textarea
                                    className="form-control"
                                    placeholder="Additional information"
                                    spellCheck="false"
                                    // value={message}
                                    // onChange={e => setMessage(e.target.value)}
                                >

                                </textarea>
                                <label htmlFor="">Additional information</label>
                            </div>
                </div>


                <div>
                    <h6 className="form-title-info">Property Info</h6>
                   
                    <div className="grid-1">
                    <div className="form-floating">
                        <div className="form-floation mb-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Occupation"
                            // value={name}
                            // onChange={e => setName(e.target.value)}
                        />
                        <label>Your Occupation</label>
                        </div>
                        
                    </div>
                    </div>

                    <div class="form-floation mb-5">
                        <select class="form-select"
                        
                        >
                            <option value="Select marital status">Select marital status</option>
                            <option value="Married">Married</option>
                            <option value="Bachelor">Bachelor</option>
                        </select>
                            <label htmlFor="floatingSelect">Martal Status</label>
                    </div>

                    <div className="grid-1">
                    <div className="form-floating">
                        <div className="form-floation mb-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Number of Family Members"
                            // value={name}
                            // onChange={e => setName(e.target.value)}
                        />
                        <label>Number of Family Members</label>
                        </div>
                        
                    </div>
                    </div>

                    <div className="grid-1">
                    <div className="form-floating">
                        <div className="form-floation mb-5">
                        <input
                            type="date"
                            className="form-control"
                            placeholder="When do you need the property?"
                            // value={name}
                            // onChange={e => setName(e.target.value)}
                        />
                        <label> When do you need the property?</label>
                        </div>
                        
                    </div>
                    </div>

                    
             
                </div>
            </div>
            <div className="my-profile-btn mt-2">
                <button className="btn btn-dark" type='submit'>submit buy Request</button>
            </div>
        </form>
  )
}

export default BuyRequest