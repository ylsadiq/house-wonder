import React, { useState } from 'react';
import './SignIn.css';
import modalBanner from '../../../../Assets/image/modal/modal-banner.png';
import modalLogo from '../../../../Assets/image/bastu-login-logo.svg';
import SignUp from './SignUp/SignUp';

function SignIn({showModal, setShowModal}) {
    const [showSignUp, setShowSignUp] = useState(false);
    
    const handleSignUp = (e) =>{
        e.preventDefault();
        setShowSignUp((showSignUp) => !showSignUp);
     }
  return (
    <section className="sign-in">
        <div className="container-fluid">
            <div className={`${showModal} ? "modal fade show" : 'modal fade'`}>
                <div className={` ${showModal ? "modal-dialog" : null}`}>
                    <div className="modal-content authModalcontent">
                    <div className="modal-button">
                    <button onClick={() => {setShowModal(false)}}>
                        <img src='https://bastu.com.bd/beta-thirteen/frontend/new_ui/assets/images/modals/close%20icon.svg' alt="" />
                    </button>
                    </div>
                        <div className="modal-body">
                        <div className="sideImage">
                            <img src={modalBanner} alt="" />
                            <div></div>
                            <img className="modalLogoImg" src={modalLogo} alt="" />
                        </div>
                        <div className="right-modal">
                        <div className="rightContent">
                            <h1>Welcome!</h1>
                            <h6 className="loginTxt">Log In to your account</h6>
                            <form method="post">
                                {/* <input type="hidden" name="_token" value="g5JtVGdfjVpkSAbP4vlYT58QNNqHEbhJ5MaCFVky" /> */}
                                <div className="login-input">
                                    <div className="grid-1 authFormInput">
                                        <div className="form-floation mb-4">
                                            <input type="text" name="mobile_number" className="form-control" placeholder="+8801883839298" />
                                            <label htmlFor="phoneNumber">Your Phone Number</label>
                                        </div>
                                        <label className="error" htmlFor="mobile_number"></label>
                                        <label htmlFor=""></label>
                                    </div>

                                    <div className="authFormInput">
                                        <div className="form-floation mb-5">
                                            <input type="password" className="form-control password" name="password" placeholder="password" />
                                            <label htmlFor="password">Your Password</label>
                                            <span className="passwordToglerBtn">
                                                <img src="https://bastu.com.bd/beta-thirteen/frontend/new_ui/assets/images/modals/eyeicon.svg" alt="" /></span>
                                        </div>

                                        <label id="password-error" className="error mb-3 text-danger"></label>
                                        <label id="all_error" className="mb-5 text-danger"></label>
                                    </div>
                                    <div className="grid-2 login-btn">
                                        <button type="submit" className="btn btn-dark">Log In</button>
                                        <button type="button" className="btn">forgot password?</button>
                                    </div>
                                    


                                    <div className="grid-1 haveAccount">
                                        <p>Don’t have any account?<span onClick={handleSignUp}>Create one!</span>
                                        </p>
                                    </div>
                                    

                                </div>

                            </form>


                        </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        {showSignUp && <SignUp showModal={showModal} setShowModal={setShowModal}/>}
        </div>
    </section>
  )
}

export default SignIn