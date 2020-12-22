import React from "react";
import "./Service.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

function Service() {
  return (
    <div className="service" id='service'>
        <Swiper
          spaceBetween={50}
          autoplay
          slidesPerView={3}
          loop
          pagination
          navigation
        >
          <SwiperSlide className="swiper-slide">
            <img src="/images/service-icon-01.png" alt="service-icon" />
            <div className="text">
              <h4>First Box Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quis provident facilis tempore ut! Omnis veritatis
                aperiam repudiandae.
              </p>
            </div>
            <button>DETAIL</button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/images/service-icon-01.png" alt="service-icon" />
            <div className="text">
              <h4>First Box Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quis provident facilis tempore ut! Omnis veritatis
                aperiam repudiandae.
              </p>
            </div>
            <button>DETAIL</button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/images/service-icon-01.png" alt="service-icon" />
            <div className="text">
              <h4>First Box Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quis provident facilis tempore ut! Omnis veritatis
                aperiam repudiandae.
              </p>
            </div>
            <button>DETAIL</button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/images/service-icon-01.png" alt="service-icon" />
            <div className="text">
              <h4>First Box Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quis provident facilis tempore ut! Omnis veritatis
                aperiam repudiandae.
              </p>
            </div>
            <button>DETAIL</button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/images/service-icon-01.png" alt="service-icon" />
            <div className="text">
              <h4>First Box Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quis provident facilis tempore ut! Omnis veritatis
                aperiam repudiandae.
              </p>
            </div>
            <button>DETAIL</button>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/images/service-icon-01.png" alt="service-icon" />
            <div className="text">
              <h4>First Box Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quis provident facilis tempore ut! Omnis veritatis
                aperiam repudiandae.
              </p>
            </div>
            <button>DETAIL</button>
          </SwiperSlide>
        </Swiper>
    </div>
  );
}

export default Service;
