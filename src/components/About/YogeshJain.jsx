import { Box, Divider, Heading, Image } from "@chakra-ui/react";
import { Modal, Text } from "@nextui-org/react";

import YogeshJain_sir from "../../assets/YogeshJain.png";

import React from "react";

const YogeshJain = () => {
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
      className="relative text-center  flex justify-center items-center   flex-col card cursor-pointer"
    >
      <Image src={YogeshJain_sir} className=" w-full" objectFit="contain" />
      <Heading fontSize={"4xl"} className="heading_1 ">
        Yogesh Jain
      </Heading>
      <Text className=" font-semibold text-lg"> 15+ Year Experience</Text>
      {/* <Text className=" font-semibold text-lg"> Certified Trainer</Text> */}
    </Box>
  );
};

export default YogeshJain;
