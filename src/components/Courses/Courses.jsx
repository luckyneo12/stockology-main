/** @format */

import {
  Image,
  Box,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Card,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/course";
import toast from "react-hot-toast";
// import { addToPlaylist } from "../../redux/actions/profile";
import contact from "../../assets/contact_form_main.png";
// import { loadUser } from "../../redux/actions/user";
import Contact from "../webinar/webinar";
// import { TextChild } from "@nextui-org/react/types/text/child";

import { Container } from "@nextui-org/react";
import { videos } from "./freevideodata";
import { Link } from "react-router-dom";
import paid from "../../assets/paid.png";
import free from "../../assets/Free.png";

import Spline from "@splinetool/react-spline";
import offline_class from "../../assets/offline_class.png";

// const Course = ({
//   views,
//   title,
//   imageSrc,
//   id,
//   addToPlaylistHandler,
//   creator,
//   description,
//   lectureCount,
//   loading,
// }) => {
//   return (
//     <VStack className="course" alignItems={["center", "flex-start"]}>
//       <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
//       <Heading
//         textAlign={["center", "left"]}
//         maxW="200px"
//         size={"sm"}
//         fontFamily={"sans-serif"}
//         noOfLines={3}
//         children={title}
//       />
//       <Text noOfLines={2} children={description} />

//       <HStack>
//         <Text
//           fontWeight={"bold"}
//           textTransform="uppercase"
//           children={"Creator"}
//         />

//         <Text
//           fontFamily={"body"}
//           textTransform="uppercase"
//           children={creator}
//         />
//       </HStack>

//       <Heading
//         textAlign={"center"}
//         size="xs"
//         children={`Lectures - ${lectureCount}`}
//         textTransform="uppercase"
//       />

//       <Heading
//         size="xs"
//         children={`Views - ${views}`}
//         textTransform="uppercase"
//       />

//       <Stack direction={["column", "row"]} alignItems="center">
//         <Link to={`/course/${id}`}>
//           <Button colorScheme={"yellow"}>Watch Now</Button>
//         </Link>
//         <Button
//           isLoading={loading}
//           variant={"ghost"}
//           colorScheme={"yellow"}
//           onClick={() => addToPlaylistHandler(id)}>
//           Add to playlist
//         </Button>
//       </Stack>
//     </VStack>
//   );
// };

const Courses = () => {
  // const [keyword, ] = useState("");
  // const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  // const [keyword, setKeyword] = useState("");

  // const addToPlaylistHandler = async (couseId) => {
  //   await dispatch(addToPlaylist(couseId));
  //   dispatch(loadUser());
  // // };

  // const categories = [
  //   "Web development",
  //   "Artificial Intellegence",
  //   "Data Structure & Algorithm",
  //   "App Development",
  //   "Data Science",
  //   "Game Development",
  // ];

  const { error, message } = useSelector((state) => state.course);
  // const [visible, setVisible] = React.useState(false);
  // const handler = () => setVisible(true);
  // const closeHandler = () => {
  //   setVisible(false);
  //   console.log("closed");
  // };
  useEffect(() => {
    dispatch(getAllCourses());

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  const [noOfElements, setnoOfElements] = useState(8);
  const splice = videos.slice(0, noOfElements);
  const ShowMore = () => {
    setnoOfElements(noOfElements + 4);
  };

  return (
    <>
      {" "}
      <Box className=" bg-blue-100">
        <div className="">
          <Box className=" absolute md:absolute right-2  md:w-[250px] md:block  hidden  md:h-[400px] top-14  ">
            <Spline scene="https://prod.spline.design/f2WUBXfnghr6YZi8/scene.splinecode" />
          </Box>
          {/* <Box className=" absolute md:absolute left-2  md:w-[250px] md:block  hidden  md:h-[400px] top-14  ">
          <Spline scene="https://prod.spline.design/jhOxK0OAN0IG461g/scene.splinecode" />
        </Box> */}
          <section className=" z-20   bg-blue-100   md:pt-20 pt-10">
            <Container lg className="">
              <Stack
                direction={["column", "column", "row", "row"]}
                // height={["100vh"]}

                w={"100%"}
                justifyContent={"center"}
                // alignItems="center"
                spacing={["48"]}
                py="10"
              >
                <VStack
                  width={"full"}
                  align={["center", "center", "flex-start", "flex-start"]}
                  spacing={["4", "6", "6", "8"]}
                  w={["100%", "100%"]}
                >
                  <Heading
                    fontSize={["3xl", "5xl", "3xl", "6xl"]}
                    fontWeight={["semibold", "semibold", "bold", "bold"]}
                    className="heading_1"
                    w={"100%"}
                    marginTop={["0px", "40px", "0", "0"]}
                    textAlign={"center"}
                  >
                    <span>Our </span>Courses
                  </Heading>
                  <Text
                    fontSize={["sm", "md", "sm", "lg"]}
                    lineHeight={["4", "0", "4", "0"]}
                    textAlign={"center"}
                    className="text"
                    width={["100%"]}
                  >
                    Preparing you for the upcoming investor phase
                  </Text>
                  <Text
                    fontSize={["xs", "xs", "xs", "sm"]}
                    w={"100%"}
                    lineHeight={["5", "4", "5", "6"]}
                    textAlign={"center"}
                    className="text"
                  >
                    Learn with our expert mentor and know the basics and secrets
                    of stock market for your wealth creation.
                    <br /> Join us today and start your journey to become a
                    successful investor.
                  </Text>
                </VStack>
              </Stack>
            </Container>
          </section>
        </div>
        <Box className="container bg-blue-100">
          <Box
            justifyContent="space-between"
            alignItems={"center"}
            display={"flex"}
          >
            <Box
              display={"flex"}
              alignItems="flex-end"
              gap={"10"}
              className="heading_1"
              mt="20px"
              fontSize={"20px"}
              fontWeight="semibold"
            >
              {/* <Tabs variant="soft-rounded" colorScheme="green">
              <TabList className=" flex  justify-between pl-12 ">
                <Tab>Free Courses</Tab>
                <Tab>
                  <Link href="https://hgyiu.courses.store/" target={"_blank"}>Paid Courses</Link>
                </Tab>
                <Link
                  href="https://hgyiu.courses.store/"
                  className=" hover:decoration-transparent  text-gray-500 mx-20 "
                  target={"_blank"}
                >
                  Paid Courses
                </Link>
              </TabList>
              <TabPanels>
                <TabPanel></TabPanel>
                <TabPanel>
                  <PaidCourses />
                </TabPanel>
              </TabPanels>
            </Tabs> */}

              <Container lg className="container">
                <div className=" justify-between w-fit gap-10 flex ">
                  <Card
                    px={"20"}
                    className=" cursor-pointer py-3  text-center hover:scale-105 hover:shadow-xl transition-all duration-150 ease-in-out  shadow-gray-400 "
                  >
                    <Image src={free} w="60px " className=" block mx-auto" />
                    Free
                  </Card>
                  <Link
                    to="https://hgyiu.courses.store/"
                    target={"_blank"}
                    textDecoration={"none"}
                    className=" no-underline hover:no-underline hover:scale-105 hover:shadow-xl transition-all duration-150 ease-in-out  shadow-gray-400 "
                  >
                    <Card px={"10"} className=" cursor-pointer py-3 flex  ">
                      <Image src={paid} w="60px" className=" block mx-auto" />
                      Paid Courses
                    </Card>
                  </Link>
                  <Link
                    to="/contact"
                    // target={"_blank"}
                    textDecoration={"none"}
                    className=" no-underline hover:no-underline hover:scale-105 hover:shadow-xl transition-all duration-150 ease-in-out  shadow-gray-400 "
                  >
                    <Card
                      px={"20"}
                      className=" cursor-pointer py-3  text-center hover:scale-105 hover:shadow-xl transition-all duration-150 ease-in-out  shadow-gray-400 "
                    >
                      <Image
                        src={offline_class}
                        w="60px "
                        className=" block mx-auto"
                      />
                      Offline Classes
                    </Card>
                  </Link>
                </div>
                <div className=" flex justify-between flex-wrap gap-5 my-8">
                  {splice.map((item) => {
                    const { id, url } = item;
                    return (
                      <div className="">
                        <iframe
                          width="300px"
                          vnum={id}
                          height="180px"
                          className=" m-0 rounded-xl shadow-sm hover:scale-110 transition-all duration-150 hover:shadow-lg shadow-gray-500"
                          src={url}
                          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    );
                  })}
                </div>
                <div className=" flex justify-center">
                  {" "}
                  <Button className=" bg-black  =" onClick={ShowMore}>
                    Show More
                  </Button>
                </div>
              </Container>
            </Box>
            {/* <Input
            border={"none"}
            borderBottom="1px solid"
            borderRadius={"none"}
            _focusVisible={"none"}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search "
            type="text"
            width={["200px", "300px"]}
            // icons={<FaSearch />}
          ></Input> */}
          </Box>
        </Box>
        <Box className="slidercontainer">
          <Box
            className="container sliderBefore"
            display={["flex"]}
            py="10"
            justifyContent={"space-between"}
            mt={"5"}
            flexDirection={["column", "column", "column", "row"]}
          >
            <Box w={["100%", "100%", "100%", "50%"]}>
              <Box className="contact-img" mt={"28"}>
                <Image src={contact} />
              </Box>
            </Box>

            <Box
              w={["100%", "100%", "100%", "50%"]}
              className="bg-white px-5 py-6 rounded-2xl"
            >
              <Text
                fontSize={"3xl"}
                w="fit-content"
                className="heading_1 contact "
                fontWeight={"22px"}
              >
                Get a<span> Free Webinar </span>for your overall growth.
              </Text>
              <Contact />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
        <Heading children="All Courses" m={"8"} />

        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search a course..."
          type={"text"}
          focusBorderColor="yellow.500"
        />

        <HStack
          overflowX={"auto"}
          paddingY="8"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {categories.map((item, index) => (
            <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
              <Text children={item} />
            </Button>
          ))}
        </HStack>

        <Stack
          direction={["column", "row"]}
          flexWrap="wrap"
          justifyContent={["flex-start", "space-evenly"]}
          alignItems={["center", "flex-start"]}
        >
          {courses.length > 0 ? (
            courses.map((item) => (
              <Course
                key={item._id}
                title={item.title}
                description={item.description}
                views={item.views}
                imageSrc={item.poster.url}
                id={item._id}
                creator={item.createdBy}
                lectureCount={item.numOfVideos}
                addToPlaylistHandler={addToPlaylistHandler}
                loading={loading}
              />
            ))
          ) : (
            <Heading mt="4" children="Courses Not Found" />
          )}
        </Stack>
      </Container> */}
    </>
  );
};

export default Courses;
