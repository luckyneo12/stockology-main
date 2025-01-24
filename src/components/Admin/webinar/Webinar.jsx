import {
  Box,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllWebinar } from "../../../redux/actions/admin";
import toast from "react-hot-toast";
import ReactHtmlTableToExcel3 from "react-html-table-to-excel-3";

const Webinar = () => {
  const { webinars, loading, error, message } = useSelector(
    (state) => state.admin
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    dispatch(getAllWebinar());
  }, [dispatch, error, message]);

  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      <Box p={["0", "16"]} overflowX="auto">
        <Heading
          textTransform={"uppercase"}
          children="All Webinar Data"
          my="16"
          textAlign={["center", "left"]}
        />
        <ReactHtmlTableToExcel3
          id="test-table-xls-button"
          className="download-table-xls-button bg-green-400 py-4 px-2 rounded-sm border border-gray-400 text-xs"
          table="table-to-xls"
          filename="tablexls"
          filetype="xls"
          sheet="tablexls"
          buttonText="Download as XLS"
        />
        <TableContainer w={["100vw", "full"]}>
          <Table variant={"simple"} size="lg" id="table-to-xls">
            <TableCaption>All available webinar in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>

                {/* <Th>Subscription</Th> */}
                <Th>Phone</Th>

                <Th isNumeric>Date</Th>
              </Tr>
            </Thead>

            <Tbody>
              {webinars &&
                webinars.map((item) => (
                  <Row key={item._id} item={item} loading={loading} />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default Webinar;

function Row({ item, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.postAt}</Td>
      <Td>{item.phone}</Td>

      <Td isNumeric>
        <HStack justifyContent={"flex-end"}></HStack>
      </Td>
    </Tr>
  );
}
