import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import location from '../../../../Assets/home/location icon.svg';
import porpery from '../../../../Assets/image/property_images/2139664963.png'
import porpery2 from '../../../../Assets/image/property_images/2139664963.png';
import share from '../../../../Assets/icon/fi_share-2.svg';
import print from '../../../../Assets/icon/u_print.svg';
import heart from '../../../../Assets/icon/u_heart.svg';
import plus from '../../../../Assets/icon/fi_plus-square.svg';
import user from '../../../../Assets/image/profile/agentImage.png';
import arrow from '../../../../Assets/home/arrowDown.svg';
import phone from '../../../../Assets/home/phoneAltBox.svg';
import email from '../../../../Assets/home/email-box.svg'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './BuyDetails.css';
import FeaturedProperties from '../../Home/FeaturedProperties/FeaturedProperties';

function BuyDetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="buy-details">
        <div className="container-fluid">
            <div className="buy-details-content">
                <div className="buy-details-left">
                    <div className="location">
                        <img src={location} alt="" />
                        <p className='location-name'>asfdas</p>
                    </div>
                    <div className="porperty-deal">
                        <h2 className="propery-name">AWRRF</h2>
                        <p className="propery-id">ID: #bb167686</p>
                    </div>
                    <div className="porpery-image-slider">
                    {/* <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://bastu.com.bd/beta-thirteen/image/property_images/1023494923.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={porpery} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={porpery2} />
        </SwiperSlide>

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
    
        <SwiperSlide>
          <img src={porpery} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={porpery2} />
        </SwiperSlide>
      </Swiper>
    </> */}
                    </div>
                    <div className="info-header">
                    <div className="property-magerment">
                    <ul>
                        <li><span>4 </span> Bed</li>
                        <li><span>5</span> Bath</li>
                        <li><span>2300</span> sqft.</li>
                        <li><span>1</span> bedRoom.</li>
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
                        <p className="porpery-details">
                        vbhmghjfg
                        </p>
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
                               <div className="map-style">
                                </div> 
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
                            <input name="loan_value" type="number" id="loan_value" class="form-control error" aria-invalid="true" />
                               
                                <label htmlFor="">Property Amount</label>
                            </div>
                            </div>

                            <div className="grid-1">
                            <div className="form-floation mt-2">
                            <input type="number" class="form-control" name="pay_back_duration" id="pay_back_duration" />
                               
                                <label htmlFor="">Period (Months)</label>
                            </div>
                            </div>

                            <div className="grid-1">
                            <div className="form-floation mt-2">
                            <input type="number" name="interest_rate" id="interest_rate" class="form-control" />
                               
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
                                        <div>
                                            Total Interest Payable
                                        </div>
                                        <div>
                                            <span id="total_interest_result"> </span> <span>Tk</span>
                                        </div>
                                    </div>
                                <div class="calculator-output">
                                        <div>
                                        Total Payable (Principal+EMI)
                                        </div>
                                        <div>
                                            <span id="total_interest_result"> </span> <span>Tk</span>
                                        </div>
                                    </div>

                                <div class="calculator-output">
                                        <div>
                                        Monthly Payable Amount
                                        </div>
                                        <div>
                                            <span id="total_interest_result"> </span> <span>Tk</span>
                                        </div>
                                    </div>
                                </div>  
                                </div>
                                                          
                            </div>
                            
                            </div>
                        </form>
                    </div>
                </div>

                <div className="buy-details-right">
                <div className="request-box desktop-box">
                    <div>
                        <h6>For Sale</h6>
                        <h2>Tk. 21,345</h2>
                        <input type="hidden" name="map_price" id="map_price" value="21,345"/ >
                    </div>
                    <div>
                        <button className="btn btn-dark ">
                            Buy request
                        </button>
                        
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

                    <div className="user-contact-info-box">
                            <div className="user-contact">
                                <h6>Email</h6>
                            </div>
                        </div>
                    <div className="user-contact-info-box">
                    <div class="user-contact">
                        <h6>Phone Number</h6>
                        <h5>01521401458</h5>
                    </div>
                    </div>
                        
                    <div  className="contact-btn">
                    <button>Show contact info</button>
                    <img src={arrow} alt="" />
                    </div>
                    
                </div>
                <div className="bastu-contact-info">
                       <h1>contact Bastu</h1>
                       <div>
                       <a href="tel:+0000000000">
                        <img src={phone} alt="" />
                       </a>
                       <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@bastu.com.bd">
                        <img src={email} alt="" />
                       </a>
                       </div>
                    </div>
                </div>
            </div>
            <div className="related-property">

            <FeaturedProperties />
            </div>
            </div>
        </section>
  )
}

export default BuyDetails