import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper";
import { FiCornerDownRight } from "react-icons/fi";
import { Text } from "@chakra-ui/react";

const AboutSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-fit rounded-3xl"
      >
        <SwiperSlide className="!bg-cyan-300  rounded-xl">
          {/* <Image
          src={aboutslider1}
          // className=" hover:shadow-lg hover:scale-105 transition-all duration-150  rounded-lg"
        /> */}
          <Text
            // top={["20%", "28%", "40%", "32%"]}
            color={"black"}
            w={"100%"}
            textAlign={"left"}
            py={"5"}
            fontWeight="medium"
            fontSize={["xs", "xs", "xs", "xl"]}
            lineHeight={["3", "4", "4", "8"]}
            className=" pl-10"
          >
            <span className=" text-xl md:text-3xl">
              Basic Financial Concepts
            </span>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Budgeting
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Investments
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Inflation
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Debt Management
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Financial Goals
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Risk and Return
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Taxation
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Diversification
            </div>{" "}
          </Text>
        </SwiperSlide>
        <SwiperSlide className="!bg-orange-400 rounded-xl ">
          {/* <Image src={aboutslider1} /> */}
          <Text
            // top={["20%", "28%", "40%", "32%"]}
            color={"black"}
            w={"100%"}
            textAlign={"left"}
            px={"10"}
            py={"5"}
            fontWeight="medium"
            fontSize={["xs", "xs", "xs", "xl"]}
            lineHeight={["3", "4", "4", "8"]}
          >
            <span className="  text-xl md:text-3xl">Technical Analysis</span>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Price Action
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Trends
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Chart Patterns
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Candlestick Patterns
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Indicators
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Volume Analysis
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Trading psychology
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Risk Management
            </div>
          </Text>
        </SwiperSlide>
        <SwiperSlide className="!bg-rose-500 rounded-xl ">
          {/* <Image src={aboutslider1} /> */}
          <Text
            // top={["20%", "28%", "40%", "32%"]}
            color={"white"}
            w={"100%"}
            textAlign={"left"}
            px={"10"}
            py={"5"}
            fontWeight="medium"
            fontSize={["xs", "xs", "xs", "xl"]}
            lineHeight={["3", "4", "4", "8"]}
          >
            <span className="  text-xl md:text-3xl">Fundamental Analysis</span>

            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Industry and Market Analysis
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Management and Leadership
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Macroeconomic Factors
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Qualitative Factors
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Financial Statements
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Financial Ratios{" "}
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Growth Rates{" "}
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Debt Levels{" "}
            </div>
          </Text>
        </SwiperSlide>
        <SwiperSlide className="!bg-sky-800 rounded-xl ">
          {/* <Image src={aboutslider1} /> */}
          <Text
            // top={["20%", "28%", "40%", "32%"]}
            color={"white"}
            w={"100%"}
            textAlign={"left"}
            px={"10"}
            py={"5"}
            fontWeight="medium"
            fontSize={["xs", "xs", "xs", "xl"]}
            lineHeight={["3", "4", "4", "8"]}
          >
            <span className=" text-xl md:text-3xl">Portfolio Creation </span>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Define Your Goals{" "}
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Assess Risk Tolerance{" "}
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Diversification{" "}
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Allocate Assets{" "}
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Select Investments{" "}
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Monitor Performance{" "}
            </div>{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Stay Informe{" "}
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight />
              Tax Efficiency{" "}
            </div>
          </Text>
        </SwiperSlide>
        <SwiperSlide className="!bg-yellow-400 rounded-xl ">
          {/* <Image src={aboutslider1} /> */}
          <Text
            // top={["20%", "28%", "40%", "32%"]}
            color={"black"}
            w={"100%"}
            textAlign={"left"}
            px={"10"}
            py={"5"}
            fontWeight="medium"
            fontSize={["xs", "xs", "xs", "xl"]}
            lineHeight={["3", "4", "4", "8"]}
          >
            <span className=" text-xl md:text-3xl">
              Pschology of Investing{" "}
            </span>
            <br />{" "}
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight /> Emotional Bias{" "}
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight /> Herd Mentality{" "}
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight /> Loss Aversion{" "}
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight /> Overconfidence{" "}
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight /> Confirmation Bias{" "}
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight /> Behavioral Finance{" "}
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight /> Long-Term vs Short-Term Thinking{" "}
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <FiCornerDownRight /> Mindfulness and Emotional Regulation{" "}
            </div>
          </Text>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AboutSlider;
