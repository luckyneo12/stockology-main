import { Box, Divider, Heading, Image } from "@chakra-ui/react";
import { Modal, Text } from "@nextui-org/react";
import manish_kumar from "../../assets/manish_kumar.png";

import React from "react";

const Manish_Kumar = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <Box
        w={["100%", "100%", "45%", "30%"]}
        // h={["sm", "xl"]}
        className="relative  text-center card cursor-pointer"
      >
        <Image src={manish_kumar} objectFit="cover" className="    " />
        <Heading fontSize={"4xl"} className="heading_1 ">
          Manish Kumar
        </Heading>
        <Text className=" font-semibold text-lg"> 5+ Year Experience</Text>
        {/* <Text className=" font-semibold text-lg"> Optional Specialist</Text> */}
      </Box>
    </>
  );
};

export default Manish_Kumar;
