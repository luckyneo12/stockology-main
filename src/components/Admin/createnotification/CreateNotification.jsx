import {
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createNotification } from "../../../redux/actions/admin";

import Sidebar from "../Sidebar";
import toast from "react-hot-toast";

const CreateNotification = () => {
  const [title, setTitle] = useState("");
  const [subheading, setSubheading] = useState("");

  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.admin);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("subheading", subheading);

    myForm.append("description", description);
    myForm.append("file", image);
    dispatch(createNotification(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      <Container py="16">
        <form onSubmit={submitHandler}>
          <Heading
            textTransform={"uppercase"}
            children="Create Notification"
            my="16"
            textAlign={["center", "left"]}
          />

          <VStack m="auto" spacing={"8"}>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type={"text"}
              focusBorderColor="green.300"
            />{" "}
            <Input
              value={subheading}
              onChange={(e) => setSubheading(e.target.value)}
              placeholder="subheading"
              type={"text"}
              focusBorderColor="green.300"
            />{" "}
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              type={"text"}
              focusBorderColor="green.300"
            />
            <Input
              accept="image/*"
              required
              type={"file"}
              focusBorderColor="green.300"
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize="64" objectFit={"contain"} />
            )}
            <Button
              isLoading={loading}
              w="full"
              colorScheme={"green"}
              type="submit"
            >
              Create
            </Button>
          </VStack>
        </form>
      </Container>

      <Sidebar />
    </Grid>
  );
};

export default CreateNotification;
