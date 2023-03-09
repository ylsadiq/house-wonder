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
                    <h1>Welcome!</h1>
                    <h6>Register for a new account</h6>
                    <form method="post" >
                        <div className="grid-1">
                            <div className="form-floation">
                                <input type="text" name="mobile_number" className="form-control" placeholder="your phone number" />
                                <label htmlFor="phoneNumber">Your Name</label>
                            </div>
                            <div className="form-floation">
                                <input type="email" name="mobile_number" className="form-control" placeholder="your phone number" />
                                <label htmlFor="phoneNumber">Your Email</label>
                            </div>
                            <div className="form-floation">
                                <input
                                    type="password"
                                    className="form-control password"
                                    placeholder="password"
                                />
                                <label htmlFor="password">Your Password</label>
                                <span className="passwordToglerBtn">
                                    <img src="https://bastu-new-ui.netlify.app/assets/images/modals/eyeicon.svg" alt="" /></span>
                            </div>
                            <div className="form-floation mb-5">
                                <input
                                    type="password2"
                                    className="form-control password"
                                    placeholder="Confirm password"
                                />
                                <label htmlFor="password2">Confirm Password</label>
                                <span className="passwordToglerBtn">
                                    <img src="https://bastu.com.bd/beta-thirteen/frontend/new_ui/assets/images/modals/eyeicon.svg" alt="" /></span>
                            </div>
                        </div>
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