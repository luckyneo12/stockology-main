/** @format */

import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Image } from "@nextui-org/react";
import React, { useRef } from "react";
import logo from "../../../assets/logo.svg";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
// import { Link } from "@nextui-org/react";

import { IoMdCall, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import playstore from "../../../assets/Google.svg";

import "./footer.css";

const Footer = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // window.screenTop({ top: 0, left: 0 });
  // window.screenTop(top="0"));
  const ref = useRef(null);
  const scrollhandler = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box className=" bg-gray-900 mt-5">
      <Box
        padding={"4"}
        className="container  footerbefore"
        position={"relative"}
        py={"10"}
      >
        <Stack
          direction={["column", "column", "column", "row"]}
          // justifyContent={['', 'start', 'space-between']}
          gap="0"
          w={"100%"}
          alignItems={["flex-start", "flex-start", "flex-start", "flex-start"]}
        >
          <Box
            maxW={["100%", "100%", "100%", "40%"]}
            lineHeight={["5", "3", "", "7"]}
            px={["2", "2", "5", "10"]}
          >
            <Image
              src={logo}
              mb="26"
              css={{
                w: "80%",
                "@md": {
                  w: "100%",
                },
              }}
            />
            <Text
              className="  text-white"
              textAlign={["justify ", "left", "left", "left"]}
            >
              Our team is comprised of people with different kinds of finance
              experience, but we all have this in common–a commitment to ethics
              and integrity. We’re all fully licensed and credentialed. And you
              can count on unbiased recommendations and impartial guidance.
            </Text>
            <Text className="   text-white" my={"4"}>
              CIN-U65929MP2021PTC058908
            </Text>
            <Box display={"flex"} alignItems="center" mt="8">
              <Text className="text-white  text-xl " mr={"5"}>
                Contact
              </Text>
              <Box
                display={"flex"}
                gap="5px"
                color={"red.500"}
                w={"100%"}
                fontSize="xl"
                onClick={scrollhandler}
              >
                <a
                  href="https://instagram.com/stockology_edu"
                  target={"_blank"}
                  className="text-red-600  bg-white  hover:shadow-xl hover:text-pink-500 hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <AiOutlineInstagram height={"40px"} width="40px" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=100090277334395"
                  target={"_blank"}
                  className="text-red-600 bg-white hover:text-blue-600  hover:shadow-xl hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <FaFacebookF />
                </a>
                {/* <a
                  href="https://t.me/STOC_KOLOGY"
                  target={"_blank"}
                  className="text-red-600 bg-white hover:text-blue-600   hover:shadow-xl hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <FaTelegramPlane />
                </a> */}
                <a
                  href="https://www.youtube.com/@stockologyy"
                  className="text-red-600 bg-white  hover:shadow-xl  hover:scale-110 transition-all duration-150 p-2 rounded-md"
                  target={"_blank"}
                >
                  <AiFillYoutube />
                </a>
                <a
                  href="https://linkedin.com/in/stockologyyy"
                  target={"_blank"}
                  className="text-red-600 hover:shadow-xl bg-white  hover:text-blue-600 hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <FaLinkedinIn />
                </a>
                {/* <a
                  href="https://twitter.com/stockologyyy?t=r87T8cwTePPMHqsQGqU_QA&s=09"
                  target={"_blank"}
                  className="text-red-600 hover:text-blue-600 bg-white  hover:shadow-xl hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <AiOutlineTwitter />
                </a> */}
              </Box>
            </Box>
            <Text mt={"12"} className="  text-white ">
              Copyright © 2022-25 Stockology All Rights Reserved
            </Text>
          </Box>
          <Box
            maxW={["100%", "100%", "100%", "40%"]}
            lineHeight={["5", "3", "4", "7"]}
            px={["2", "2", "2", "10"]}
          >
            <Heading mt={"32"} fontSize="lg" className=" text-white ">
              POPULAR COURSES
            </Heading>
            <Box flexDir={["column"]} display="flex" gap={"5"} mt="5">
              <a
                href="https://hgyiu.courses.store/301282"
                target={"_blank"}
                className="flex w-fit  "
              >
                {/* <span
                  className="
                    animate-ping mr-3
                    
                    inline-flex
                    h-2 w-2
                    rounded-full
                    bg-red-500
                    opacity-75"
                ></span> */}
                <Text
                  fontWeight={"semibold"}
                  my={"2"}
                  className="text-white anim  "
                >
                  Silver Bundle
                </Text>
              </a>
              <a
                href="https://hgyiu.courses.store/301293"
                target={"_blank"}
                className="flex w-fit "
              >
                <Text
                  fontWeight={"semibold"}
                  my={"2"}
                  className="text-white anim "
                >
                  Gold Bundle
                </Text>
              </a>
              <a
                href="https://hgyiu.courses.store/301301"
                target={"_blank"}
                className="flex w-fit"
              >
                <Text
                  fontWeight={"semibold"}
                  my={"2"}
                  className="text-white anim"
                >
                  Platinum Bundle
                </Text>
              </a>
            </Box>

            <Box
              display={"flex"}
              alignItems="flex-start"
              gap={"1"}
              flexDirection={"column"}
              maxW="100%"
              lineHeight={["5", "5", "7", "7"]}
              px={["0", "0", "2", "0"]}
              mt={["8", "8", "4", "12"]}
            >
              <Box
                display={"flex"}
                gap="20px"
                color={"red.500"}
                fontSize="xl"
                justifyContent={"space-between"}
                alignItems={"center"}
                zIndex="2"
              >
                <IoMdCall fontSize={"20px"} />
                <a href="tel:+91 8349747038">
                  <Text fontSize="md" className="text-white">
                    +91 8349747038
                  </Text>
                </a>
              </Box>
              {/* <Box
                display={"flex"}
                gap="20px"
                color={"red.500"}
                width="100%"
                fontSize="xl"
                justifyContent={"space-between"}
                zIndex="10"
              >
                <ImLocation2 fontSize={["20px"]} />
                <a
                  href={"https://goo.gl/maps/2bwWKshSjmep3VHQ8"}
                  target={"_blank"}
                  className=" z-50"
                >
                  <Text color={""} fontSize="sm" className="text-white">
                    <span className=" font-semibold">
                      Communication Address :
                    </span>{" "}
                    F4 suriyansh commer cornal 20 Ashish Nagar Indore Madhya
                    Pradesh 452016
                  </Text>
                </a>
              </Box>{" "} */}
              <Box
                display={"flex"}
                gap="20px"
                color={"red.500"}
                width="100%"
                fontSize="xl"
                justifyContent={"space-between"}
                zIndex="10"
              >
                <ImLocation2 fontSize={["20px"]} />
                {/* <a
                  href="https://goo.gl/maps/cPQokz3QWCkJDj8X7"
                  target={"_blank"}
                  className=" z-50"
                > */}
                  <Text cursor={"pointer"} color={""} fontSize="sm" className="text-white">
                    {/* Stockology, 2nd floor , Plot no. 64, RatnaLok Colony, Sch No
                    53, near Vijay Nagar, Indore, Madhya Pradesh 452011 */}
                    621-623, Krishna Business Center, Vijay Nagar ,452010, Indore, Madhya Pradesh 452011
                  </Text>
                {/* </a> */}
              </Box>{" "}
              <Box
                display={"flex"}
                gap="20px"
                color={"red.500"}
                fontSize="xl"
                alignItems={"center"}
                zIndex="2"
              >
                <IoMdMail fontSize={"20px"} />
                <a href="mailto:manish.k@stockologysecurities.com">
                  <Text fontSize="md" className="text-white ">
                    {/* support@stockologysecurities.com */}
                    sstockology@gmail.com
                  </Text>
                </a>
              </Box>
            </Box>
          </Box>
          <Box
            maxW={["100%", "100%", "100%", "40%"]}
            lineHeight={["5", "3", "4", "7"]}
            px={["2", "2", "2", "10"]}
          >
            <Heading mt={"32"} mb="3.5" fontSize="lg" className="text-white ">
              Quick Links
            </Heading>
            <Box flexDir={"column"} display="flex">
              <Link to={"/contact"} onClick={scrollToBottom}>
                <Text fontWeight={"semibold"} my={"2"} className="text-white ">
                  Contact Us
                </Text>
              </Link>
              {/* <Link to={"/webinar"} onClick={scrollToBottom}>
                <Text fontWeight={"semibold"} my={"2"} className="text-white ">
                  Webinar
                </Text>
              </Link> */}
              <Link to={"/termandcondition"} onClick={scrollToBottom}>
                <Text fontWeight={"semibold"} my={"2"} className="text-white ">
                  Terms and Condition
                </Text>
              </Link>
              <Link to={"/about"} onClick={scrollToBottom}>
                <Text fontWeight={"semibold"} my={"2"} className="text-white ">
                  About Us
                </Text>
              </Link>
              <Link to={"/privacypolicy"} onClick={scrollToBottom}>
                <Text fontWeight={"semibold"} my={"2"} className="text-white ">
                  Privacy Policy
                </Text>
              </Link>
              <Link to={"/refundpolicy"} onClick={scrollToBottom}>
                <Text fontWeight={"semibold"} my={"2"} className="text-white ">
                  Refund Policy
                </Text>
              </Link>
            </Box>
            <Box
              display={"flex"}
              alignItems="flex-start"
              gap={"1"}
              flexDirection={"column"}
              mt="12"
              zIndex={"banner"}
              position="relative"
            >
              <a
                href="https://play.google.com/store/apps/details?id=co.george.hgyiu"
                target="_blank"
              >
                <Image src={playstore} />
              </a>
            </Box>
          </Box>
        </Stack>
      </Box>
      {/* <div class="wave_rapper">
        <div>
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use
                xlinkHref={`#gentle-wave`}
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref={`#gentle-wave`}
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref={`#gentle-wave`}
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref={`#gentle-wave`} x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div> */}
    </Box>
  );
};

export default Footer;
