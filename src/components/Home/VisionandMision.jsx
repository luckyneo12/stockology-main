/** @format */

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Container } from "@nextui-org/react";
import React from "react";
import vision from "../../assets/Vision & Mission 1.svg";
import Mission from "./Mission";

const VisionandMision = () => {
  return (
    <Container lg className=" mb-10">
      <Box
        className=""

        // minH={['400px', 'fit-content', 'fit-content', '800px']}
      >
        <Box className="">
          <Heading
            className=" my-3 visionHeading"
            textAlign={"center"}
            paddingY={["10", "10", "16"]}
            fontSize={["4xl", "5xl"]}
            fontWeight="thin"
            textDecoration={"underline"}
          >
            Vision <span> & </span>Mission
          </Heading>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            className="rectengle"
          >
            <Box
              display={"flex"}
              flexDir={["column", "column", "row"]}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Box w={["100%", "100%", "45%"]}>
                <Text
                  className="text"
                  lineHeight={["5", "6", "6", "8"]}
                  fontSize={["xs", "md"]}
                  textAlign={["justify", "justify", "justify", "left"]}
                >
                  In a country of 125 crore only 27% people are financially
                  literate, Stockologysecurities.com recognizes that the lack of
                  financial literacy is a serious impediment to the economic
                  growth of India. Hence, it transformed into our mission to
                  spread financial literacy to more and more individuals in
                  multiple ways. Anyone can learn this basic life skill from us,
                  and evolve into a financially aware individual.Everyone who is
                  keen to learn about stock market and aspires to make more, No
                  matter who we are and where we are , learning empowers us to
                  change and grow and redefines what’s possible.Thats why access
                  to best learning is a right, not a privilege.
                  <br />
                  <br /> Join Stockologysecurities.com for best financial
                  courses and to connect with our awesome mentors who makes
                  learning a lot fun
                </Text>
              </Box>
              <Box w={["100%", "45%"]} className="  visionBefore">
                {/* <Image
                  src={vision}
                  position={"relative"}
                  zIndex="1"
                  my={["0", "6", "0"]}
                  // my={'10'}
                  padding={["2", "0", "0", "10"]}
                /> */}
                {/*  vision and  mission  start */}

                <Mission />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default VisionandMision;
