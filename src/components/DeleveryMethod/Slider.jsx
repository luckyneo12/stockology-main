/** @format */

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import classroom from "../../assets/slider1.svg";
import Instructor from "../../assets/slider2.svg";
import Online from "../../assets/slider3.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from "@chakra-ui/react";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <Image src={classroom} className=" transition-all duration-150 " />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Instructor} className="  transition-all duration-150" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Online} className=" transition-all duration-150" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
