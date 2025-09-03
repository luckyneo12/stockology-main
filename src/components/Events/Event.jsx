import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Group_photo from "../../assets/group_photo.png";
import { Container } from "@nextui-org/react";
import logo from "../../assets/logo.svg";
import { BsDot } from "react-icons/bs";
import { List } from "./List";
import TransitionExample from "./EventModel";
import TransitionExampleMobile from "./EventModelMobile";
function Event() {
  return (
    <div>
      <Container lg>
        <Stack
          direction={["column", "column", "row", "row"]}
          w={"100%"}
          justifyContent={["center", "center", "center", "space-between"]}
          alignItems="center"
          className="  md:h-screen max-h-[1500px] max-md:h-[900px]"
          // spacing={["28"]}
        >
          <VStack
            width={"full"}
            align={["center"]}
            flexDir={["column", "row"]}
            // spacing={["6", "12", "12", "10"]}
            className="   md:justify-between  justify-center   h-full"
            pr={[0, 0]}
          >
            <Image className=" block md:hidden" src={logo} w={300} />

            <Heading
              fontSize={["md"]}
              fontWeight={["bold", "semibold", "bold", "bold"]}
              className="heading_1  items-center  gap-2  flex md:hidden  justify-center"
              w={"100%"}
              textAlign={["center"]}
            >
              AN EXCLUSIVE 12-DAY{" "}
              <span className="  flex md:hidden justify-center items-center rounded-full text-sm bg-red-600 px-2 py-1 text-white">
                <BsDot size={20} /> Live Online Classes
              </span>
            </Heading>
            <div className=" md:hidden  block">
              <Button colorScheme="red"> Start From 18 October, 2023</Button>
            </div>
            <Image src={Group_photo} className="  w-full  md:w-8/12  " />
            <Stack className=" justify-center flex items-center ">
              <Image className=" hidden md:block" src={logo} w={300} />
              <Heading
                fontSize={["xl"]}
                fontWeight={["bold", "semibold", "bold", "bold"]}
                className="heading_1   gap-2  hidden md:flex  justify-center"
                w={"100%"}
                marginTop={["0px", "40px", "0", "0"]}
                textAlign={["center"]}
              >
                AN EXCLUSIVE 12-DAY{" "}
                <span className="  hidden md:flex justify-center items-center rounded-full text-sm bg-red-600 px-2 py-1 text-white">
                  <BsDot size={20} /> Live Online Classes
                </span>
              </Heading>
              <div className=" md:block hidden">
                <Button colorScheme="red"> Start From 18 October, 2023</Button>
              </div>
              <TransitionExampleMobile />

              <Text fontSize={["3xl"]}>Mastering The Stock Market</Text>

              <Text textAlign={"center"}>
                Mastering stock market technical analysis from experts entails
                becoming proficient in price chart analysis and trading
                patterns. Ongoing learning and consistent practice are crucial,
                as experts continually enhance their skills and stay current
                with market developments.
              </Text>
              {/* topic */}
              <Text color={"red.600"} className=" text-center">
                Technical Analysis | Greeks Strategies | Risk Management | Q&A
                with Experts
              </Text>
              {/* <a
                href="https://easebuzz.in/quickpay/gcwnylobni"
                className=" md:block hidden"
              >
                <Button colorScheme="red" className=" flex gap-1">
                  Register Now At <span className="line-through"> ₹15000</span>{" "}
                  ₹ 10000/-
                </Button>
              </a> */}
              <TransitionExample />
              <Text>(Early Bird Offer Excluding GST and convenience fees)</Text>
              <Box className=" bg-gray-700 rounded-xl px-5 py-4">
                <Text className=" text-white">
                  Registered participants will receive Free downloadable course
                  material.
                </Text>
              </Box>
            </Stack>
          </VStack>
        </Stack>
        <List />
      </Container>{" "}
    </div>
  );
}

export default Event;
