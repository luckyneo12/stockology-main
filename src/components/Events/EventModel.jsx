import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Contact from "../contact-form/contact";
import Event_form from "./Event_form";

function TransitionExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className=" md:block hidden">
      <Button onClick={onOpen} colorScheme="red">
        Register Now At <span className="line-through"> ₹15000</span> ₹ 10000/-
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mastering The Stock Market</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Event_form />
          </ModalBody>
          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <a
              href="https://easebuzz.in/quickpay/gcwnylobni"
              className=" md:block hidden"
            >
              <Button variant="ghost">Register Now</Button>
            </a>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default TransitionExample;
