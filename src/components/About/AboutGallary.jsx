/** @format */

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Gallary_1 from "../../assets/gallary_1.jpg";
import Gallary_2 from "../../assets/gallary_2.jpg";
import Gallary_3 from "../../assets/gallary_3.jpg";

import "./AboutGallary.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image } from "@chakra-ui/react";

const AboutGallary = () => {
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
        className="mySwiper aboutslider_main rounded-2xl shadow-2xl "
      >
        <SwiperSlide>
          <Image
            src={Gallary_1}
            className=" transition-all duration-150 w-full   h-full "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Gallary_2} className="  transition-all duration-150" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Gallary_3} className="  transition-all duration-150" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AboutGallary;
