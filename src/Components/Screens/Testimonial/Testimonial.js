import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from "swiper/react";
import quoteIcon from '../../../Assets/home/quote icon.svg';
import avater from '../../../Assets/home/testimonial image 2.png'

import "swiper/css";
import "swiper/css/navigation";

import { FreeMode, Navigation } from "swiper";

function Testimonial() {
  return (
    <section className="testimonial">
        <div className="container-fluid">
            <div className="custom-container">
                <h1 className="section-title">What Our Customers
                    <span className='luxury'>Say About Us</span></h1>
                    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
            <div className="card testmonial-card">
                <img className="quote-icon" src={quoteIcon} alt="" />
                <p>They promised was it delivered. There is a minor Communication issues. Being not
                    communicated timely. The experience was really fun and rewarding. I would definitey
                    recommend to everyone.</p>

                <div className="testmonial-user">
                    <div><img src={avater} alt="" /></div>
                    <div>
                        <h5>Shaon Minhaj</h5>
                        <h6>Happy Customer</h6>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card testmonial-card">
                <img className="quote-icon" src={quoteIcon} alt="" />
                <p>They promised was it delivered. There is a minor Communication issues. Being not
                    communicated timely. The experience was really fun and rewarding. I would definitey
                    recommend to everyone.</p>

                <div className="testmonial-user">
                    <div><img src={avater} alt="" /></div>
                    <div>
                        <h5>Shaon Minhaj</h5>
                        <h6>Happy Customer</h6>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card testmonial-card">
                <img className="quote-icon" src={quoteIcon} alt="" />
                <p>They promised was it delivered. There is a minor Communication issues. Being not
                    communicated timely. The experience was really fun and rewarding. I would definitey
                    recommend to everyone.</p>

                <div className="testmonial-user">
                    <div><img src={avater} alt="" /></div>
                    <div>
                        <h5>Shaon Minhaj</h5>
                        <h6>Happy Customer</h6>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card testmonial-card">
                <img className="quote-icon" src={quoteIcon} alt="" />
                <p>They promised was it delivered. There is a minor Communication issues. Being not
                    communicated timely. The experience was really fun and rewarding. I would definitey
                    recommend to everyone.</p>

                <div className="testmonial-user">
                    <div><img src={avater} alt="" /></div>
                    <div>
                        <h5>Shaon Minhaj</h5>
                        <h6>Happy Customer</h6>
                    </div>
                </div>
            </div>
            </SwiperSlide>
      </Swiper>
    </>
            </div>
        </div>
    </section>
  )
}

export default Testimonial