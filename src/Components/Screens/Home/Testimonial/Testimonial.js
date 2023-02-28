import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import quoteIcon from '../../../../Assets/home/quote icon.svg';
import { FreeMode, Navigation } from "swiper";
import { IMAGE_URL, TESTIMONIALS_API } from '../../../../Utilities/APIs/APIs';

import "swiper/css";
import "swiper/css/navigation";

import './Testimonial.css';

function Testimonial() {

    const [testimonials, setTestimonials] = useState(null);

    useEffect(() => {
        async function getAndSetTestimonials() {
            const { data } = await axios.get(TESTIMONIALS_API)
            setTestimonials(data)
        }

        getAndSetTestimonials()
    }, [])


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

                            {testimonials?.map(testimonial => (
                                <SwiperSlide key={testimonial._id}>
                                    <div className="card testmonial-card">
                                        <img className="quote-icon" src={quoteIcon} alt="" />
                                        <p>{testimonial.description}</p>

                                        <div className="testmonial-user">
                                            <div>
                                                <img src={IMAGE_URL + testimonial.image} alt="" />
                                            </div>
                                            <div>
                                                <h5>{testimonial.name}</h5>
                                                <h6>{testimonial.designation}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                </div>
            </div>
        </section>
    )
}

export default Testimonial