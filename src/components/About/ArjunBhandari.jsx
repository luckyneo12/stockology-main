import { Box, Divider, Heading, Image } from "@chakra-ui/react";
import { Modal, Text } from "@nextui-org/react";

import arjun_bhandari from "../../assets/arjun_bhandari.png";

import React from "react";

const ArjunBhandari = () => {
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
      className="relative  text-center  card cursor-pointer"
    >
      <Image src={arjun_bhandari} objectFit="contain" />
      <Heading fontSize={"4xl"} className="heading_1 ">
        Arjun Bhandari
      </Heading>
      <Text className=" font-semibold text-lg"> 3+ Year Experience</Text>
      <Text className=" font-semibold text-lg">
        {" "}
        Certified Research Analyst
      </Text>
    </Box>
  );
};

export default ArjunBhandari;
