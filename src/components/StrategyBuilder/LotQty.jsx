import { MdOutlineAdd } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { Stack, Text, Box } from "@chakra-ui/react";
const LotQty = ({ maxQty, lotQty, setLotQty }) => {
  return (
    <Stack
      direction={"row"}
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text sx={{ fontWeight: "500" }} fontSize={"lg"}>
        Lot Qty:
      </Text>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "0 12px",
          justifyContent: "space-between",
          alignItems: "center",
          width: "140px",
          borderRadius: "8px",
          border: "1px solid rgba(145, 158, 171, 0.32)",
        }}
      >
        {lotQty > 1 ? (
          <FiMinus
            onClick={() => setLotQty((prev) => prev - 1)}
            fontSize="inherit"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <FiMinus fontSize="inherit" style={{ color: "#C4CDD5" }} />
        )}
        <Text sx={{ fontWeight: "500" }} fontSize={"xl"} mt={0.4}>
          {lotQty}
        </Text>
        {maxQty > lotQty ? (
          <MdOutlineAdd
            onClick={() => setLotQty((prev) => prev + 1)}
            fontSize="inherit"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <MdOutlineAdd fontSize="inherit" style={{ color: "#C4CDD5" }} />
        )}
      </Box>
    </Stack>
  );
};

export default LotQty;
