import { Box, Divider, Heading, Image } from "@chakra-ui/react";
import { Modal, Text } from "@nextui-org/react";

import Harsh_Rai_image from "../../assets/Harsh_Rai.png";

import React from "react";

const Harsh_Rai = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <Box
      w={["100%", "100%", "45%", "30%"]}
      h={"lg"}
      className="relative text-center   card cursor-pointer"
    >
      <Image src={Harsh_Rai_image} objectFit="contain" />
      <Heading fontSize={"4xl"} className="heading_1 ">
        Harsh Rai
      </Heading>
      <Text className=" font-semibold text-lg"> 7+ Year Experience</Text>
      <Text className=" font-semibold text-lg"> Certified Trainer</Text>
    </Box>
  );
};

export default Harsh_Rai;
