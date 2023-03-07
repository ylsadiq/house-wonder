import React, {useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// import './BuyDetails.css'
import '../BuyDetails/BuyDetailsStyle.css'
// import required modules
import { FreeMode, Thumbs } from "swiper";

function BuySlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="porpery-image-slider">
      <Swiper
      
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="main-slider">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-image">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-image">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-image">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-image">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-image">
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-image">
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-image">
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-image">
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-image">
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-image">
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BuySlider