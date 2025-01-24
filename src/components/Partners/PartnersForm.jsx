import { Container, Divider, Heading, HStack } from "@chakra-ui/react";

import { Box, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { Input, Text, Textarea } from "@nextui-org/react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { partner } from "../../redux/actions/other";
import { useNavigate } from "react-router-dom";

const PartnersForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [referralId, setReferreld] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, message: stateMessage } = useSelector((state) => state.other);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        partner(firstName, lastname, phone, email, referralId, password)
      );
      navigate("/thank-you");
    } catch (error) {
      navigate("/erro");
    }
  };

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
    <>
      <Container lg>
        <HStack>
          <Heading
            className="heading_1 "
            fontSize={["3xl", "3xl", "4xl", "5xl"]}
            textAlign="center"
            w={"100%"}
          >
            Registration Details
          </Heading>
        </HStack>
        <VStack h="full" justifyContent={"center"} spacing="16">
          {/* <Heading children="Contact Us" /> */}

          <form onSubmit={submitHandler} style={{ width: "100%" }}>
            <Box my={"4"}>
              <Input
                required
                id="fist name"
                initialValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                width="100%"
                underlined
                label="First Name"
                placeholder="Enter Your FirstName"
              />
            </Box>
            <Box my={"4"}>
              <Input
                required
                id="Last Name"
                initialValue={lastname}
                onChange={(e) => setLastName(e.target.value)}
                width="100%"
                underlined
                label="Last Name"
                placeholder="Enter Your LastName"
              />
            </Box>
            <Box my={"4"}>
              <Input
                required
                id="phone"
                initialValue={phone}
                onChange={(e) => setPhone(e.target.value)}
                width="100%"
                underlined
                label="Phone"
                placeholder="Enter Your phone"
                type="number"
              />
            </Box>

            <Box my={"4"}>
              <Input
                required
                id="email"
                initialValue={email}
                width="100%"
                onChange={(e) => setEmail(e.target.value)}
                // placeholder="abc@gmail.com"
                type={"email"}
                clearable
                underlined
                label="Email"
                placeholder="Enter Your Email"
              />
            </Box>
            <Box my={"4"}>
              <Input
                id="referralId"
                initialValue={referralId}
                width="100%"
                onChange={(e) => setReferreld(e.target.value)}
                // placeholder="abc@gmail.com"

                clearable
                underlined
                label="Referral ID"
                placeholder="CXXXXXXX"
              />
            </Box>
            <Box mb={"10"}>
              <Input.Password
                required
                id="password"
                initialValue={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                underlined
                label="Create Your Password"
                Placeholder="Create Your Password"
                width="100%"
                visibleIcon={<AiFillEye fill="currentColor" />}
                hiddenIcon={<AiFillEyeInvisible fill="currentColor" />}
              />
            </Box>

            {/* <Box>
              <Text className="text md:text-base text-sm">
                *By submitting this form you agree to our terms & conditions &
                our privacy policy which explains how we may collect, use &
                disclose your personal information including to third parties.
              </Text>
            </Box> */}
            <Button
              my={"5"}
              colorScheme="red"
              type="submit"
              w={["56"]}
              borderRadius={"full"}
              onSubmit={submitHandler}
            >
              Register
            </Button>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default PartnersForm;
