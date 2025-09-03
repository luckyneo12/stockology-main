/** @format */

import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Teamsupport from "../../assets/team_support.png";
import Freewebinar from "../../assets/business-woman.svg";
import Regular_market from "../../assets/bar-chart.svg";
import one_on_one from "../../assets/one_on_one_support.png";
import FreeResearchSupport from "../../assets/research_and_support.svg";
import Offlien_Courses from "../../assets/offlien_courses.png";
import Onlien_Courses from "../../assets/onlien Course.png";
import Book_webinar from "../../assets/Book_webinar.png";

const OurCources = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box className="  max-h-full">
      <HStack
        margin="auto"
        justifyContent={["space-between"]}
        flexDirection={["column", "column", "row", "row"]}
        flexWrap="wrap"
        my={["2", "3", "8"]}
        gap={["4", "4", "6"]}
      >
        <Box
          w={["100%", "80%", "45%", "30%"]}
          my={["2", "8"]}
          padding="2"
          className="  rounded-2xl"
        >
          <Heading
            className="  border-b-2 py-2 pr-4 w-fit text-blue-900  border-blue-900"
            fontSize={["3xl", "4xl", "5xl"]}
            textAlign={["center", "left"]}
          >
            Our Courses
          </Heading>

          <Text
            lineHeight={["1.4", "1.5", "7"]}
            className="Our_Courses_heading text-black  font-semibold rounded-2xl bg-[#92c4fc] px-5 py-3 md:px-4 md:py-2 "
            my={"2"}
            textAlign={["justify", "left"]}
          >
            We cater to your quest for knowledge through our customized
            certification programs. Our team of expert instructors, committed
            support personnel, and round-the-clock helpline combine to establish
            us as your premier training destination
          </Text>
        </Box>
        <Box
          w={["90%", "80%", "45%", "20%"]}
          my={["4", "8"]}
          height={["150PX", "190px"]}
          // justifyContent={"space-between"}
          display="flex"
          flexDirection={"column"}
          padding={["2", "3"]}
          className=" rounded-xl cursor-pointer  box_shadow hover:shadow-2xl  justify-center items-center  transition-all ease-in-out duration-150 hover:scale-105   "
        >
          {" "}
          <Link
            to={"/offline-courses "}
            className=" flex-col"
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",

              float: "left",
              justifyItems: "start",
            }}
          >
            <Image src={Offlien_Courses} w={[70, 120]} />
            <Heading className="heading_1" fontSize={["xl", "3xl"]}>
              Offline Course
            </Heading>
            {/* <Text className="text">
            We hope you enjoy using our free online course planning. Stay tuned
            for the next part of the series, where we will explore .
          </Text> */}

            <Button
              variant={"link"}
              colorScheme="green"
              alignItems={"center"}
              display="flex"
              gap={"3"}
              paddingLeft="0"
            >
              More Info <HiOutlineArrowNarrowRight color="green" />
            </Button>
          </Link>
        </Box>{" "}
        <Box
          padding={["2", "3"]}
          w={["90%", "80%", "45%", "20%"]}
          my={["4", "8"]}
          height={["150PX", "190px"]}
          // justifyContent={"space-between"}
          display="flex"
          flexDirection={"column"}
          className=" rounded-xl cursor-pointer  box_shadow hover:shadow-2xl  justify-center items-center  transition-all ease-in-out duration-150 hover:scale-105   "
        >
          <Link
            className=" flex-col"
            to={"https://hgyiu.courses.store/"}
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              float: "left",
              justifyItems: "start",
            }}
          >
            <Image src={Onlien_Courses} w={[70, 120]} />

            <Heading className="heading_1" fontSize={["xl", "3xl"]}>
              Online Course
            </Heading>
            {/* <Text className="text">
            We hope you enjoy using our free online course planning. Stay tuned
            for the next part of the series, where we will explore .
          </Text> */}

            <Button
              variant={"link"}
              colorScheme="green"
              alignItems={"center"}
              display="flex"
              gap={"3"}
              paddingLeft="0"
            >
              More Info <HiOutlineArrowNarrowRight color="green" />
            </Button>
          </Link>
        </Box>{" "}
        <Box
          w={["90%", "80%", "45%", "20%"]}
          my={["4", "8"]}
          height={["150PX", "190px"]}
          padding={["2", "3"]}
          display="flex"
          flexDirection={"column"}
          className=" rounded-xl cursor-pointer  box_shadow hover:shadow-2xl  justify-center items-center  transition-all ease-in-out duration-150 hover:scale-105   "
        >
          {" "}
          <Link
            className=" flex-col"
            onClick={scrollToBottom}
            to={"/webinar"}
            style={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              float: "left",
              justifyItems: "start",
            }}
          >
            <Image src={Book_webinar} w={[70, 120]} />

            <Heading className="heading_1" fontSize={["xl", "3xl"]}>
              Book Webinar
            </Heading>
            {/* <Text className="text">
            We hope you enjoy using our free online course planning. Stay tuned
            for the next part of the series, where we will explore .
          </Text> */}

            <Button
              variant={"link"}
              colorScheme="green"
              alignItems={"center"}
              display="flex"
              gap={"3"}
              paddingLeft="0"
            >
              More Info <HiOutlineArrowNarrowRight color="green" />
            </Button>
          </Link>
        </Box>{" "}
      </HStack>
      <HStack>
        <Heading
          className="heading_1 border-b-2 py-4 px-4 m-auto border-blue-900 w-fit"
          fontSize={["3xl", "4xl", "5xl"]}
          textAlign="center"
          // w={"100%"}
          mt={["4", "0"]}
        >
          Why Only Us
        </Heading>
      </HStack>
      <HStack
        justifyContent={"space-between"}
        className="whyonlyus container"
        flexDirection={["column", "column", "row", "row"]}
        mx={"auto"}
        my="8"
        gap={["4", "4", "6"]}
        flexWrap={"wrap"}
      >
        <Box
          flex={["100%", "50%", "28%", "18%"]}
          display="flex"
          flexDir={"column"}
          padding="4"
          justifyContent={"center"}
          h={["200"]}
          w={["100%", "30%"]}
          className=" text-blue-900  box_shadow hover:shadow-2xl transition-all items-center duration-100 hover:scale-105 rounded-xl"
        >
          <Image src={Teamsupport} objectFit="cover" h={120} />
          <Text
            children="Team Support"
            fontSize={["15"]}
            textAlign="center"
            px={"5"}
            fontWeight="bold"
          />
        </Box>
        <Box
          flex={["100%", "50%", "28%", "18%"]}
          display="flex"
          flexDir={"column"}
          padding="4"
          justifyContent={"space-around"}
          h={"200"}
          w={["100%", "30%"]}
          className=" text-blue-900  box_shadow hover:shadow-2xl transition-all items-center duration-100 hover:scale-105 rounded-xl"
        >
          <Image src={Freewebinar} objectFit="cover" h={120} />
          <Text
            children="Free Webinar"
            fontSize={["15"]}
            textAlign="center"
            px={"5"}
            fontWeight="bold"
          />
        </Box>
        <Box
          flex={["100%", "50%", "28%", "18%"]}
          display="flex"
          flexDir={"column"}
          padding="4"
          justifyContent={"space-around"}
          h={"200"}
          w={["100%", "30%"]}
          className=" text-blue-900  box_shadow hover:shadow-2xl transition-all items-center duration-100 hover:scale-105 rounded-xl"
        >
          <Image src={Regular_market} objectFit="cover" h={120} />
          <Text
            children="Regular Market updates "
            fontSize={["15"]}
            textAlign="center"
            px={"5"}
            fontWeight="bold"
          />
        </Box>
        {/* <Box
          flex={["100%", "50%", "28%", "18%"]}
          display="flex"
          flexDir={"column"}
          padding="4"
          justifyContent={"space-around"}
          h={"200"}
          w={["100%", "30%"]}
          className=" text-blue-900  box_shadow hover:shadow-2xl transition-all items-center duration-100 hover:scale-105 rounded-xl"
        >
          <Image src={FreeResearchSupport} objectFit="cover" h={120} />
          <Text
            children="Free Research Support"
            fontSize={["15"]}
            textAlign="center"
            px={"5"}
            fontWeight="bold"
          />
        </Box> */}
        <Box
          flex={["100%", "50%", "28%", "18%"]}
          display="flex"
          flexDir={"column"}
          padding="4"
          justifyContent={"space-around"}
          h={"200"}
          w={["100%", "30%"]}
          className=" text-blue-900  box_shadow hover:shadow-2xl transition-all items-center duration-100 hover:scale-105 rounded-xl"
          // boxShadow={"lg"}
        >
          <Image src={one_on_one} objectFit="cover" h={120} className=" mb-3" />
          <Text
            children="One to One Support"
            fontSize={["15"]}
            textAlign="center"
            px={"5"}
            fontWeight="bold"
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default OurCources;
