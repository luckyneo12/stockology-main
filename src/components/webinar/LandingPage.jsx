import React from "react";
import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import Webinar from "./webinar";
import Timer from "./Timer";
import arjunsir from "../../assets/arjun_bhandari.png";
const LandingPage = () => {
  return (
    <section className="bg-blue-100   ">
      <div className=" min-h-[100vh] flex items-center justify-center">
        <>
          <div>
            <Box
              display={["flex"]}
              flexDirection={["column", "column ", "column", "row"]}
              className="container"
              alignItems={"center"}
              gap={["10", "10", "10", "0"]}
              h={"100%"}
              width={"100%"}
              my="10"
            >
              <Box
                w={["100%", "100%", "100%", "80%"]}
                alignItems={["center", "center", "start", "start"]}
                className="flex justify-center flex-col relative "
              >
                <div>
                  <Heading
                    fontSize={["3xl", "5xl", "3xl", "5xl"]}
                    fontWeight={["semibold", "semibold", "bold", "bold"]}
                    className="heading_1"
                    w={"100%"}
                    marginTop={["0px", "40px", "0", "0"]}
                    textAlign={["center", "center", "left", "center"]}
                    my={["0"]}
                  >
                    Trainer : Arjun bhandari
                  </Heading>
                  <Text
                    fontSize={["sm", "md", "3xl", "3xl"]}
                    lineHeight={["4", "5", "5", "8"]}
                    textAlign={["center", "center", "justify", "left"]}
                    className="text"
                    width={["100%"]}
                  >
                    <span className="heading_1 font-bold mx-2"> Topic :</span>{" "}
                    Disclosing The Secret Of Trading Strategies
                  </Text>
                  <Image
                    h={("100%", "500px")}
                    src={arjunsir}
                    alt="Arjun bhandari"
                    zIndex={"modal"}
                    margin={"auto"}
                  />
                  {/* date */}
                  <div className=" bg-white p-3  my-4 rounded-lg shadow-xl  font-bold text-4xl w-full flex justify-between items-center">
                    <div className="  flex flex-col items-center border-r px-8 border-gray-600">
                      <h1 className=" text-red-500">DAY</h1>
                      <h1>THU - SUN </h1>
                    </div>
                    <div className="  flex flex-col items-center border-r px-4 border-gray-600">
                      <h1>15 - 25</h1>
                      <h1 className=" text-red-500">JUN</h1>
                    </div>
                    <div className=" flex flex-col items-center">
                      <h1 className=" text-red-500">TIME</h1>
                      <h1>
                        4 <span>PM</span> - 5 <span>PM</span>
                      </h1>
                    </div>
                  </div>
                  {/* date end */}
                </div>
                <Heading
                  fontSize={["3xl", "5xl", "3xl", "6xl"]}
                  fontWeight={["semibold", "semibold", "bold", "bold"]}
                  className="heading_1"
                  w={"100%"}
                  marginTop={["0px", "40px", "0", "0"]}
                  textAlign={["center", "center", "left", "left"]}
                  my={["8"]}
                >
                  <span>BOOK </span>YOUR WEBINAR
                </Heading>
              </Box>
              <VStack
                h={"full"}
                w={["100%", "100%", "100%", "50%"]}
                justifyContent="center"
                spacing={"5"}
              >
                <Timer />

                <Box className="shadow-md hover:scale-105 transition-all hover:shadow-lg p-5 rounded-xl h-full bg-white bg-opacity-50">
                  <Webinar />
                </Box>
              </VStack>
            </Box>
          </div>
        </>
      </div>
    </section>
  );
};

export default LandingPage;
