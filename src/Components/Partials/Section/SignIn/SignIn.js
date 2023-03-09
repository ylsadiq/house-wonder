import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import modalBanner from '../../../../Assets/image/modal/modal-banner.png';
import modalLogo from '../../../../Assets/image/bastu-login-logo.svg';
// import SignUp from './SignUp/SignUp';
import { consumerLogin, reset } from '../../../../Redux/Features/Auth/authSlice';

import './SignIn.css';

function SignIn({ showModal, setShowModal, handleClose, setShowSignIn, setShowSignUp }) {

    const { consumer, isSuccess } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if ((isSuccess === true) || (consumer !== null)) {
            navigate('/dashboard');
            dispatch(reset());
            // handleClose();
        }


    }, [consumer, isSuccess, dispatch, navigate])

    async function handleSubmit(e) {

        e.preventDefault();

        const consumerData = { email, password };

        dispatch(consumerLogin(consumerData));

    }

    // const handleSignUp = (e) => {
    //     e.preventDefault();
    //     setShowSignUp((showSignUp) => !showSignUp);
    // }

    return (
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
                    <form onSubmit={handleSubmit}>
                        {/* <input type="hidden" name="_token" value="g5JtVGdfjVpkSAbP4vlYT58QNNqHEbhJ5MaCFVky" /> */}
                        <div className="login-input">
                            <div className="grid-1">
                                <div className="form-floation mb-4">
                                    <input type="text" />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="phoneNumber">Your Email</label>
                                </div>
                                <label className="error" htmlFor="mobile_number"></label>
                                <label htmlFor=""></label>
                            </div>

                            <div className="authFormInput">
                                <div className="form-floation mb-5">
                                    <input
                                        type="password"
                                        className="form-control password"
                                        placeholder="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
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
                                <p>Don’t have any account?<span onClick={()=>{
                                    setShowSignIn(false)
                                    setShowSignUp(true)
                                }}>Create one!</span>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn