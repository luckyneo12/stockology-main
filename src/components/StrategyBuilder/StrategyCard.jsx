import { WrapItem, Center, Text, useDisclosure } from "@chakra-ui/react";
import StrategyModal from "./StrategyModal";

const StrategyCard = ({ title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <StrategyModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        title={title}
      />

      <WrapItem h={"full"}>
        <Center
          cursor={"pointer"}
          onClick={onOpen}
          fontWeight={"500"}
          color
          p={2}
          bg={"#fff"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          borderRadius={"5px"}
          border={"1px solid gray"}
          ml={2}
          maxWidth={32}
          textAlign="center"
          gap={1}
          minHeight={40}
        >
          <img
            alt="strategies"
            height={100}
            width={100}
            src="https://www.projectfinance.com/wp-content/uploads/elementor/thumbs/Short-Put-2-pnbzn09wv8aftr16nkj3bdzpnc0jh8ib9wepc1mlqg.jpg"
          />
          <Text fontSize={"md"} fontWeight={"500"} color="#0000008a">
            {title}
          </Text>
        </Center>
      </WrapItem>
    </>
  );
};

export default StrategyCard;
