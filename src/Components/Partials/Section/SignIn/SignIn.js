import React from 'react';
import './SignIn.css';

function SignIn({showModal, setShowModal}) {
  return (
    <section className="sign-in">
        <div className="container-fluid">
            <div className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content authModalcontent">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur cumque quod sunt eius voluptate pariatur, ullam provident, dignissimos eum iste modi deserunt nesciunt blanditiis quas eveniet, quidem laboriosam vel consequatur?</p>
                    </div>
                    <div className="modal-button">
                    <button onClick={() => {setShowModal(false)}}>
                        X
                        {/* <img src= alt="" /> */}
                    </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignIn