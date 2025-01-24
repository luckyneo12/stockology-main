import React from "react";
import Market_knowlege from "../../assets/market_knowlage.json";
import Lottie from "react-lottie";
import { Box } from "@chakra-ui/react";
const Market_knowlage_Animation = () => {
  const Market_animation = {
    loop: true,
    autoplay: true,
    animationData: Market_knowlege,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Box w={["100%"]} h={["40%"]} m={"auto"}>
        <Lottie
          width={"100%"}
          height={"100%"}
          options={Market_animation}

          // width={350}
        />
      </Box>
    </>
  );
};

export default Market_knowlage_Animation;
