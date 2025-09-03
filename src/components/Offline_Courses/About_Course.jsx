import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { Container } from "@nextui-org/react";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const About_Course = () => {
  return (
    <>
      <Container lg>
        <Heading
          className="heading_1 m-auto border-b-2 py-4 px-4 border-blue-900 w-fit"
          fontSize={["3xl", "4xl", "5xl"]}
          // w={"100%"}
          mt={["4", "0"]}
        >
          About Course
        </Heading>
        <Text
          fontSize={["md", "lg"]}
          className=" w-full md:w-5/6 m-auto text-center  font-semibold text-xl"
        >
          Our course has been carefully designed to cater to beginners,
          providing a solid foundation and gradually progressing towards
          advanced topics. It encompasses a comprehensive curriculum that spans
          from the basics to an advanced level
        </Text>
        <HStack
          gap={10}
          my={"10"}
          display={["block", "flex"]}
          alignItems={"self-start"}
        >
          <Box className=" w-full md:w-2/4 flex gap-2 flex-col shadow-2xl px-2 md:px-7 py-5 rounded-xl">
            <Text
              fontSize={["lg", "2xl"]}
              className="flex items-center gap-3  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {" "}
              <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "}
              Base Build Up
            </Text>
            <Text
              fontSize={["md", "2xl"]}
              className="flex items-center gap-3  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {" "}
              <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "}
              Technical Analysis
            </Text>
            <Text
              fontSize={["md", "2xl"]}
              className="flex items-center gap-3  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {" "}
              <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "}
              Psychology Development
            </Text>
            <Text
              fontSize={["md", "2xl"]}
              className="flex items-center gap-3  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1   "
            >
              {" "}
              <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "}
              Advance Technical Analysis
            </Text>
            <Text
              fontSize={["md", "2xl"]}
              className="flex items-center gap-3  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {" "}
              <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "}
              Option Buying & Option Selling
            </Text>
            {/* <Text
              fontSize={["md", "2xl"]}
              className="flex items-center gap-3  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {" "}
              <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "}
              Live Trading
            </Text> */}
          </Box>
          <Box
            // h={"332px"}

            className=" shadow-2xl px-0 md:px-7 mt-24 pb-5  pt-10 md:py-5 rounded-xl flex flex-col gap-0 w-full  md:w-2/4   items-start justify-start "
          >
            <Heading fontSize={["2xl", "3xl"]} className="">
              Courses Detail
            </Heading>
            <Text
              fontSize={["md", "xl"]}
              className="flex items-center gap-3 w-full  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {/* {" "}
              <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "} */}
              <span className=" font-semibold"> Module 1: </span> Stock Market
              basics
            </Text>
            <Text
              fontSize={["md", "xl"]}
              className="flex items-center gap-3 w-full  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {/* {" "}
              <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "} */}
              <span className=" font-semibold"> Module 2: </span> Technical
              Analysis
            </Text>{" "}
            <Text
              fontSize={["md", "xl"]}
              className="flex items-center gap-3 w-full  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {" "}
              {/* <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "} */}
              <span className=" font-semibold"> Module 3: </span> Virtual
              Trading 
              {/* & Live Trading */}
            </Text>{" "}
            <Text
              fontSize={["md", "xl"]}
              className="flex items-center gap-3 w-full  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {" "}
              {/* <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "} */}
              <span className=" font-semibold"> Module 4: </span>Advance
              Technical Analysis
            </Text>
            <Text
              fontSize={["md", "xl"]}
              className="flex items-center gap-3 w-full  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {" "}
              {/* <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "} */}
              <span className=" font-semibold"> Module 5: </span>Option Buying
            </Text>{" "}
            <Text
              fontSize={["md", "xl"]}
              className="flex items-center gap-3 w-full  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {" "}
              {/* <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "} */}
              <span className=" font-semibold"> Module 6: </span>Option Selling
            </Text>{" "}
            <Text
              fontSize={["md", "xl"]}
              className="flex items-center gap-3 w-full  hover:scale-105 hover:shadow-xl duration-300 ease-in-out  px-3 rounded-xl py-1 "
            >
              {" "}
              {/* <BsArrowRightCircleFill
                fontSize={"20px"}
                className=" text-red-600"
              />{" "} */}
              <span className=" font-semibold"> Module 7: </span>Trading
              Psychology
            </Text>
          </Box>
        </HStack>
      </Container>
    </>
  );
};

export default About_Course;
