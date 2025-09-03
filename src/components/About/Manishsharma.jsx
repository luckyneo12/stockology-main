import { Box, Divider, Heading, Image } from "@chakra-ui/react";
import { Modal, Text } from "@nextui-org/react";
import mansih_sharma from "../../assets/mansih_sharma.png";

import React from "react";

const Manishsharma = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <Box
      w={["100%", "100%", "45%", "30%"]}
      className="relative  text-center  cursor-pointer"
    >
      <Image
        src={mansih_sharma}
        objectFit="cover"
        className="border  "
        onClick={handler}
      />
      <Heading fontSize={"4xl"} className="heading_1 ">
        Manish Sharma
      </Heading>
      <Text className=" font-semibold text-lg"> 6+ Year Experience</Text>
      {/* <Text className=" font-semibold text-lg"> Fundamental Analyst</Text> */}
    </Box>
  );
};

export default Manishsharma;
