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
                <h1 class="section-title">What Our Customers
                    <span className='luxury'>Say About Us</span></h1>
                    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
            <div class="card testmonial-card">
                <img class="quote-icon" src={quoteIcon} alt="" />
                <p>They promised was it delivered. There is a minor Communication issues. Being not
                    communicated timely. The experience was really fun and rewarding. I would definitey
                    recommend to everyone.</p>

                <div class="testmonial-user">
                    <div><img src={avater} alt="" /></div>
                    <div>
                        <h5>Shaon Minhaj</h5>
                        <h6>Happy Customer</h6>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>we promised was it delivered. There is a minor Communication issues. Being not
                                communicated timely. The experience was really fun and rewarding. I would definitey
                                recommend to everyone.</SwiperSlide>
        <SwiperSlide>They promised was it delivered. There is a minor Communication issues. Being not
                                communicated timely. The experience was really fun and rewarding. I would definitey
                                recommend to everyone.</SwiperSlide>
        <SwiperSlide>we promised was it delivered. There is a minor Communication issues. Being not
                                communicated timely. The experience was really fun and rewarding. I would definitey
                                recommend to everyone.</SwiperSlide>
        <SwiperSlide>They promised was it delivered. There is a minor Communication issues. Being not
                                communicated timely. The experience was really fun and rewarding. I would definitey
                                recommend to everyone.</SwiperSlide>
        <SwiperSlide>we promised was it delivered. There is a minor Communication issues. Being not
                                communicated timely. The experience was really fun and rewarding. I would definitey
                                recommend to everyone.</SwiperSlide>
      </Swiper>
    </>
            </div>
        </div>
    </section>
  )
}

export default Testimonial