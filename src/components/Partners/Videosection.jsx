import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Videosection = () => {
  return (
    <div>
      <Box className=" flex">
        <Box className=" w-[50%] px-4">
          <Heading className=" ">Very nice service</Heading>
          <Text className=" my-3">
            Stockology Securities PVT. LTD Provider good support and has good
            tools to do online business in MF/Equities, etc. from every corner
            of the country. They support their distributor to do business of
            financial products
          </Text>
          <Heading className=" my-4 text-xl" fontSize={"2xl"}>
            Kaushik Dutta
          </Heading>
          <Text className=" uppercase">Maharastra</Text>
        </Box>
        <Box className=" w-[50%]">
          <video src=""></video>
        </Box>
      </Box>
    </div>
  );
};

export default Videosection;
