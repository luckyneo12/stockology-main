import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CheckFreeVideo = () => {
  return (
    <>
      <Box w="100%">
        <Box
          className="container"
          display={"flex"}
          flexDir="column"
          height={"100%"}
          justifyContent="space-between"
        >
          <Heading
            mb={["2", "10"]}
            className="heading_1"
            fontSize={["xl", "2xl", "5xl"]}
            textAlign="center"
          >
            Check Out Our Free Course Now
          </Heading>
          <Text
            className="text"
            textAlign={"center"}
            fontSize={["xs", "xs", "sm"]}
            w={["100%", "100%", "100%", "50%"]}
            mx="auto"
            my={["3", "10"]}
          >
            We help you quench your thirst for knowledge by providing you with
            our specially tailored certifications. Our highly qualified
            instructors, dedicated staff, and 24/7 available helpline are the
            main reasons why we’re the go-to training provider for you.
          </Text>
          <Box
            mx={"auto"}
            my={["5", "10"]}
            display={"flex"}
            gap={["3", "6"]}
            flexWrap={"wrap"}
            px={["10"]}
            justifyContent="space-between"
          >
            <iframe
              width="30%"
              height="20%"
              className=" bg-white py-7 hover:shadow-xl ease-in-out px-5 mx-auto min-w-[250px] min-h-[100px] rounded-xl hover:scale-105 transition-all duration-150 "
              src="https://www.youtube.com/embed/ij5lH57A8zA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="30%"
              height="20%"
              className=" mx-auto py-7 bg-white hover:shadow-xl ease-in-out px-5 min-w-[250px] min-h-[100px] rounded-xl hover:scale-105 transition-all duration-150 "
              src="https://www.youtube.com/embed/_om2Ixkf5sw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="30%"
              className=" mx-auto py-7 px-5 hover:shadow-xl ease-in-out bg-white min-w-[250px] min-h-[100px] rounded-xl hover:scale-105 transition-all duration-150 "
              height="20%"
              src="https://www.youtube.com/embed/XbVkz9_FA2Q"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Box>
          <Box display={"flex"} alignItems="center" justifyContent={"center"}>
            <Link to="/courses">
              <Button
                size={["md", "lg", "md", "lg"]}
                colorScheme="red"
                my={["3", "10"]}
                borderRadius={"full"}
                width={["40", "72", "48", "72"]}
              >
                View Course
              </Button>
            </Link>
          </Box>{" "}
        </Box>
      </Box>
    </>
  );
};

export default CheckFreeVideo;
