import React from "react";
// import Carousel from "react-spring-3d-carousel";
import Course_1 from "../../assets/Advance_Options_Trading.png";
import Course_2 from "../../assets/Advance_Technical_Analysis.png";
import Course_3 from "../../assets/Advance_Technical_Option.png";
import Course_4 from "../../assets/Gold_Bundle.png";
import Course_5 from "../../assets/Platinum_Bundle.png";
import Course_6 from "../../assets/Technical_Charts_Patterns.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "./Courses.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "@nextui-org/react";
import { Button } from "@chakra-ui/react";

const Courses_Product = () => {
  return (
    <>
      <h1 className=" text-5xl font-bold text-center my-4  heading_1  border-b-2 border-blue-900 w-fit m-auto py-2 px-7">
        Our Courses
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        // pagination={{ el: ".swiper-pagination", clickable: true }}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        //   clickable: true,
        // }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="swiper_container "
      >
        <SwiperSlide className="Courses_book  ">
          <img src={Course_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="Courses_book  ">
          <img src={Course_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="Courses_book  ">
          <img src={Course_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="Courses_book  ">
          <img src={Course_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="Courses_book  ">
          <img src={Course_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="Courses_book  ">
          <img src={Course_6} alt="slide_image" />
        </SwiperSlide>

        {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
      <Link
        href="https://hgyiu.courses.store/"
        style={{ display: "block" }}
        className=" m-auto "
      >
        {" "}
        <Button
          my={"5"}
          colorScheme="red"
          w={["56"]}
          className=" font-bold "
          borderRadius={"full"}
        >
          Buy Now
        </Button>
      </Link>
    </>
  );
};

export default Courses_Product;
