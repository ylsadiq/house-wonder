import React from 'react';
import './SignUp.css';
import modalBanner from '../../../../../Assets/image/modal/modal-banner.png';
import eye from '../../../../../Assets/image/modal/eyeicon.svg';
import modalLogo from '../../../../../Assets/logo.svg';

function SignUp({ setShowSignIn, setShowSignUp }) {
    return (
        <div className="modal-body">
            <div className="sideImage">
                <img src={modalBanner} alt="" />
                <div></div>
                <img className="modalLogoImg" src={modalLogo} alt="" />
            </div>
            <div className='create-one'>
                <div className="rightContent">
                    <h6>Enter your phone number</h6>
                    <form method="post" >
                        <div className="grid-1">
                            <div className="form-floation mb-5">
                                <input type="text" name="mobile_number" className="form-control" placeholder="your phone number" />
                                <label htmlFor="phoneNumber">Your Phone Number</label>
                            </div>

                        </div>
                        <button className="btn btn-dark signup-btn">send</button>
                        <div className="grid-1 haveAccount">
                            <p>Have an account?<span onClick={() => {
                                setShowSignIn(true)
                                setShowSignUp(false)
                            }}>Log in</span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp