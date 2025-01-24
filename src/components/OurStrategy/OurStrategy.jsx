/** @format */

import { Box, Divider, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
// import Ourstracturebefore from "../../assets/Ourstracturebefore.svg";

import { Container } from "@nextui-org/react";
import Lottie from "react-lottie";
import stratagy from "../../assets/Strategy.json";
import animation_2_main from "../../assets/lotti_2.json";
import animation_3_main from "../../assets/lotti_3.json";

const OurStrategy = () => {
  const animation_2 = {
    loop: true,
    autoplay: true,
    animationData: animation_2_main,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const animation_3 = {
    loop: true,
    autoplay: true,
    animationData: animation_3_main,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const animation = {
    loop: true,
    autoplay: true,
    animationData: stratagy,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container>
      {" "}
      <Box mt={"10"} w="100%" mx={"auto"}>
        <Box className="  " mx="auto">
          <Heading
            className="heading_1 border-b-2  border-blue-900 m-auto w-fit px-4 py-4"
            my={"7"}
            textAlign="center"
            fontSize={["3xl", "4xl", "5xl"]}
          >
            Our Strategy
          </Heading>
          <Box
            display={"flex"}
            flexDirection={["column", "column", "column", "row"]}
            justifyContent={["center", "space-between"]}
            gap={["6", "4", "6"]}
          >
            <Box
              className=" hover:shadow-2xl box_shadow_2 transition-all duration-150 hover:scale-105"
              backdropBlur={"3xl"}
              // bg="white"
              w={["100%", "100%", "100%", "30%"]}
              h={["270px", "300px"]}
              flexDirection={"column"}
              justifyContent={"space-around"}
              display={"flex"}
              // boxShadow="xl"
              // boxSizing="#3B82F6"
              padding={"10"}
              borderRadius="xl"
              position="relative"
              // my={["5", "0"]}
            >
              {/* <Image src={stratgy} w={"20"} /> */}
              <Box w={["100%"]} h={["40%"]} m={"auto"}>
                <Lottie
                  width={"100%"}
                  height={"100%"}
                  options={animation}

                  // width={350}
                />
              </Box>

              <Heading
                children="Signature Strategy"
                fontSize={["2xl", "2xl"]}
                className="heading_1 text-center mb-5"
              />
              <Divider color={"black"} colorScheme="blackAlpha" />
              <Text className="text text-center leading-5 mt-3">
                Learn to analyze and take decisions in stock market by
                understanding order flow analysis using my Signature Strategy.{" "}
              </Text>
            </Box>
            <Box
              className=" hover:shadow-2xl box_shadow_2 transition-all duration-150 hover:scale-105"
              // backdropBlur={"3xl"}
              // bg="white"
              w={["100%", "100%", "100%", "30%"]}
              h={["270px", "300px"]}
              flexDirection={"column"}
              justifyContent={"space-around"}
              display={"flex"}
              // boxShadow="xl"
              // boxSizing="#3B82F6"
              padding={"10"}
              borderRadius="xl"
              position="relative"
              // my={["0", "0"]}
            >
              {/* <Image src={detetrmines} w={"20"} /> */}
              <Box w={["50%"]} h={["40%"]} m={"auto"}>
                <Lottie className="bg-transparent" options={animation_3} />
              </Box>
              <Heading
                children="Determine Buying & Selling Volume"
                fontSize={["2xl", "2xl"]}
                className="heading_1  text-center mb-5"
              />
              <Divider color={"black"} colorScheme="blackAlpha" />

              <Text className="text  text-center leading-5 mt-3">
                How to determine the Big Buyers & Big Selling volume in the
                stock market which majorly affects the decisions & outcomes.{" "}
              </Text>
            </Box>{" "}
            <Box
              className=" hover:shadow-2xl box_shadow_2 transition-all duration-150 hover:scale-105"
              backdropBlur={"3xl"}
              // bg="white"
              w={["100%", "100%", "100%", "30%"]}
              h={["270px", "300px"]}
              flexDirection={"column"}
              justifyContent={"space-around"}
              display={"flex"}
              // boxShadow="xl"
              // boxSizing="#3B82F6"
              padding={"10"}
              borderRadius="xl"
              position="relative"
              my={["5", "0"]}
            >
              {/* <Image src={Appetites} w={["20"]} /> */}
              <Box w={["40%"]} h={["50%"]} m={"auto"}>
                <Lottie className="bg-transparent" options={animation_2} />
              </Box>

              <Heading
                children="Learn Risk Appetite"
                fontSize={["2xl", "2xl"]}
                className="heading_1  text-center mb-5"
              />
              <Divider color={"black"} colorScheme="blackAlpha" />

              <Text
                className="text text-center leading-5 mt-3"
                fontSize={("xs", "md")}
              >
                Learn what is risk appetite & how to determine and manage it.
                Why it is significant in the market.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OurStrategy;
