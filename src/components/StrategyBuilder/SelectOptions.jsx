import { WrapItem, Select, Text } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";

const SelectOptions = ({ options, bottomText, handleSelectChange }) => {
  return (
    <WrapItem display={"flex"} flexDirection={"column"}>
      <Select
        icon={<MdArrowDropDown />}
        placeholder=""
        id="stock"
        size={"lg"}
        fontWeight={"bold"}
        minWidth={"250px"}
        fontSize={"2xl"}
        variant={"flushed"}
        textTransform={"capitalize"}
        onChange={(event) => {
          console.log("event", event.target.value);
          handleSelectChange(event.target.value);
        }}
      >
        {options.map((item, index) => (
          <option key={item} value={item} selected={index === 0}>
            {item}
          </option>
        ))}
      </Select>
      <Text fontSize={"md"} fontWeight={"500"} color="#0000008a">
        {bottomText}
      </Text>
    </WrapItem>
  );
};

export default SelectOptions;
