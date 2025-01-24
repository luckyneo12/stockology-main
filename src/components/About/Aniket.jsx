import { Box, Divider } from "@chakra-ui/react";
import { Image, Modal, Text } from "@nextui-org/react";

import React from "react";

const AniketSir = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <Box
      w={["100%", "100%", "45%", "23%"]}
      h={["sm", "xl"]}
      className="relative overflow-hidden card cursor-pointer"
    >
      <Image
        objectFit="cover"
        className="border border-gray-300 rounded-3xl grayscale hover:grayscale-0 transition-all ease-in-out duration-300 h-full "
        onClick={handler}
      />

      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="800px"
      >
        <Modal.Header>
          {" "}
          <Text className=" font-bold text-3xl ">Aniket Sir</Text>
        </Modal.Header>
        <Divider />
        <Modal.Body>
          <Text className=" text-justify text-sm  ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem deleniti quae tenetur. Dolorem aliquid a neque
            nesciunt saepe ullam molestiae asperiores reiciendis, quo culpa
            nostrum quas ea accusamus consequuntur illum.
          </Text>
        </Modal.Body>
      </Modal>
      <Box className=" absolute bottom-[-100px]  transition-all ease-in-out duration-300  border-t  border-white  hover: w-full text-center  partner_name ">
        <Text className=" text-white font-bold mt-2 text-3xl ">Aniket Sir</Text>
        <Text className=" text-white font-semibold my-2 text-xl ">Trader</Text>
      </Box>
    </Box>
  );
};

export default AniketSir;
