/** @format */
import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
// import { Link } from 'react-router-dom';
import contactus from "../../assets/contact_page_main.png";

// import { FiPhone } from 'react-icons/fi';
import mail from "../../assets/mail.svg";
import call from "../../assets/call.svg";

import contactImage_3d from "../../assets/conntactImage_3d.png";
import { Container, Image, Link } from "@nextui-org/react";
import Contact from "../contact-form/contact";

const Contact_page = () => {
  return (
    <div>
      {" "}
      <div className=" bg-blue-100  ">
        <Container lg>
          <Stack
            direction={["column", "column", "row", "row"]}
            height={["50vh"]}
            className=" pt-40"
            w={"100%"}
            maxH={"900px"}
            justifyContent={["center", "center", "center", "space-between"]}
            alignItems="center"
            spacing={["18"]}
          >
            <VStack
              width={"full"}
              align={["center", "center", "flex-start", "flex-start"]}
              spacing={["6", "6", "6", "8"]}
              w={["100%", "50%"]}
            >
              <Heading
                fontSize={["3xl", "5xl", "3xl", "6xl"]}
                fontWeight={["semibold", "semibold", "bold", "bold"]}
                className="heading_1"
                w={"100%"}
                marginTop={["0px", "40px", "0", "0"]}
                textAlign={["center", "center", "left", "left"]}
              >
                <span>Team </span>Stockology
              </Heading>
              <Heading className="heading_1" fontSize={"sm"}>
                Hey there!
              </Heading>
              <Text
                fontSize={["sm", "md", "sm", "lg"]}
                lineHeight={["4", "5", "5", "8"]}
                textAlign={["justify", "justify", "justify", "left"]}
                className="text"
                width={["100%"]}
                children="Welcome to Stockology. We are glad to have you onboard. Please let us know if you need any help or have any query related to our application or courses. Our goal is to ensure you have a positive experience and get the most out of our courses.  Also we would appreciate your feedback for making the experience more wholesome for you.  "
              />
              <Link to="/courses">
                <Button
                  size={["md", "lg", "md", "lg"]}
                  float={"left"}
                  colorScheme="red"
                  borderRadius={"full"}
                  width={["40", "40", "48", "72"]}
                >
                  View Course
                </Button>
              </Link>
            </VStack>
            <Image className="" src={contactus} width={820} />
          </Stack>
          <Box className="slidercontainer  bg-blue-100">
            <Box
              className="container sliderBefore"
              display={["flex"]}
              py="10"
              alignItems={"center"}
              justifyContent={"space-between"}
              my={"0"}
              flexDirection={["column", "column", "column", "row"]}
            >
              <Box w={["100%", "100%", "100%", "50%"]}>
                <Box className="contact-img" mt={"28"}>
                  <Image src={contactImage_3d} className=" max-w-xl" />
                </Box>
              </Box>
              <Box
                w={["100%", "100%", "100%", "50%"]}
                className=" flex flex-col items-start"
              >
                <Text
                  fontSize={"5xl"}
                  w="fit-content"
                  className="heading_1 contact   "
                  fontWeight={"semibold"}
                >
                  Contact Us..!!
                </Text>
                <Contact />
              </Box>
            </Box>
          </Box>
          <Box mt={"5"} className="container">
            <Heading
              display={"flex"}
              textAlign="center"
              justifyContent={"center"}
              letterSpacing="widest"
              fontSize={["md", "lg", "2xl", "3xl"]}
            >
              Let's help you
              <span className="mx-2 md:mx-3  text-red-600"> navigate</span>
              your next
            </Heading>
            <Box
              display={"flex"}
              className=" flex-wrap"
              flexDirection={["column", "column", "row"]}
              // justifyContent="space-around"
              gap={4}
            >
              <Box
                width={["100%", "100%", "40%", "30%"]}
                my="10"
                display={"flex"}
                flexDir="column"
                gap={"20px"}
                className="hover:scale-105 hover:transition-all duration-150 hover:shadow-xl shadow-md"
                alignItems={["flex-start"]}
                backgroundColor={"white"}
                borderRadius="10px"
                justifyContent={""}
                overflow={"hidden"}
              >
                {/* <Image src={location} objectFit="cover" width={385} /> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d919.8551313507357!2d75.8988274!3d22.74977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fde5d9284adb%3A0xfc17a6669d838d2c!2sStockology!5e0!3m2!1sen!2sin!4v1697796268712!5m2!1sen!2sin"
                  width="385"
                  height="250"
                  style={{ borderRadius: "10px" }}
                  // style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                <Heading fontSize={["md", "xl"]} ml="3" className="heading_1">
                  Stockology: Share Market Institute
                </Heading>
                <Text className="text" fontSize={["xs", "sm", "md"]} ml={"3"}>
                  Stockology, 2nd floor , Plot no. 64, RatnaLok Colony, Sch No
                  53, near Vijay Nagar, Indore, Madhya Pradesh 452011
                </Text>
                <Text
                  ml={"5"}
                  display={"flex"}
                  alignItems="center"
                  gap={"10px"}
                  textColor="gray.900"
                  fontSize={["xs", "sm", "md"]}
                >
                  <Image src={call} />
                  <a
                    href="tel:+91 8349747038"
                    target={""}
                    className=" text-gray-600"
                  >
                    +91-8349747038
                  </a>
                </Text>
                <Link
                  href={"mailto:manish.k@stockologysecurities.com"}
                  target="_blank"
                  className=" z-20"
                >
                  <Text
                    ml={"5"}
                    display={"flex"}
                    alignItems="center"
                    gap={"10px"}
                    textColor="gray.900"
                    mb={"10"}
                    textAlign="justify"
                    fontSize={["xs", "sm", "md"]}
                  >
                    <Image src={mail} />
                    support@stockologysecurities.com
                  </Text>
                </Link>
              </Box>
              <Box
                width={["100%", "100%", "40%", "30%"]}
                my="10"
                display={"flex"}
                flexDir="column"
                gap={"20px"}
                alignItems={["flex-start"]}
                backgroundColor={"white"}
                borderRadius="10px"
                justifyContent={""}
                overflow={"hidden"}
                className="hover:scale-105 hover:transition-all duration-150 hover:shadow-xl shadow-md"
              >
                {/* <Image src={location} width={385} objectFit="cover" /> */}
                <iframe
                  // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.14859449749804!2d77.43690456467401!3d23.229345759179967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c425d2a8d984f%3A0xaf6c644131afa26a!2sPinnacle%20Career%20Institute!5e0!3m2!1sen!2sin!4v1688644123952!5m2!1sen!2sin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.27049888285!2d77.43118167571863!3d23.23324177902674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43c475ab600d%3A0x7d4c7c62c5636a5b!2sStockology%20Education%20(Stock%20and%20Share%20market%20classes)!5e0!3m2!1sen!2sin!4v1737704121372!5m2!1sen!2sin"                  width="385"
                  height="250"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <Heading fontSize={["md", "xl"]} ml="3" className="heading_1">
                  Stockology: Share Market Institute
                </Heading>
                <Text className="text" ml={"3"} fontSize={["xs", "sm", "md"]}>
                3RD FLOOR, Jyoti Complex, Zone-I, Maharana Pratap Nagar, Madhya Pradesh 462023<br /> Bhopal
                </Text>
                <Text
                  ml={"5"}
                  display={"flex"}
                  alignItems="center"
                  gap={"10px"}
                  textColor="gray.900"
                  fontSize={["xs", "sm", "md"]}
                >
                  <Image src={call} />
                  <a
                    href="tel:+91 8349747038"
                    target={""}
                    className=" text-gray-600"
                  >
                    +91-8349747038
                  </a>
                </Text>
                <Link
                  href={"mailto:manish.k@stockologysecurities.com"}
                  target="_blank"
                  className=" z-20"
                >
                  <Text
                    ml={"5"}
                    display={"flex"}
                    alignItems="center"
                    gap={"10px"}
                    textColor="gray.900"
                    mb={"10"}
                    textAlign="justify"
                    fontSize={["xs", "sm", "md"]}
                  >
                    <Image src={mail} />
                    support@stockologysecurities.com
                  </Text>
                </Link>
              </Box>
              {/* <Box
                width={["100%", "100%", "40%", "30%"]}
                my="10"
                display={"flex"}
                flexDir="column"
                gap={"20px"}
                alignItems={["flex-start"]}
                backgroundColor={"white"}
                borderRadius="10px"
                justifyContent={""}
                overflow={"hidden"}
                className="hover:scale-105 hover:transition-all duration-150 hover:shadow-xl shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3499.854625664384!2d77.14737831508396!3d28.693994982393484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQxJzM4LjQiTiA3N8KwMDgnNTguNCJF!5e0!3m2!1sen!2sin!4v1688968870530!5m2!1sen!2sin"
                  width="385"
                  height="250"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <Heading fontSize={["md", "xl"]} ml="3" className="heading_1">
                  Stockology: Share Market Institute
                </Heading>
                <Text className="text" ml={"3"} fontSize={["xs", "sm", "md"]}>
                  Unit-615, 6th floor, Aggarwal millennium Tower-1, Netaji
                  Subhash Palace, New Delhi - 110034
                </Text>
                <Text
                  ml={"5"}
                  display={"flex"}
                  alignItems="center"
                  gap={"10px"}
                  textColor="gray.900"
                  fontSize={["xs", "sm", "md"]}
                >
                  <Image src={call} />
                  <a
                    href="tel:+91 8349747038"
                    target={""}
                    className=" text-gray-600"
                  >
                    +91-8349747038
                  </a>
                </Text>
                <Link
                  href={"mailto:manish.k@stockologysecurities.com"}
                  target="_blank"
                  className=" z-20"
                >
                  <Text
                    ml={"5"}
                    display={"flex"}
                    alignItems="center"
                    gap={"10px"}
                    textColor="gray.900"
                    mb={"10"}
                    textAlign="justify"
                    fontSize={["xs", "sm", "md"]}
                  >
                    <Image src={mail} />
                    support@stockologysecurities.com
                  </Text>
                </Link>
              </Box> */}
              {/* <Box
                width={["100%", "100%", "40%", "30%"]}
                my="10"
                display={"flex"}
                flexDir="column"
                gap={"20px"}
                alignItems={["flex-start"]}
                backgroundColor={"white"}
                borderRadius="10px"
                justifyContent={""}
                overflow={"hidden"}
                className="hover:scale-105 hover:transition-all duration-150 hover:shadow-xl shadow-md">
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14676.297954112293!2d79.86210218715823!3d23.1309524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b3850716213d%3A0xff66237de94fd0e9!2sCoWorking%20Place%20at%20TechnoPark%20ITPark%20Jabalpur!5e0!3m2!1sen!2sin!4v1688621991769!5m2!1sen!2sin"
                  width="385"
                  height="250"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <Heading fontSize={["md", "xl"]} ml="3" className="heading_1">
                  Stockology: Share Market Institute
                </Heading>
                <Text className="text" ml={"3"} fontSize={["xs", "sm", "md"]}>
                  3rd FLOOR TECHNO PARK, IT PARK, JABALPUR, Madhya Pradesh
                  482003
                </Text>
                <Text
                  ml={"5"}
                  display={"flex"}
                  alignItems="center"
                  gap={"10px"}
                  textColor="gray.900"
                  fontSize={["xs", "sm", "md"]}
                >
                  <Image src={call} />
                  <a
                    href="tel:+91 8349747038"
                    target={""}
                    className=" text-gray-600"
                  >
                    +91-8349747038
                  </a>
                </Text>
                <Link
                  href={"mailto:manish.k@stockologysecurities.com"}
                  target="_blank"
                  className=" z-20"
                >
                  <Text
                    ml={"5"}
                    display={"flex"}
                    alignItems="center"
                    gap={"10px"}
                    textColor="gray.900"
                    mb={"10"}
                    textAlign="justify"
                    fontSize={["xs", "sm", "md"]}
                  >
                    <Image src={mail} />
                    support@stockologysecurities.com
                  </Text>
                </Link>
              </Box> */}
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Contact_page;
