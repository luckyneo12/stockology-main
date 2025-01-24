import {
  Box,
  Button,
  FormLabel,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Checkbox, Container, Image, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import loginimage from "../../assets/login.svg";

import { Link } from "react-router-dom";
import { login } from "../../redux/actions/user";
import Spline from "@splinetool/react-spline";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <div className="">
        <Container>
          <Box
            my={"10"}
            alignItems="center"
            display={"flex"}
            h="100%"
            gap={"10"}
            flexDir={[
              "column-reverse",
              "column-reverse",
              "column-reverse",
              "row",
            ]}
            justifyContent="space-between"
          >
            {" "}
            <Box w={["100%", "100%", "100%", "50%"]} h={["100vh"]}>
              {/* <Spline scene="https://prod.spline.design/jhOxK0OAN0IG461g/scene.splinecode" /> */}
              <Image src={loginimage} />
            </Box>
            <Box
              w={["100%", "100%", "100%", "50%"]}
              h={"full"}
              justifyContent="center"
              spacing={"16"}
            >
              <Box
                backgroundColor={"white"}
                py="30"
                borderRadius={"3xl"}
                boxShadow="2xl"
                px={"12"}
              >
                <Heading
                  className="heading_1"
                  fontSize={"5xl"}
                  fontWeight="semibold"
                  letterSpacing={"2px"}
                  children="Welcome back"
                  mt={"5"}
                />
                <Text className="text" fontWeight={"semibold"}>
                  Welcome back! Please enter your details.
                </Text>
                <form onSubmit={submitHandler} style={{ width: "100%" }}>
                  <Box my={"14"}>
                    <Input
                      required
                      id="email"
                      initialValue={email}
                      onChange={(e) => setEmail(e.target.value)}
                      clearable
                      width="90%"
                      underlined
                      labelPlaceholder="Enter Your Email"
                    />
                  </Box>
                  <Box my={"10"}>
                    <Input.Password
                      required
                      id="password"
                      initialValue={password}
                      onChange={(e) => setPassword(e.target.value)}
                      underlined
                      width="90%"
                      labelPlaceholder="Password"
                      visibleIcon={<AiFillEye fill="currentColor" />}
                      hiddenIcon={<AiFillEyeInvisible fill="currentColor" />}
                    />
                  </Box>
                  <Box>
                    <Checkbox defaultSelected color="success">
                      Keep me logged in
                    </Checkbox>
                  </Box>
                  <Button
                    my={"10"}
                    colorScheme="red"
                    borderRadius={"full"}
                    w="64"
                    display={"block"}
                    type="submit"
                    mx={"auto"}
                    onClick={submitHandler}
                  >
                    Login
                  </Button>
                  <Box display={"flex"} gap="10px" justifyContent={"center"}>
                    <Text color={"gray.400"} letterSpacing="2px">
                      {" "}
                      Don't have an account?
                    </Text>
                    <Link to="/register">
                      <Button color={"blue.700"} variant="link">
                        Sign Up
                      </Button>
                    </Link>
                  </Box>
                  <Box textAlign={"center"}>
                    <Link to="/forgetpassword">
                      <Button color={"blue.700"} fontSize={"sm"} variant="link">
                        Forget Password
                      </Button>
                    </Link>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Container>
      </div>
      {/* <VStack h={"full"} justifyContent="center" spacing={"16"}>
        <Heading children={"Welcome to CourseBundler"} />

        <form onSubmit={submitHandler} style={{ width: "100%" }}>
          <Box my={"4"}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={"email"}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type={"password"}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box>
            <Link to="/forgetpassword">
              <Button fontSize={"sm"} variant="link">
                Forget Password?
              </Button>
            </Link>
          </Box>

          <Button my="4" colorScheme={"yellow"} type="submit">
            Login
          </Button>

          <Box my="4">
            New User?{" "}
            <Link to="/register">
              <Button colorScheme={"yellow"} variant="link">
                Sign Up
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack> */}
    </>
  );
};

export default Login;
