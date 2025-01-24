import { Box, Divider, Heading, Image } from "@chakra-ui/react";


import React from "react";

const Blank = () => {
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
    ></Box>
  );
};

export default Blank;
