/** @format */

import { Box, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { webinar } from "../../redux/actions/other";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Input, Text, Textarea } from "@nextui-org/react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const Webinar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState();

  const dispatch = useDispatch();

  const { error, message: stateMessage } = useSelector((state) => state.other);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(webinar(name, email, phone, message));
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
    <div>
      <VStack
        maxW={"550px"}
        w={"full"}
        h="full"
        justifyContent={"center"}
        spacing=""
      >
        {/* <Heading children="Contact Us" /> */}

        <form onSubmit={submitHandler} style={{ width: "100%" }}>
          <Box my={"4"}>
            <Input
              required
              id="name"
              initialValue={name}
              onChange={(e) => setName(e.target.value)}
              width="100%"
              underlined
              placeholder="Name"
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
              placeholder="phone"
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
              placeholder="Email"
            />
          </Box>

          <Box my={"4"}>
            <GrammarlyEditorPlugin clientId="client_Ji4Ei5uQ7G8ASJ3NgWs4ub">
              <Textarea
                id="message"
                initialValue={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                width="100%"
                bordered
                rows={5}
              />
            </GrammarlyEditorPlugin>
          </Box>
          {/* <Box my={'4'}>
<RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='=green' value={"1"}>
    Beginner
    </Radio>
    <Radio colorScheme='green' value={"2"}>
    Experience
    </Radio>
  </Stack>
</RadioGroup>
</Box> */}
          <Box>
            <Text className="text md:text-base text-sm">
              *By submitting this form you agree to our terms & conditions & our
              privacy policy which explains how we may collect, use & disclose
              your personal information including to third parties.
            </Text>
          </Box>
          <Button
            my={"5"}
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

export default Webinar;
