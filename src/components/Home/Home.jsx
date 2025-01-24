/** @format */

import {
  Box,
  Button,
  // Card,
  // CardBody,
  // CardHeader,
  Heading,
  // HStack,
  Stack,
  // StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Container } from "@nextui-org/react";
import { BsWhatsapp } from "react-icons/bs";
// import animation from "../../assets/animation.mp4";

// import intro from '../../assets/videos/intro.mp4';
// import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import OurCources from "./OurCources";
import OurStrategy from "../OurStrategy/OurStrategy";
// import CheckFreeVideo from "./CheckFreeVideo";
import VisionandMision from "./VisionAndMision_2";
import DeliveryMethods from "../DeleveryMethod/DeliveryMethods";
import Coresvalue from "./Coresvalue";
import WebinarPopup from "../popup/WebinarPopup";
// import Spline from "@splinetool/react-spline";
import { IoIosCall } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import Courses_Product from "../Courses_product/Courses_Product";
import AxisPopup from "../Layout/axisPopup/AxisPopup";

const Home = ({ isAuthenticated, closeHandler }) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // <Script> </Script>;
  return (
    <div className="  text-white">
      {/* <Spline
        scene="https://prod.spline.design/WsTEOrYzLRpSk0BJ/scene.splinecode"
        className=" absolute"
      /> */}
      {/* <video src={animation} autoPlay loop preload="auto" /> */}
      <div>
        {" "}
        {!isAuthenticated && <WebinarPopup closeHandler={closeHandler} />}
        <section className="">
          <Container lg className="">
            {/* <div className=" absolute w-2/4 h-screen">
              <Spline scene="https://prod.spline.design/df3qiLs0-YtkT5e1/scene.splinecode" />
            </div> */}
            <Stack
              // direction={["column", "column", "row", "row"]}
              // height={["100vh"]}

              minH={["15vh", "60vh"]}
              // w={"100vw"}
              maxH={"800px"}
              // justifyContent={["center", "center", "center", "center"]}
              // alignItems="center"
            >
              <Coresvalue />

              {/* <VStack
                width={"full"}
                align={["center", "center", "flex-start", "flex-start"]}
                spacing={["6", "6", "6", "8"]}
                w={["100%"]}
              >
                <Heading
                  fontSize={["3xl", "5xl", "3xl", "7xl"]}
                  fontWeight={["semibold", "semibold", "bold", "bold"]}
                  className="heading_1 Home "
                  w={"100%"}
                  marginTop={["0px", "40px", "0", "0"]}
                  textAlign={["center", "center", "left", "left"]}
                >
                  Learning
                  <br />
                  <span className=" text-5xl"> Never Exhausts The Mind</span>
                </Heading>
                <Text
                  fontSize={["sm", "md", "sm", "lg"]}
                  lineHeight={["4", "5", "5", "8"]}
                  textAlign={["justify", "justify", "justify", "left"]}
                  className="text"
                  width={["100%"]}
                  children="Stockology Securities Private Limited is a Private incorporated on 23 December 2021. It is classified as Non-govt company and is registered at Registrar of Companies, Indore."
                />
                <Box>
                  <Link to="/courses" className=" z-10">
                    <Button
                      size={["md", "lg", "md", "lg"]}
                      float={"left"}
                      colorScheme="red"
                      borderRadius={"full"}
                      width={["40", "40", "48", "72"]}
                    >
                      View Course
                    </Button>
                  </Link>
                </Box>
              </VStack> */}
              {/* <Image
                className="bannerimg"
                src={Learning}
                width={820}
                height={""}
              /> */}
              {/* <div className=" w-[100vw] h-full "> */}
              {/* <Spline
                  className="   w-screen"
                  scene="https://prod.spline.design/uhhpMQdQt1qxC8bV/scene.splinecode"
                /> */}
              {/* <Spline scene="https://prod.spline.design/apRZMyOC6c3WA8Wx/scene.splinecode" /> */}

              {/* </div> */}
            </Stack>
          </Container>
        </section>
        <Container lg>
          <OurCources />
          <OurStrategy />
          <Box w={"full"} position="relative" mt={["0", "20"]}>
            <DeliveryMethods />
          </Box>
        </Container>{" "}
        {/* <Box className=" mb-9">
          <Coresvalue />
        </Box> */}
        <Box>
          <VisionandMision />
        </Box>
        {/* <Box>
          <CheckFreeVideo />
        </Box> */}
        <Box>
          {/* <Courses_Product /> */}
        </Box>
        <Box className=" bg-gray-900  text-center container md:rounded-3xl ">
          <div className="  py-10">
            <h1 className=" text-2xl md:text-6xl font-light">
              Customer <span className=" font-semibold">Support</span>
            </h1>
            <p className=" font-light text-sm md:text-xl my-4 ">
              We are devoted to solving your queries and concerns, quickly and
              to your satisfaction.
            </p>

            <div className=" flex flex-col md:gap-0 gap-5 md:flex-row justify-around md:w-[70%] m-auto my-2">
              <div className="  customer_support  flex   items-center gap-3 justify-between">
                <a href="tel:+91 8349747038" className=" flex gap-3 ">
                  <div className=" p-2 bg-white  rounded-full">
                    <IoIosCall className=" icon text-3xl" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className=" text-xs md:text-sm pl-3 font-semibold">
                      On-Call-Support
                    </p>
                    <p className="font-samibold text-xl md:text-4xl">
                      +91 8349747038
                    </p>
                  </div>
                </a>
              </div>
              <div className="  customer_support  flex gap-3 justify-between">
                <Link
                  to="contact"
                  onClick={scrollToBottom}
                  className=" flex gap-3  "
                >
                  <div className=" p-2 bg-white  rounded-full">
                    <ImLocation className=" icon text-3xl" />
                  </div>
                  <div className="flex flex-col justify-start  items-start">
                    <p className=" text-xs md:text-sm pl-3 font-semibold">
                      Find the Branch
                    </p>
                    <p className="font-samibold text-xl md:text-4xl">
                      Locate Us
                    </p>
                  </div>
                </Link>
              </div>
              <div className="  customer_support  flex gap-3 justify-between">
                <Link
                  to="https://wa.me/+918349747038/?text=hello"
                  onClick={scrollToBottom}
                  className=" flex gap-3  "
                >
                  <div className=" p-2 bg-white  rounded-full">
                    <BsWhatsapp className=" icon text-3xl" />
                  </div>
                  <div className="flex flex-col justify-start  items-start">
                    <p className=" text-xs md:text-sm pl-3 font-semibold">
                      On-Chat-Support
                    </p>
                    <p className="font-samibold text-xl md:text-4xl">
                      Whatsapp Us
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <AxisPopup />
        </Box>
      </div>
    </div>
  );
};

export default Home;
