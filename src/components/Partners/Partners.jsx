import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Container, Input } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";
import React, { useEffect } from "react";
import Adaptability from "../../assets/Adaptability.png";
import { Link } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { MdMobileFriendly } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BiRupee } from "react-icons/bi";
import WhyOnlyUs from "./WhyOnlyUs";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
import { subscribeNow } from "../../redux/actions/other";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Videosection from "./Videosection";
import Calculater from "./Calculater";

const Partners = () => {
  const ref = useRef(null);

  const scrollhandler = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const dispatch = useDispatch();

  const [Phone, setPhone] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(subscribeNow(Phone));
  };
  const { error, message: stateMessage } = useSelector((state) => state.other);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, stateMessage]);

  return (
    <div>
      <section className=" bg-blue-100  ">
        <Container lg className="">
          {/* <div className=" absolute w-2/4 h-screen">
          <Spline scene="https://prod.spline.design/df3qiLs0-YtkT5e1/scene.splinecode" />
        </div> */}
          <Stack
            direction={["column", "column", "row", "row"]}
            height={["100vh"]}
            w={"100%"}
            maxH={"800px"}
            justifyContent={["center", "center", "center", "space-between"]}
            alignItems="center"
            spacing={["28"]}
          >
            <VStack
              width={"full"}
              align={["center", "center", "flex-start", "flex-start"]}
              spacing={["6", "6", "6", "8"]}
              w={["100%", "100%"]}
            >
              <Heading
                fontSize={["3xl", "5xl", "3xl", "6xl"]}
                fontWeight={["semibold", "semibold", "bold", "bold"]}
                className="heading_1"
                w={"100%"}
                marginTop={["0px", "40px", "0", "0"]}
                textAlign={["center", "center", "left", "left"]}
              >
                Become a Partner
              </Heading>
              <Text
                fontSize={["sm", "md", "sm", "lg"]}
                lineHeight={["4", "5", "5", "8"]}
                textAlign={["justify", "justify", "justify", "left"]}
                className="text"
                width={["100%"]}
              >
                Start your entrepreneurial journey as "Stockology Securities"
                Partner
              </Text>
              <Box>
                <Link to="/partnersregister" className=" z-10">
                  <Button
                    size={["md", "lg", "md", "lg"]}
                    float={"left"}
                    colorScheme="red"
                    borderRadius={"full"}
                    width={["40", "40", "48", "72"]}
                  >
                    Register Now
                  </Button>
                </Link>
              </Box>
            </VStack>

            <div className=" m-0 w-full h-full ">
              <Spline scene="https://prod.spline.design/8DVvlKstQWwQ-f7v/scene.splinecode" />
            </div>
          </Stack>
        </Container>
        <Container lg>
          <HStack>
            <Heading
              className="heading_1"
              fontSize={["3xl", "3xl", "4xl", "5xl"]}
              textAlign="center"
              w={"100%"}
            >
              Benefits of Partnering with Us
            </Heading>
          </HStack>
          <Box
            display={["flex"]}
            flexDirection={["column", "column", "column", "row"]}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Box w={["100%", "100%", "100%", "50%"]}>
              <Spline scene="https://prod.spline.design/l3tE2ySTfGxTGSk4/scene.splinecode" />
            </Box>
            <Box w={["100%", "100%", "100%", "50%"]} py="10">
              <Card boxShadow={"md"}>
                <CardBody>
                  <Stack divider="" spacing="4">
                    {/* <Box>
                      <Heading
                        size="xs"
                        textTransform="uppercase"
                        px={"5"}
                        boxShadow={"lg"}
                        color="red.500"
                        width="fit-content"
                        py={"5"}
                        my="5"
                        borderRadius="xl"
                      >
                        Finance + Edu-Tech
                      </Heading>
                    </Box> */}
                    <Box mt={"14"}>
                      <List spacing={"5"}>
                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-2 rounded-md">
                          <Text className=" gap-2  font-semibold text-xl flex items-center">
                            {" "}
                            <ListIcon
                              as={BiRupee}
                              color="red.500"
                              className=" text-4xl  "
                            />{" "}
                            Earn for a Lifetime
                          </Text>
                          <p className=" pl-12">
                            Through our courses you can learn the basics and
                            secrets of stock market for your wealth creation for
                            lifetime. This gives you an opportunity to create a
                            separate second source of income without disturbing
                            your current occupation.
                          </p>
                        </ListItem>
                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-2 rounded-md">
                          <Text className=" gap-2  font-semibold text-xl flex items-center">
                            {" "}
                            <ListIcon
                              as={BiTimeFive}
                              color="red.500"
                              className=" text-4xl  "
                            />{" "}
                            Work Anytime Anywhere
                          </Text>
                          <p className=" pl-12">
                            As a SBA (STOCKOLOGY BUSINESS ASSOCIATE), we empower
                            you to start your own full-time or part- time
                            business, with the liberty to work at your own
                            convenience.
                          </p>
                        </ListItem>

                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-2 rounded-md">
                          <Text className=" gap-2  font-semibold text-xl flex items-center">
                            {" "}
                            <ListIcon
                              as={BiSupport}
                              color="red.500"
                              className=" text-4xl  "
                            />{" "}
                            Advanced Tech Support
                          </Text>
                          <p className=" pl-12">
                            Proper Research tools that keep you ahead.
                          </p>
                        </ListItem>
                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-2 rounded-md">
                          <Text className=" gap-2  font-semibold text-xl flex items-center">
                            {" "}
                            <ListIcon
                              as={MdMobileFriendly}
                              color="red.500"
                              className=" text-4xl  "
                            />{" "}
                            User Friendly
                          </Text>
                          <p className=" pl-12  ">
                            Employees must learn on the easy-to-use training
                            platform, upskill, and gain relevant skills.
                            Overcomplicated platforms might deviate them from
                            their learning goal and occupy their benefits. When
                            picking your edtech partner you can get provided
                            with an accessible, intuitive and user-friendly
                            training program with us.
                          </p>
                        </ListItem>
                        <ListItem className=" hover:shadow-lg hover:scale-105 transition-all duration-150 p-2 rounded-md">
                          <Text className=" gap-2  font-semibold text-xl flex items-center">
                            {" "}
                            <Image
                              src={Adaptability}
                              color="red.500"
                              w={"50px"}
                            />{" "}
                            Adaptability
                          </Text>
                          <p className=" pl-12  ">
                            Living in a dynamic world, we must rely on solutions
                            that address the ever-changing landscape of
                            technology, work, training and education. You must
                            pick an adaptable edtech partner that does not
                            re-run learning programs for years and years without
                            making necessary changes. Thus, you must adapt to
                            the new market, trends and needs.
                          </p>
                        </ListItem>
                      </List>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          </Box>
        </Container>
        <Container lg>
          <HStack>
            <Heading
              className="heading_1"
              fontSize={["3xl", "3xl", "4xl", "5xl"]}
              textAlign="center"
              w={"100%"}
            >
              How It Works ?
            </Heading>
          </HStack>
          <HStack
            justifyContent={"space-between"}
            className="whyonlyus container"
            flexDirection={["column", "column", "row", "row"]}
            mx={"auto"}
            my="16"
            gap={["30px", "30px", "2"]}
            flexWrap={"wrap"}
          >
            <Box
              flex={["100%", "50%", "28%", "18%"]}
              display="flex"
              flexDir={"column"}
              className="text-center"
              justifyContent={"space-between"}
              h={"250"}
              w="150"
            >
              {/* <Image src={""} borderRadius="full" objectFit="cover" w={150} /> */}
              {/* <Box className=" rounded-full border-gray-800 border"> */}
              <Spline scene="https://prod.spline.design/dZds3rTgRfFDPQlJ/scene.splinecode" />
              {/* </Box> */}
              <Text
                children="Register as a SBA"
                fontSize={["12"]}
                textAlign="center"
                px={"5"}
                fontWeight="medium"
              />
            </Box>
            <Box
              flex={["100%", "50%", "28%", "18%"]}
              display="flex"
              flexDir={"column"}
              padding="4"
              justifyContent={"space-between"}
              h={"250"}
              w="150"
            >
              {/* <Image src={""} w={150} /> */}
              {/* <Box className=" rounded-full border-gray-800 border flex items-center justify-center"> */}
              <Spline scene="https://prod.spline.design/1qwT2kHVuRIoigWA/scene.splinecode" />
              {/* </Box> */}
              <Text
                children="Quick Approval"
                fontSize={["12"]}
                textAlign="center"
                px={"5"}
                fontWeight="medium"
              />
            </Box>
            <Box
              flex={["100%", "50%", "28%", "18%"]}
              display="flex"
              flexDir={"column"}
              padding="4"
              justifyContent={"space-between"}
              h={"250"}
              w="150"
            >
              {/* <Image src={""} w={150} /> */}
              <Spline scene="https://prod.spline.design/PaQHrLv1mMik5Coa/scene.splinecode" />
              <Text
                px={"5"}
                fontWeight="medium"
                children="Get Clients"
                fontSize={["12"]}
                textAlign="center"
              />
            </Box>
            <Box
              flex={["100%", "50%", "28%", "18%"]}
              display="flex"
              flexDir={"column"}
              padding="4"
              justifyContent={"space-between"}
              h={"250"}
              w="150"
            >
              {/* <Image src={""} w={150} /> */}
              <Spline scene="https://prod.spline.design/P-Gehk987XEDGr7m/scene.splinecode" />
              <Text
                px={"5"}
                fontWeight="medium"
                children="Track Status"
                fontSize={["12"]}
                textAlign="center"
              />
            </Box>
            <Box
              flex={["100%", "50%", "28%", "18%"]}
              display="flex"
              flexDir={"column"}
              padding="4"
              justifyContent={"space-between"}
              h={"250"}
              w="150"
            >
              {/* <Image src={""} w={150} /> */}
              <Spline scene="https://prod.spline.design/AIVp9JkmuLuCKZOQ/scene.splinecode" />
              <Text
                px={"5"}
                fontWeight="medium"
                children="Receive Earnings"
                fontSize={["12"]}
                textAlign="center"
              />
            </Box>
          </HStack>
        </Container>
        <Calculater />
        <WhyOnlyUs />
        <Container lg>
          <Box className=" bg-slate-900 flex items-center justify-between px-7 rounded-xl  mx-auto h-40">
            <Heading
              className=" text-white "
              fontSize={["xl", "xl", "2xl", "3xl"]}
              fontWeight={["semibold"]}
            >
              Begin Your Entrepreneurial Journey With Stockology
            </Heading>
            <Link
              to="/partnersregister"
              className=" bg-yellow-400 font-bold text-2xl py-3 px-4 rounded-2xl hover:border-white border-4 hover:bg-transparent hover:text-white transition-all ease-in-out duration-200 border-yellow-400"
            >
              {" "}
              Get Started
            </Link>
          </Box>
          <Heading
            className=" text-gray-800 my-5 "
            fontSize={["xl", "xl", "2xl", "6xl"]}
            fontWeight={["black"]}
          >
            Stay Updated always!
          </Heading>
          <Box className=" bg-blue-300 mt-10 flex items-center  justify-between px-7 rounded-xl  mx-auto h-56">
            <Box className=" h-40 border-r  pr-5 ">
              <Heading
                className=" text-white flex  gap-1 py-0"
                fontSize={["xl", "xl", "2xl", "3xl"]}
                fontWeight={["semibold"]}
              >
                Follow us!
                <a
                  href="https://instagram.com/ig_stockology?igshid=YmMyMTA2M2Y="
                  target={"_blank"}
                  className="text-white text-2xl ml-5   hover:shadow-xl hover:bg-white hover:text-pink-500 hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <AiOutlineInstagram />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100090277334395&mibextid=ZbWKwL"
                  target={"_blank"}
                  className="text-white text-2xl  hover:text-blue-600  hover:bg-white hover:shadow-xl hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://t.me/STOC_KOLOGY"
                  target={"_blank"}
                  className="text-white text-2xl  hover:text-blue-600 hover:bg-white   hover:shadow-xl hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <FaTelegramPlane />
                </a>
                <a
                  href="https://www.youtube.com/@stockologyy"
                  className="text-white text-2xl hover:text-red-600   hover:shadow-xl hover:bg-white  hover:scale-110 transition-all duration-150 p-2 rounded-md"
                  target={"_blank"}
                >
                  <AiFillYoutube />
                </a>
                <a
                  href="https://linkedin.com/in/stockologyyy"
                  target={"_blank"}
                  className="text-white text-2xl hover:bg-white  hover:shadow-xl  hover:text-blue-600 hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://twitter.com/stockologyyy?t=r87T8cwTePPMHqsQGqU_QA&s=09"
                  target={"_blank"}
                  className="text-white text-2xl  hover:bg-white hover:text-blue-600  hover:shadow-xl hover:scale-110 transition-all duration-150 p-2 rounded-md"
                >
                  <AiOutlineTwitter />
                </a>
              </Heading>
              <Heading
                className=" text-white "
                fontSize={["xl", "xl", "2xl", "3xl"]}
                fontWeight={["semibold"]}
              >
                Subscribe with us to get importand news on the go...
              </Heading>

              <form onSubmit={submitHandler}>
                <Input
                  required
                  id="phone"
                  initialValue={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white my-3 h-14 w-80"
                  placeholder="Enter Your Number"
                  type={"number"}
                />
                <Button
                  className=" mx-6 "
                  colorScheme={"green"}
                  size="lg"
                  type="submit"
                  rounded={"full"}
                  onSubmit={submitHandler}
                >
                  Subscribe Now
                </Button>
              </form>
            </Box>
            <Box>
              <Heading
                className=" text-white flex  gap-1 py-5"
                fontSize={["xl", "xl", "2xl", "3xl"]}
                fontWeight={["semibold"]}
              >
                Start a business today with Stockology
              </Heading>
              <Link to={"/partnersregister"}>
                <Button
                  className=""
                  colorScheme={"green"}
                  size="lg"
                  rounded={"full"}
                >
                  Sign Up Now
                </Button>
              </Link>
            </Box>
          </Box>
          {/* <Box>
            <Videosection />
          </Box> */}
        </Container>
      </section>
    </div>
  );
};

export default Partners;
