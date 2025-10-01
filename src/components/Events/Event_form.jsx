/** @format */

import { Box, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../redux/actions/other";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Input, Text, Textarea } from "@nextui-org/react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const Event_form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState();

  const dispatch = useDispatch();

  const { error, message: stateMessage } = useSelector((state) => state.other);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message, phone));
    // window.location.href = "https://easebuzz.in/quickpay/gcwnylobni";
  };
  //   useEffect(() => {
  //     const redirectTimer = setTimeout(() => {
  //       window.location.href = "https://easebuzz.in/quickpay/gcwnylobni";
  //     }, 3000); // 3000 milliseconds (3 seconds)

  //     // Clear the timer when the component unmounts (cleanup)
  //     return () => clearTimeout(redirectTimer);
  //   }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: "clearMessage" });
      window.location.href = "https://easebuzz.in/quickpay/gcwnylobni";
    }
  }, [dispatch, error, stateMessage]);

  return (
    <div>
      <VStack
        h="full"
        justifyContent={"center"}
        alignItems={"start"}
        // className="     hover:scale-105 transition-all duration-150 hover:shadow-2xl"
      >
        {/* <Heading children="Contact Us" /> */}

        <form onSubmit={submitHandler} className="" style={{ width: "100%" }}>
          <Box my={"2"}>
            <Input
              required
              id="name"
              initialValue={name}
              onChange={(e) => setName(e.target.value)}
              width="100%"
              underlined
              placeholder="Name"
              className=" text-lg font-extrabold "
            />
          </Box>
          <Box my={"2"}>
            <Input
              required
              id="phone"
              initialValue={phone}
              onChange={(e) => setPhone(e.target.value)}
              width="100%"
              underlined
              // label="Phone"
              type="number"
              placeholder="Phone"
              className=" text-lg font-extrabold "
            />
          </Box>

          <Box my={"2"}>
            <Input
              required
              className=" text-lg font-extrabold "
              id="email"
              initialValue={email}
              width="100%"
              onChange={(e) => setEmail(e.target.value)}
              // placeholder="abc@gmail.com"
              type={"email"}
              clearable
              underlined
              // label="Email"
              placeholder="Email"
            />
          </Box>

          <Box my={"2"}>
            <GrammarlyEditorPlugin clientId="client_Ji4Ei5uQ7G8ASJ3NgWs4ub">
              <Textarea
                id="message"
                initialValue={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                // label="Message"
                width="100%"
                bordered
                className=" text-lg font-extrabold "
                rows={2}
              />
            </GrammarlyEditorPlugin>
          </Box>

          <Box>
            <Text className="text" fontSize={"xs"}>
              *By submitting this form you agree to our terms & conditions & our
              privacy policy which explains how we may collect, use & disclose
              your personal information including to third parties.
            </Text>
          </Box>
          <Button
            my={"3"}
            colorScheme="red"
            type="submit"
            w={["56"]}
            borderRadius={"full"}
            onSubmit={submitHandler}
          >
            Submit
          </Button>
        </form>
      </VStack>
    </div>
  );
};

export default Event_form;
