import React from 'react';
import './SignUp.css';
import modalBanner from '../../../../../Assets/image/modal/modal-banner.png';
import modalLogo from '../../../../../Assets/logo.svg';

function SignUp({showModal, setShowModal}) {
  return (
    <section className="sign-in-up">
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
                        <div className='create-one'>
                        <div className="rightContent">
                            <h6>Enter your phone number</h6>
                            <form method="post" >
                            <div className="grid-1 authFormInput">
                                        <div className="form-floation mb-4">
                                            <input type="text" name="mobile_number" className="form-control" placeholder="your phone number" />
                                            <label htmlFor="phoneNumber">Your Phone Number</label>
                                        </div>
                                        <label className="error" htmlFor="mobile_number"></label>
                                        <label htmlFor=""></label>
                                    </div>
                            </form>


                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignUp