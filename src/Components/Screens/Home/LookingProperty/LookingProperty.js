import { useState } from 'react';
import lookingFor from '../../../../Assets/home/what are you looking for-image.png'
import PostRequirements from './PostRequirements/PostRequirements';

import './LookingProperty.css';
import Modal from '../../../Partials/Section/Modal/Modal';

function LookingProperty() {

    const [showModal, setShowModal] = useState(false);
    const [postRequirements, setPostRequirements] = useState(false);

    function handleClose() {
        setShowModal(false);
        setPostRequirements(false);
    }


    return (
        <>
            <section className="Looking-property">
                <div className="container-fluid">
                    <div className="custom-container">
                        <div className="looking-content">
                            <div className="looking-content-img">
                                <img src={lookingFor} alt="" />
                            </div>
                            <div className="looking-content-details">
                                <h3>What are you looking for?</h3>
                                <p>Bastu helps you sell your home faster and for more money by covering the cost of home
                                    improvement services — no upfront fees or interest charged.</p>
                                <button
                                    className="btn btn-light btn-outline"
                                    onClick={() => {
                                        setShowModal(true);
                                        setPostRequirements(true);
                                    }}
                                >
                                    Post your requirement
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showModal &&
                <Modal
                    handleClose={handleClose}
                    modalHeading='Post Your Requirements'
                >
                    {postRequirements &&
                        <PostRequirements
                            handleClose={handleClose}
                        />
                    }
                </Modal>
            }
        </>
    )
}

export default LookingProperty