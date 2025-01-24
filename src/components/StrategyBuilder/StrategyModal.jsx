import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
  Text,
} from "@chakra-ui/react";
import LotQty from "./LotQty";
import SelectOptions from "./SelectOptions";
import { useState } from "react";

const StrategyModal = ({ onClose, isOpen, title }) => {
  const [lotQty, setLotQty] = useState(1);

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      size={"xl"}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={"2xl"}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={6}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Text sx={{ fontWeight: "500" }} fontSize={"xl"} mr={12}>
                1x:
              </Text>
              <SelectOptions
                options={["22500", "23000", "23500", "23600"]}
                bottomText={"Select PE Strike"}
              />
              <Text sx={{ fontWeight: "500" }} fontSize={"xl"} mt={0.4}>
                PE
              </Text>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <Text sx={{ fontWeight: "500" }} fontSize={"xl"} mr={12}>
                1x:
              </Text>
              <SelectOptions
                options={["22500", "23000", "23500", "23600"]}
                bottomText={"Select CE Strike"}
              />
              <Text sx={{ fontWeight: "500" }} fontSize={"xl"} mt={0.4}>
                CE
              </Text>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={4}>
              <Text sx={{ fontWeight: "500" }} fontSize={"xl"} mt={0.4}>
                Expiry:
              </Text>
              <SelectOptions
                options={["29FEB2024", "31MAR2024", "30AD2024", " 28APR2024"]}
                bottomText={"Select Expiry"}
              />
            </Stack>
            <LotQty lotQty={lotQty} setLotQty={setLotQty} maxQty={5} />
          </Stack>
        </ModalBody>
        <ModalFooter display={"flex"} justifyContent={"center"}>
          <Button colorScheme="blue" mt={4} onClick={onClose}>
            Buy/Sell
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StrategyModal;
