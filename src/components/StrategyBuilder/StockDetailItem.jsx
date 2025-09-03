import { WrapItem, Center } from "@chakra-ui/react";

const StockDetailItem = ({ item, value, color }) => {
  return (
    <WrapItem>
      <Center fontWeight={"bold"} h="40px" px={4} bg={color}>
        {item}: {value}
      </Center>
    </WrapItem>
  );
};

export default StockDetailItem;
