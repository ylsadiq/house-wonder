import React from 'react'
import './FeaturedProperties.css';
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../../../Assets/home/property image 1.png';
import location from '../../../Assets/home/location icon.svg'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import { FreeMode } from "swiper";

export default function FeaturedProperties() {
  return (
    <section className="featured-properties">
        <div className="container-fluid">
            <h1 className='section-title'>Featured Properties</h1>
            <div className="featured-propary-slider">
            <>
      <Swiper
        slidesPerView={3}
        spaceBetween={2}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
      >
        <SwiperSlide>
            <a className="slider-img-wrapper card">
            <img src={slider1} alt="" />
            <div className="property-tag">
                <span>verified</span>
            </div>
            <div class="property-card-body">
                <h1>Luxurious Apartment</h1>
                <p><img src={location} alt="" />
                Gulshan 1, Dhaka,Gulshan 1, Dhaka,Gulshan 1, Dhaka</p>

                <ul>
                    <li>4 Bed</li>
                    <li>5 Bath</li>
                    <li>2300 sqft.</li>
                    <li>2300 sqft.</li>
                    <li>2300 sqft.</li>
                </ul>

                <h6>For Sale</h6>
                <h2>Tk. 2,00,00,000</h2>

            </div>
            </a>
            </SwiperSlide>
        <SwiperSlide>
            <a className="slider-img-wrapper card">
            <img src={slider1} alt="" />
            <div className="property-tag">
                <span>verified</span>
            </div>
            <div class="property-card-body">
                <h1>Luxurious Apartment</h1>
                <p><img src={location} alt="" />
                Gulshan 1, Dhaka,Gulshan 1, Dhaka,Gulshan 1, Dhaka</p>

                <ul>
                    <li>4 Bed</li>
                    <li>5 Bath</li>
                    <li>2300 sqft.</li>
                    <li>2300 sqft.</li>
                    <li>2300 sqft.</li>
                </ul>

                <h6>For Sale</h6>
                <h2>Tk. 2,00,00,000</h2>

            </div>
            </a>
            </SwiperSlide>
        <SwiperSlide>
            <a className="slider-img-wrapper card">
            <img src={slider1} alt="" />
            <div className="property-tag">
                <span>verified</span>
            </div>
            <div class="property-card-body">
                <h1>Luxurious Apartment</h1>
                <p><img src={location} alt="" />
                Gulshan 1, Dhaka,Gulshan 1, Dhaka,Gulshan 1, Dhaka</p>

                <ul>
                    <li>4 Bed</li>
                    <li>5 Bath</li>
                    <li>2300 sqft.</li>
                    <li>2300 sqft.</li>
                    <li>2300 sqft.</li>
                </ul>

                <h6>For Sale</h6>
                <h2>Tk. 2,00,00,000</h2>

            </div>
            </a>
            </SwiperSlide>
        <SwiperSlide>
            <a className="slider-img-wrapper">
            <img src={slider1} alt="" />
            <div className="property-tag">
                <span>verified</span>
            </div>
            <div class="property-card-body">
                <h1>Luxurious Apartment</h1>
                <p><img src={location} alt="" />
                Gulshan 1, Dhaka,Gulshan 1, Dhaka,Gulshan 1, Dhaka</p>

                <ul>
                    <li>4 Bed</li>
                    <li>5 Bath</li>
                    <li>2300 sqft.</li>
                    <li>2300 sqft.</li>
                    <li>2300 sqft.</li>
                </ul>

                <h6>For Sale</h6>
                <h2>Tk. 2,00,00,000</h2>

            </div>
            </a>
            </SwiperSlide>
      </Swiper>
    </>
            </div>
            <div className="view-btn-wrapper">
            <button className='btn view-btn btn-outline-dark'>
                view all
            </button>
            </div>
            
        </div>
    </section>
  )
}
