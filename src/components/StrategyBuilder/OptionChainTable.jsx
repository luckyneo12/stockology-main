import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SelectOptions from "./SelectOptions";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const headerContent = [
  "Call Volume",
  "Call Net OI",
  "Call change in OI",
  "Call Price change",
  "Call LTP",
  "strike",
  "Put LTP",
  "Put Price Change",
  "Put Change in OI",
  "Put Net OI",
  "Put Volume",
];

const HeaderCell = ({ content }) => (
  <Th border="1px" borderColor="gray.300">
    {content}
  </Th>
);

const StyledTd = ({ value }) => {
  const isNegative = value < 0;
  const backgroundColor =
    value?.toFixed(2) === "0.00"
      ? "initial"
      : isNegative
      ? "#f2dede"
      : "#dff0d8";
  const textColor =
    value?.toFixed(2) === "0.00"
      ? "initial"
      : isNegative
      ? "red.600"
      : "green.600";
  const arrowIcon = isNegative ? (
    <AiOutlineArrowDown color="red.500" />
  ) : (
    <AiOutlineArrowUp color="green.500" />
  );

  return (
    <Td
      bg={value !== undefined ? backgroundColor : "initial"}
      color={value !== undefined ? textColor : "initial"}
      isNumeric
      border="1px"
      borderColor="gray.300"
    >
      {value !== undefined ? (
        <div className="flex justify-start gap-2">
          {value?.toFixed(2)}
          {value?.toFixed(2) !== "0.00" && arrowIcon}
        </div>
      ) : (
        <div className="flex justify-start gap-2">{`-`}</div>
      )}
    </Td>
  );
};

const UnstyledTd = ({ value }) => {
  return (
    <Td isNumeric border="1px" borderColor="gray.300">
      <div className="flex justify-start gap-2">{value?.toFixed(2)}</div>
    </Td>
  );
};

const OptionChainTable = ({ data }) => {
  const expiryDates = data?.expiryDates;
  const [date, setDate] = useState(data?.expiryDates[0]);
  const [groupedData, setGroupedData] = useState({});
  const [selectedData, setSelectedData] = useState([]);
  console.log("OptionChainTableData :>> ", data);

  function changeExpiryDate(expiryDate) {
    setSelectedData(groupedData[expiryDate]);
  }

  useEffect(() => {
    if (date) {
      changeExpiryDate(date);
    }
  }, [date]);

  function groupByExpiryDate(data) {
    const result = {};

    data.forEach((item) => {
      const expiryDate = item.expiryDate;

      if (!result[expiryDate]) {
        result[expiryDate] = [];
      }

      result[expiryDate].push(item);
    });

    return result;
  }

  useEffect(() => {
    (async () => {
      const groupedData = groupByExpiryDate(data?.data);
      setGroupedData(groupedData);
      setSelectedData(groupedData[data?.expiryDates[0]]);
      console.log("selectedData :>> ", groupedData[data?.expiryDates[0]]);
    })();
  }, [data]);

  return (
    <div>
      <div className="flex justify-start gap-8 items-center mb-4">
        <SelectOptions
          bottomText={`Expiry Date`}
          options={expiryDates}
          handleSelectChange={setDate}
        />
        <Text className="text-slate-600">{`last updated ${data.timestamp}`}</Text>
      </div>

      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              {headerContent.map((content, idx) => (
                <HeaderCell key={idx} content={content} />
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {selectedData.map((row, idx) => (
              <Tr key={`unique-${idx}`}>
                <UnstyledTd value={row?.CE?.totalTradedVolume} />
                <UnstyledTd value={row?.CE?.openInterest} />

                <StyledTd value={row?.CE?.changeinOpenInterest} />
                <StyledTd value={row?.CE?.change} />

                <UnstyledTd value={row?.CE?.lastPrice} />

                <UnstyledTd value={row?.strikePrice} />

                <UnstyledTd value={row?.PE?.lastPrice} />

                <StyledTd value={row?.PE?.change} />
                <StyledTd value={row?.PE?.changeinOpenInterest} />

                <UnstyledTd value={row?.PE?.openInterest} />
                <UnstyledTd value={row?.PE?.totalTradedVolume} />
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OptionChainTable;
