/** @format */

import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import classroom from "../../assets/classroom.svg";
import Slider from "./Slider";
import online_instructer from "../../assets/onlineeducation.svg";
import online_self from "../../assets/online_self.svg";
import Lottie from "react-lottie";
import class_room from "../../assets/class_room.json";
import Delivery_Methods from "../../assets/Delivery_Methods.png";

const DeliveryMethods = () => {
  const animation = {
    loop: true,
    autoplay: true,
    animationData: class_room,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box className="">
      <Box
        className=" sliderBefore"
        display={["flex"]}
        flexDirection={["column", "column", "column", "row"]}
      >
        <Card
          w={["100%", "100%", "100%", "50%"]}
          h={"100%"}
          pt={"10"}
          boxShadow="none"
          backgroundColor={"transparent"}
        >
          <Heading
            size="md"
            className="heading_1"
            fontSize={["2xl", "5xl"]}
            ml="5"
            w={["100%", "100%"]}
          >
            Our Available Delivery Methods
          </Heading>
          <CardBody>
            <Stack divider={<StackDivider />} spacing={["2", "4"]}>
              <Box className="p-2 md:p-5 rounded-xl hover:shadow-2xl transition-all duration-150 hover:scale-105">
                <Heading
                  fontSize={["md", "xl", "2xl"]}
                  textTransform="uppercase"
                  display={"flex"}
                  alignItems="center"
                >
                  <Image src={classroom} boxSize={["9", "12"]} mr={"4"} />
                  {/* <div className=" rounded-full border-red-600 border-solid border-4">
                    <Lottie
                      className="bg-transparent"
                      options={animation}
                      height={50}
                      width={50}
                    />
                  </div> */}
                  Classroom Training
                </Heading>
                <Text
                  pt="2"
                  fontSize={["sm", "md"]}
                  fontWeight={["medium", "semibold"]}
                >
                  Get trained at one of our dedicated venues within a quiet,
                  safe, and clean environment, away from the noise and pressure
                  of the workplace.
                </Text>
              </Box>
              <Box className=" p-2 md:p-5  rounded-xl hover:shadow-2xl transition-all duration-150 hover:scale-105">
                <Heading
                  fontSize={["md", "xl", "2xl"]}
                  textTransform="uppercase"
                  display={"flex"}
                  alignItems="center"
                >
                  <Image
                    src={online_instructer}
                    boxSize={["9", "12"]}
                    mr={"4"}
                  />
                  Online Instructor-Led Training
                </Heading>
                <Text
                  pt="2"
                  fontSize={["sm", "md"]}
                  fontWeight={["medium", "semibold"]}
                >
                  Attend our award-winning training courses via the virtual
                  classroom method with our excellent instructors at your home
                  without going anywhere.
                </Text>
              </Box>
              <Box className=" p-2 md:p-5 rounded-xl hover:shadow-2xl transition-all duration-150 hover:scale-105">
                <Heading
                  fontSize={["md", "xl", "2xl"]}
                  textTransform="uppercase"
                  display={"flex"}
                  alignItems="center"
                >
                  <Image src={online_self} boxSize={["9", "12"]} mr={"4"} />
                  Online Self-Paced Training
                </Heading>
                <Text
                  pt="2"
                  fontSize={["sm", "md"]}
                  fontWeight={["medium", "semibold"]}
                >
                  Get your desired training by gaining immediate Lifetime access
                  to our e-learning portal, which is accessible 24/7.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Box
          w={["100%", "100%", "100%", "50%"]}
          className=" flex justify-center items-center"
        >
          {/* <Slider /> */}
          <Image src={Delivery_Methods} />
        </Box>
      </Box>
    </Box>
  );
};

export default DeliveryMethods;
