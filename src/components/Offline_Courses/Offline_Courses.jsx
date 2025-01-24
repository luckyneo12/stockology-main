import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import "./Offline.css";
import { Link } from "react-router-dom";
import Market_knowlage_Animation from "./animation_1";
import Market_icon from "../../assets/market_icon.svg";
import { Container, Image, Input } from "@nextui-org/react";
import { subscribeNow } from "../../redux/actions/other";
import toast from "react-hot-toast";
import { HiOutlineNewspaper } from "react-icons/hi";
import OurService from "./OurService";
import About_Course from "./About_Course";
import {
  AiFillYoutube,
  AiOutlineBarChart,
  AiOutlineInstagram,
  AiOutlineLineChart,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { BsPieChartFill } from "react-icons/bs";
const Offline_Courses = () => {
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
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://query1.finance.yahoo.com/v8/finance/chart/SBIN.NS")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Stack
        h={["80vh", "90vh"]}
        maxH={"800px"}
        w={"100%"}
        className="  offline_courses_bg  flex flex-col justify-center "
      >
        <Container>
          {" "}
          <Box className=" flex  gap-6 justify-center md:w-1/2 flex-col h-full pl-10">
            <Box>
              <Heading className=" text-white  " fontSize={["xl", "7xl"]}>
                Get Greatest <span className=" bg-red-600 px-3">Courses</span>{" "}
                <br />
                From our Institute
              </Heading>
            </Box>
            <Text className=" text-white text-sm md:text-xl  md:font-semibold">
              With a proven track record of producing successful traders, the
              best stock market institute in Indore stands as a beacon of
              excellence in financial education
            </Text>
            <Link
              to={"/contact"}
              className=" text-white bg-red-600 rounded-2xl px-6  font-bold my-3 py-3 block w-fit"
            >
              Contact Us{" "}
            </Link>
          </Box>
        </Container>
      </Stack>
      <Container xl>
        <Box className=" flex flex-wrap   md:gap-0 gap-5 relative -top-20 w-4/5 m-auto  justify-around">
          <Box
            w={["100%", "23%"]}
            className=" bg-white flex flex-col gap-2 justify-center items-center hover:shadow-2xl box_shadow_2 transition-all duration-150 hover:scale-105 rounded-2xl px-5 py-8"
          >
            {/* <Image width={"50PX"} src={Market_icon} /> */}
            <AiOutlineLineChart size={50} />
            <Box>
              <Heading fontSize={["2xl", "2xl"]}>Day Trading</Heading>

              {/* <Text> </Text> */}
            </Box>
          </Box>
          <Box
            w={["100%", "23%"]}
            className=" bg-white flex flex-col gap-2 justify-center items-center hover:shadow-2xl box_shadow_2 transition-all duration-150 hover:scale-105 rounded-2xl px-5 py-8"
          >
            {/* <Image width={"50PX"} src={Market_icon} /> */}
            <AiOutlineBarChart size={50} />
            <Box>
              <Heading fontSize={["2xl", "2xl"]}>Swing Trading</Heading>

              {/* <Text> </Text> */}
            </Box>
          </Box>
          <Box
            w={["100%", "23%"]}
            className="  bg-white flex flex-col gap-2 justify-center items-center hover:shadow-2xl box_shadow_2 transition-all duration-150 hover:scale-105 rounded-2xl px-5 py-8"
          >
            {/* <Image width={"50PX"} src={Market_icon} /> */}
            <HiOutlineNewspaper size={50} />
            <Box>
              <Heading fontSize={["2xl", "2xl"]}>Investing</Heading>
              {/* <Text> </Text> */}
            </Box>
          </Box>{" "}
          <Box
            w={["100%", "23%"]}
            className=" flex bg-white flex-col gap-2 justify-center items-center hover:shadow-2xl box_shadow_2 transition-all duration-150 hover:scale-105 rounded-2xl px-5 py-8"
          >
            {/* <Image width={"50PX"} src={Market_icon} /> */}
            <BsPieChartFill size={50} />
            <Box>
              <Heading fontSize={["2xl", "2xl"]} className=" text-center">
                Protfolio Creation
              </Heading>
              {/* <Text> </Text> */}
            </Box>
          </Box>
        </Box>
        <About_Course />
        <OurService />
        <Box className=" my-14">
          <Box className=" bg-slate-900 flex md:flex-row flex-col py-8  items-center justify-between px-5 md:px-7 rounded-xl  mx-auto h-40">
            <Heading
              className=" text-white "
              fontSize={["lg", "xl", "2xl", "3xl"]}
              fontWeight={["semibold"]}
            >
              Begin Your Entrepreneurial Journey With Stockology
            </Heading>
            <Link
              to="/partnersregister"
              className=" bg-yellow-400 font-bold text-lg md:text-2xl md:py-3 py-1 px-2 md:px-4 rounded-2xl hover:border-white border-4 hover:bg-transparent hover:text-white transition-all ease-in-out duration-200 border-yellow-400"
            >
              {" "}
              Get Started
            </Link>
          </Box>
          <Heading
            className=" text-gray-800 my-2 md:my-5 "
            fontSize={["xl", "xl", "2xl", "6xl"]}
            fontWeight={["black"]}
          >
            Stay Updated always!
          </Heading>
          <Box className=" bg-blue-300  mt-5 md:mt-10 md:flex-row flex-col gap-5  md:gap-0 flex items-center  justify-between px-7 rounded-xl  mx-auto md:h-56">
            <Box className=" md:h-40 border-r md:py-2 py-5 md:pr-5 ">
              <Heading
                className=" text-white flex  gap-0 py-0"
                fontSize={["lg", "xl", "2xl", "3xl"]}
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
                fontSize={["lg", "xl", "2xl", "3xl"]}
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
                  className="  md:mx-6 "
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
            <Box className=" md:py-0 py-3">
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
        </Box>
      </Container>
    </>
  );
};

export default Offline_Courses;
