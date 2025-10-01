import {
  Box,
  Card,
  CardBody,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { Container, Image } from "@nextui-org/react";

import AboutSlider from "./AboutSlider";

// import ArjunBhandari from "./ArjunBhandari";
import Manishsharma from "./Manishsharma";
import Manish_Kumar from "./Manish_kumar";

import Lottie from "react-lottie";
import about_page_main from "../../assets/about_page_main.json";
import AboutGallary from "./AboutGallary";
import Sohanray from "./Sohanray_sir";
import What_we_do from "../../assets/What_we_do.png";
import Slider from "../DeleveryMethod/Slider";

import { BsChevronDoubleRight } from "react-icons/bs";
// import Harsh_Rai from "./Harshrayi";
import YogeshJain from "./YogeshJain";
import Blank from "./Blank";

const About = () => {
  const animation = {
    loop: true,
    autoplay: true,
    animationData: about_page_main,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <section>
        <Container lg>
          <Stack
            direction={["column", "column", "row", "row"]}
            w={"100%"}
            justifyContent={["center", "center", "center", "space-between"]}
            alignItems="center"
            className="About_bg  md:h-screen max-h-[1500px] max-md:h-[900px]"
            // spacing={["28"]}
          >
            <VStack
              width={"full"}
              align={["center", "flex-start"]}
              spacing={["6", "12", "12", "10"]}
              className=" mt-5 md:mt-40 md:w-2/3 w-full h-full"
              pr={[0, 20]}
            >
              <Heading
                fontSize={["4xl", "5xl", "3xl", "6xl"]}
                fontWeight={["bold", "semibold", "bold", "bold"]}
                className="heading_1"
                w={"100%"}
                marginTop={["0px", "40px", "0", "0"]}
                textAlign={["center", "center", "left", "left"]}
              >
                <span>Welcome </span>to Stockology Securities Private Limited
              </Heading>

              {/* <Text
            fontSize={['xs', 'sm', 'lg', 'lg']}
            lineHeight={['4', '4', '5', '8']}
          >
            STOCKOLOGY SECURITIES is a Indian Based educational firm 1,000,000
            and its paid up capital is Rs. 100,000."
          </Text> */}
              <Text
                fontSize={["lg", "md", "sm", "xl"]}
                lineHeight={["5", "5", "5", "8"]}
                textAlign={["justify", "justify", "justify", "left"]}
                className=" font-semibold"
                width={["100%"]}
              >
                Our endeavor is to empower the citizens of India by providing
                them with the means to make informed trading & investing in one
                of the world's most lucrative asset classes—the stock market.
                Despite a population of 142 crores people, the number of Demat
                account holders in India is currently less than 11.5 crores, as
                reported by the National Securities Depository Limited. Our
                primary objective is to significantly increase this figure by
                offering comprehensive guidance on wise trading & investing
                strategies that maximize profits. Through offline & online
                workshops, we are dedicated to enhancing financial literacy and
                equipping individuals with the knowledge to navigate the realm
                of investing successfully.
              </Text>
              <Text
                className=" font-semibold text-xl"
                textDecoration={""}
                // fontSize={["sm", "sm", "sm", "lg"]}
              >
                Our aim to increase this number by guiding them to invest
                wisely, for maximum profits. We help them become financial
                literate, via online/offline workshops PAN India
              </Text>
            </VStack>
            {/* <Image className="bannerimg" width={990} src={about} /> */}
            {/* <Lottie
              className="bg-transparent"
              options={animation}
              height={800}
              width={800}
            /> */}
            {/* <Box className=" w-5/12 h-full relative  "> */}
            <AboutGallary />
            {/* </Box> */}
          </Stack>
          <Heading
            className="heading_1 my-10"
            fontSize={["3xl", "3xl", "4xl", "5xl"]}
            textAlign="center"
            w={"100%"}
          >
            Meet Our Elite Team of Trainers
          </Heading>
          <div></div>
          <div className=" flex gap-4  flex-wrap justify-between my-5">
            {" "}
            <YogeshJain />
            <Manish_Kumar />
            <Manishsharma />
            {/* <Sohanray /> */}
            {/* <Harsh_Rai /> <ArjunBhandari /> */}
            {/* <Blank /> */}
          </div>
        </Container>
        <Box className="  bg-gradient-to-b  from-cyan-800 to-white mt-16 ">
          <Container>
            <Box className="flex md:flex-row flex-col items-center w-full">
              <Box className=" w-full md:mt-0 mt-5 md:w-3/5">
                <Image src={What_we_do} height={"100%"} />
              </Box>
              <Box my={"6"} h={"fit-content"} className=" w-4/5  md:w-2/5">
                <AboutSlider />
              </Box>
            </Box>
          </Container>
        </Box>

        <Container lg>
          <Heading
            className="heading_1 "
            fontSize={["3xl", "3xl", "4xl", "5xl"]}
            textAlign="center"
            w={"100%"}
          >
            Finance + Edu-Tech
          </Heading>
          <Box
            className=" finance_bg"
            display={["flex"]}
            flexDirection={["column", "column", "column", "row"]}
            justifyContent={"space-between"}
          >
            <Box w={["100%", "100%", "100%", "50%"]} py="10">
              <Card className=" bg-transparent" boxShadow={"md"}>
                <CardBody>
                  <Stack divider="" spacing="2">
                    <Box>
                      <Text
                        pt="2"
                        fontSize="3xl"
                        className=" font-bold heading_1"
                      >
                        Stock Market Training
                      </Text>
                    </Box>
                    <Box mt={"0"}>
                      <List spacing={"0"}>
                        <ListItem className="  flex   hover:shadow-lg hover:scale-105 transition-all duration-150 rounded-md">
                          <Text className="  flex gap-2  text-xl font-semibold">
                            {/* <FaCircle color="red.500" /> */}
                            <BsChevronDoubleRight className=" " size={"30"} />
                            {/* <Image src={Number_1} width={60} /> */}
                            Learn A to Z about Stock Market with our best Mentor
                          </Text>
                        </ListItem>
                        <ListItem className="   flex   text-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-150 p-1 rounded-md">
                          {/* <ListIcon as={FaCircle} color="red.500" /> */}
                          <Text className="  flex gap-2  text-xl font-semibold">
                            <BsChevronDoubleRight className=" " size={"30"} />
                            {/* <Image src={Number_2} width={60} /> */}
                            Beginner to advance level course
                          </Text>
                        </ListItem>

                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-1 rounded-md">
                          {/* <ListIcon as={FaCircle} color="red.500" /> */}
                          <Text className="  flex gap-2  text-xl font-semibold">
                            <BsChevronDoubleRight className=" " size={"30"} />
                            Simple and easy-to-understand lectures
                          </Text>
                        </ListItem>
                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-1 rounded-md">
                          {/* <ListIcon as={FaCircle} color="red.500" /> */}
                          <Text className="  flex gap-2  text-xl font-semibold">
                            <BsChevronDoubleRight className=" " size={"30"} />
                            {/* Option Special */}
                            Mutual Fund

                          </Text>
                        </ListItem>
                        {/* <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-1 rounded-md"> */}
                          {/* <ListIcon as={FaCircle} color="red.500" /> */}
                          {/* <Text className="  flex gap-2  text-xl font-semibold">
                            <BsChevronDoubleRight className=" " size={"30"} />
                            Live Trading
                          </Text>
                        </ListItem> */}

                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-1 rounded-md">
                          {/* <ListIcon as={FaCircle} color="red.500" /> */}
                          <Text className="  flex gap-2  text-xl font-semibold">
                            <BsChevronDoubleRight className=" " size={"30"} />
                            Certification courses
                          </Text>
                        </ListItem>
                      </List>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
            <Box
              w={["100%", "100%", "100%", "50%"]}
              className="  px-5  md:px-16 "
            >
              <Slider />
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default About;
