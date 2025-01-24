import { Box, HStack, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Container, Image } from "@nextui-org/react";
import React from "react";

import { BsPeople } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineStatusOnline, HiStatusOffline } from "react-icons/hi";

const Online_page = () => {
  return (
    <>
      <Box>
        <Container lg>
          <Stack
            height={["15vh", "100vh"]}
            alignItems={"center"}
            flexDir={"row"}
            maxH={"800px"}
          >
            <Box className=" flex  flex-col gap-8">
              <Text> The Leader in Online Learning</Text>
              <Heading fontSize={["6xl"]}>
                Engaging & Accessible Online <br /> Courses For All
              </Heading>
              <Text> Own Your Fyture learning now stsds</Text>
              <Text>
                Trusted by Own 15k User <br />
                World wide since 2022
              </Text>
              <Box className=" flex">
                <Heading>1000+</Heading>
                <Heading>4.4</Heading>
              </Box>
            </Box>
            {/* Image box */}

            <Box w={"60%"}>
              {/* <Image src={Man} width={"100%"} height={"100%"} /> */}
            </Box>
            {/* Image box */}
          </Stack>
          <HStack justifyContent={"space-between"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              gap={5}
              p={"4"}
              className=" border-2 items-center bg-white rounded-xl"
            >
              <BsPeople />
              <Box>
                <Heading fontSize={"2xl"}>50K</Heading>
                <Heading>Students</Heading>
              </Box>
            </Box>

            <Box>
              <IoIosPeople />
            </Box>
            <Box>
              <HiStatusOffline />
            </Box>
            <Box>
              <HiOutlineStatusOnline />
            </Box>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Online_page;
