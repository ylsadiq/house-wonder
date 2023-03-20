import React, { useState } from "react";
import location from "../../../../Assets/home/location icon.svg";
import share from "../../../../Assets/icon/fi_share-2.svg";
import print from "../../../../Assets/icon/u_print.svg";
import heart from "../../../../Assets/icon/u_heart.svg";
import plus from "../../../../Assets/icon/fi_plus-square.svg";
import user from "../../../../Assets/image/profile/agentImage.png";
import arrow from "../../../../Assets/home/arrowDown.svg";
import phone from "../../../../Assets/home/phoneAltBox.svg";
import email from "../../../../Assets/home/email-box.svg";
import FeaturedProperties from "../../Home/FeaturedProperties/FeaturedProperties";
import BuySlider from "../BuySlider.js/BuySlider";

import "./BuyDetails.css";
import { useSelector } from "react-redux";
import SignIn from "../../../Partials/Section/SignIn/SignIn";
import SignUp from "../../../Partials/Section/SignIn/SignUp/SignUp";
import Modal from "../../../Partials/Section/Modal/Modal";
import BuyRequestForm from "../BuyRequestForm/BuyRequestForm";

function BuyDetails() {

  const { consumer } = useSelector((state) => state.auth);

  const [showModal, setShowModal] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showBuyRequestForm, setShowBuyRequestForm] = useState(false);

  function handleClose() {
    setShowModal(false);
    setShowSignIn(false);
    setShowSignUp(false);
    setShowBuyRequestForm(false);
  }


  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown)
  }

  return (

    <>
      <section className="buy-details">
        <div className="container-fluid">
          <div className="buy-details-content">
            <div className="buy-details-container">
              <>
                <div className="buy-details-left">
                  <div className="location">
                    <img src={location} alt="" />
                    <p className="location-name">asfdas</p>
                  </div>
                  <div className="porperty-deal">
                    <h2 className="propery-name">AWRRF</h2>
                    <p className="propery-id">ID: #bb167686</p>
                  </div>

                  <>
                    <BuySlider />
                  </>

                  <div className="info-header">
                    <div className="property-magerment">
                      <ul>
                        <li>
                          <span>4 </span> Bed
                        </li>
                        <li>
                          <span>5</span> Bath
                        </li>
                        <li>
                          <span>2300</span> sqft.
                        </li>
                        <li>
                          <span>1</span> bedRoom.
                        </li>
                      </ul>
                      <div className="porpery-icons-btn">
                        <button>
                          <img src={share} alt="" />
                        </button>
                        <button>
                          <img src={print} alt="" />
                        </button>
                        <button>
                          <img src={heart} alt="" />
                        </button>
                        <button>
                          <img src={plus} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid-1 pb-4">
                    <p className="porpery-details">vbhmghjfg</p>
                  </div>
                  <div className="properties-box">
                    <div className="grid-1">
                      <h3>Property Features</h3>
                    </div>
                    <div className="properties-items">
                      <div className="property">
                        <h4>1</h4>
                        <h6>Kitchen</h6>
                      </div>
                      <div className="property">
                        <h4>1</h4>
                        <h6>Kitchen</h6>
                      </div>
                      <div className="property">
                        <h4>1</h4>
                        <h6>Kitchen</h6>
                      </div>
                      <div className="property">
                        <h4>1</h4>
                        <h6>Kitchen</h6>
                      </div>
                    </div>
                  </div>
                  <div className="properties-box">
                    <h3>Property Amenities</h3>
                    <ul>
                      <li>Garden</li>
                    </ul>
                  </div>
                  <div className="grid-1">
                    <h2 className="map-title">Map View</h2>
                  </div>
                  <div className="grid-1">
                    <div className="map-conatainer">
                      <div id="single_propery_map">
                        <div className="location_porperty">
                          <div className="map-style"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="properties-box">
                    <form action="">
                      <div className="calculator-property">
                        <div className="grid-1">
                          <h3>EMI Calculator</h3>
                        </div>
                        <div className="grid-2 ">
                          <div className="left-form left-input-box">
                            <div className="grid-1">
                              <div className="form-floation">
                                <input
                                  name="loan_value"
                                  type="number"
                                  id="loan_value"
                                  class="form-control error"
                                  aria-invalid="true"
                                />

                                <label htmlFor="">Property Amount</label>
                              </div>
                            </div>

                            <div className="grid-1">
                              <div className="form-floation mt-2">
                                <input
                                  type="number"
                                  class="form-control"
                                  name="pay_back_duration"
                                  id="pay_back_duration"
                                />

                                <label htmlFor="">Period (Months)</label>
                              </div>
                            </div>

                            <div className="grid-1">
                              <div className="form-floation mt-2">
                                <input
                                  type="number"
                                  name="interest_rate"
                                  id="interest_rate"
                                  class="form-control"
                                />

                                <label htmlFor="">Rate of interest %</label>
                              </div>
                            </div>
                            <div className="grid-1 claculate">
                              <button className="btn btn-dark">calculate</button>
                            </div>
                          </div>
                          <div className="right-input">
                            <div className="right-input-box">
                              <div class="calculator-output">
                                <div>Total Interest Payable</div>
                                <div>
                                  <span id="total_interest_result"> </span>{" "}
                                  <span>Tk</span>
                                </div>
                              </div>
                              <div class="calculator-output">
                                <div>Total Payable (Principal+EMI)</div>
                                <div>
                                  <span id="total_interest_result"> </span>{" "}
                                  <span>Tk</span>
                                </div>
                              </div>

                              <div class="calculator-output">
                                <div>Monthly Payable Amount</div>
                                <div>
                                  <span id="total_interest_result"> </span>{" "}
                                  <span>Tk</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </>

              <>
                <div className="buy-details-right">
                  <div className="request-box desktop-box">
                    <div>
                      <h6>For Sale</h6>
                      <h2>Tk. 21,345</h2>
                      <input
                        type="hidden"
                        name="map_price"
                        id="map_price"
                        value="21,345"
                      />
                    </div>
                    <div>
                      {!consumer
                        ?
                        <button
                          className="btn btn-dark"
                          onClick={() => {
                            setShowModal(true)
                            setShowSignIn(true)
                          }}
                        >Buy request</button>
                        :
                        <button
                          className="btn btn-dark"
                          onClick={() => {
                            setShowModal(true)
                            setShowBuyRequestForm(true)
                          }}
                        >Buy request</button>
                      }

                    </div>
                  </div>
                  <div className="contact-info-box">
                    <div className="user-info">
                      <div className="user-img">
                        <img src={user} alt="" />
                      </div>
                      <div className="user-details">
                        <h5>Shaon</h5>
                        <h6>Owner</h6>
                      </div>
                    </div>

                    {dropDown && <div className="user-info-dropdown">
                      <div className="user-contact-info-box">
                        <div className="user-contact">
                          <h6>Email</h6>
                          <h5>sheehanvy@gmail.com</h5>
                        </div>
                      </div>
                      <div className="user-contact-info-box">
                        <div class="user-contact">
                          <h6>Phone Number</h6>
                          <h5>01521401458</h5>
                        </div>
                      </div>
                    </div>}

                    <div className="contact-btn">
                      <button onClick={handleDropDown}>Show contact info
                        <img src={arrow} alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="bastu-contact-info">
                    <h1>contact Bastu</h1>
                    <div>
                      <a href="tel:+0000000000">
                        <img src={phone} alt="" />
                      </a>
                      <a
                        target="_blank"
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@bastu.com.bd"
                        rel="noreferrer"
                      >
                        <img src={email} alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="wrapper-box">
                  <div class="requestBox">
                    <div>
                      <h6>For Sale</h6>
                      <h2>Tk. 2,00,00,000</h2>
                    </div>
                    <div>
                      {!consumer
                        ?
                        <button
                          className="btn btn-dark"
                          onClick={() => {
                            setShowModal(true)
                            setShowSignIn(true)
                          }}
                        >Buy request</button>
                        :
                        <button
                          className="btn btn-dark"
                          onClick={() => {
                            setShowModal(true)
                            setShowBuyRequestForm(true)
                          }}
                        >Buy request</button>
                      }
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div className="related-property">
              <FeaturedProperties />
            </div>
          </div>
        </div>
      </section>

      {showModal &&
        <Modal
          handleClose={handleClose}
          modalHeading={
            showBuyRequestForm && 'Buy Request'
          }
        >
          {showSignIn &&
            <SignIn
              handleClose={handleClose}
              setShowSignIn={setShowSignIn}
              setShowSignUp={setShowSignUp}
            />
          }
          {showSignUp &&
            <SignUp
              handleClose={handleClose}
              setShowSignIn={setShowSignIn}
              setShowSignUp={setShowSignUp}
            />
          }
          {showBuyRequestForm &&
            <BuyRequestForm />
          }
        </Modal>
      }
    </>
  );
}

export default BuyDetails;
