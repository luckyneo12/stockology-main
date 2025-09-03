import { Modal } from "@nextui-org/react";
// import { useEffect } from "react";

import { Box, Button, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { webinar } from "../../redux/actions/other";

// import toast from "react-hot-toast";
import { Input, Text, Textarea } from "@nextui-org/react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { useNavigate } from "react-router-dom";
const WebinarPopup = (closeHandler) => {
  const [visible, setVisible] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(webinar(name, email, phone, message));
    navigate("webinar");
  };

  return (
    <>
      <Modal
        closeButton
        animated={false}
        aria-labelledby="modal-title"
        open={visible}
        closeHandler
        width="600px"
      >
        <Modal.Header>
          <Box w="100%">
            <Text
              className=" font-semibold heading_1 text-4xl contact "
              // fontWeight={"40px"}
            >
              Contact <span> Us! </span>
            </Text>
          </Box>
        </Modal.Header>
        <Modal.Body>
          <VStack h="full" justifyContent={"center"} spacing="16">
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
                  initialValue={email}
                  width="100%"
                  onChange={(e) => setEmail(e.target.value)}
                  // placeholder="abc@gmail.com"
                  type={"email"}
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
                    rows={2}
                  />
                </GrammarlyEditorPlugin>
              </Box>

              <Box>
                <Text className="text md:text-base text-sm">
                  *By submitting this form you agree to our terms & conditions &
                  our privacy policy which explains how we may collect, use &
                  disclose your personal information including to third parties.
                </Text>
              </Box>

              <Button
                my={"5"}
                colorScheme="red"
                type="submit"
                w={["56"]}
                borderRadius={"full"}
              >
                Submit
              </Button>
            </form>
          </VStack>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WebinarPopup;
