import { Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { MdVerified } from "react-icons/md";

import { Link } from "react-router-dom";
const PartnersThanks = () => {
  return (
    <>
      <div className=" text-center h-full my-36  mx-auto   flex  items-center justify-center   w-[90%]">
        <div className=" ">
          <MdVerified size={"100"} className="text-green-600 mx-auto mt-10" />
          <Heading my={"10"}>Thank You</Heading>
          <Text>
            Thanks for registering with Stockology Securities Private Limited.
            Our Team will contact you soon regarding the same.
          </Text>
        </div>
      </div>
    </>
  );
};

export default PartnersThanks;
