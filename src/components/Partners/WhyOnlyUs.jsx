import { Box, Container, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Divider } from "@nextui-org/react";
import React from "react";
import { useState } from "react";
import TeamWork from "../../assets/TeamWork.png";
import Network from "../../assets/network.png";
import infrastructure from "../../assets/infrastructure.png";
import flexibility from "../../assets/flexibility.png";
import security from "../../assets/security.png";
import Learning from "../../assets/Learning.png";
const WhyOnlyUs = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggletab = (index) => {
    setToggleState(index);
    console.log(index);
  };
  return (
    <>
      <HStack>
        <Heading
          className="heading_1"
          fontSize={["3xl", "3xl", "4xl", "5xl"]}
          textAlign="center"
          w={"100%"}
        >
          Why Only Us
        </Heading>
      </HStack>
      <HStack
        justifyContent={"center"}
        className="whyonlyus container"
        mx={"auto"}
        my="16"
        flexWrap={"wrap"}
        gap="10"
      >
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          h={"250"}
          className=" py-5 w-96 whyonlyCard  "
        >
          <Text
            px={"5"}
            className={
              toggleState === 1 ? "font-bold py-3  active-content" : " content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            Team Support
          </Text>
          <Text
            px={"5"}
            className={
              toggleState === 1
                ? " font-medium  py-3 active-content"
                : " content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            <span className=" font-bold px-2">Need Some Help?</span> Say Goodbye
            to Slow Support & Hello to Quick, Accurate Solutions.
          </Text>
          <Text
            px={"5"}
            className={
              toggleState === 2
                ? "font-bold  active-content"
                : "font-bold content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            Network
          </Text>
          <Text
            px={"5"}
            className={
              toggleState === 2
                ? " font-medium  py-3 active-content"
                : " content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            Leverage our reach, our identity and our connections into the deeper
            underserved markets
          </Text>
          <Text
            px={"5"}
            className={
              toggleState === 3
                ? "font-bold  active-content"
                : "font-bold content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            Infrastructure
          </Text>{" "}
          <Text
            px={"5"}
            className={
              toggleState === 3
                ? " font-medium  py-3 active-content"
                : " content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            A flexible, organic and holistic platform backed with a reputed
            brand and committed team
          </Text>
          <Text
            px={"5"}
            className={
              toggleState === 4
                ? "font-bold  active-content"
                : "font-bold content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            Flexibility
          </Text>{" "}
          <Text
            px={"5"}
            className={
              toggleState === 4
                ? " font-medium  py-3 active-content"
                : " content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            Sample Data for flexibility
          </Text>
          <Text
            px={"5"}
            className={
              toggleState === 5
                ? "font-bold  active-content"
                : "font-bold content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            Security
          </Text>{" "}
          <Text
            px={"5"}
            className={
              toggleState === 5
                ? " font-medium  py-3 active-content"
                : " content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            Aim to be financially independent with sustainable
            full-time/part-time job and guaranteed home
          </Text>
          <Text
            px={"5"}
            className={
              toggleState === 6
                ? "font-bold  active-content"
                : "font-bold content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            Learning
          </Text>{" "}
          <Text
            px={"5"}
            className={
              toggleState === 6
                ? " font-medium  py-3 active-content"
                : " content"
            }
            fontSize={["17"]}
            textAlign="center"
          >
            A comprehensive library of financial sector and stock market
          </Text>
        </Box>
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent={"space-between"}
          h={"270"}
          onMouseOver={() => toggletab(1)}
          className={`py-5 w-60 whyonlyCard hover:shadow-2xl transition-all ease-in-out duration-150 hover:bg-blue-300 shadow-gray-900 active-tab   rounded-lg `}
        >
          <Image src={TeamWork} w={200} mx="auto" />

          <Text
            px={"5"}
            className=" font-bold"
            children="Team Support"
            fontSize={["17"]}
            textAlign="center"
          />
        </Box>
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent={"space-between"}
          h={"270"}
          onMouseOver={() => toggletab(2)}
          className={` py-5 w-60 whyonlyCard hover:shadow-2xl shadow-sm transition-all ease-in-out duration-150 hover:bg-blue-300 shadow-gray-900   rounded-lg `}
        >
          <Image src={Network} w={200} mx="auto" />

          <Text
            px={"5"}
            className=" font-bold"
            children="Network"
            fontSize={["17"]}
            textAlign="center"
          />
        </Box>{" "}
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent={"space-between"}
          h={"270"}
          onMouseOver={() => toggletab(3)}
          className=" py-5 w-60 whyonlyCard hover:shadow-2xl transition-all ease-in-out duration-150 hover:bg-blue-300  shadow-gray-900   rounded-lg "
        >
          <Image src={infrastructure} w={200} mx="auto" />

          <Text
            px={"5"}
            className=" font-bold"
            children="Infrastructure"
            fontSize={["17"]}
            textAlign="center"
          />
        </Box>{" "}
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent={"space-between"}
          h={"270"}
          onMouseOver={() => toggletab(4)}
          className=" py-5 w-60 whyonlyCard hover:shadow-2xl transition-all ease-in-out duration-150 hover:bg-blue-300 shadow-gray-900   rounded-lg "
        >
          <Image src={flexibility} w={200} mx="auto" />

          <Text
            px={"5"}
            className=" font-bold"
            children="Flexibility "
            fontSize={["17"]}
            textAlign="center"
          />
        </Box>{" "}
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent={"space-between"}
          h={"270"}
          onMouseOver={() => toggletab(5)}
          className=" py-5 w-60 whyonlyCard hover:shadow-2xl shadow-sm transition-all ease-in-out duration-150 hover:bg-blue-300 shadow-gray-900   rounded-lg "
        >
          <Image src={security} w={200} mx="auto" />

          <Text
            px={"5"}
            className=" font-bold"
            children="Security"
            fontSize={["17"]}
            textAlign="center"
          />
        </Box>{" "}
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent={"space-between"}
          h={"270"}
          onMouseOver={() => toggletab(6)}
          className=" py-5 w-60 whyonlyCard hover:shadow-2xl transition-all ease-in-out duration-150 hover:bg-blue-300 shadow-gray-900   rounded-lg "
        >
          <Image src={Learning} w={200} mx="auto" />

          <Text
            px={"5"}
            className=" font-bold"
            children="Learning"
            fontSize={["17"]}
            textAlign="center"
          />
        </Box>
      </HStack>
    </>
  );
};

export default WhyOnlyUs;
