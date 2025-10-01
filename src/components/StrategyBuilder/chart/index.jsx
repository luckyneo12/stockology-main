import { useRef } from "react";
import { Box, Text } from "@chakra-ui/react";
import PayoffChart from "./PayoffChart";

const Chart = () => {
  const chartAreaRef = useRef();
  const selectedStrategyName = "Short Straddle";

  return (
    <Box
      height={{ base: "400px", md: "520px" }}
      minWidth="290px"
      backgroundColor="white"
      borderRadius="5px"
    >
      <Box
        display="flex"
        alignItems="center"
        height="55px"
        borderBottom="1px"
        borderColor="#000"
        px={2}
        justifyContent="space-between"
      >
        <Text fontSize="body1">
          {`${selectedStrategyName} Payoff at Expiry`}
        </Text>
      </Box>
      <Box display="flex" width="100%" height="100%" p={1} ref={chartAreaRef}>
        <PayoffChart parentRef={chartAreaRef} />
      </Box>
    </Box>
  );
};

export default Chart;
