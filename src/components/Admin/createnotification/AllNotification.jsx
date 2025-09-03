import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
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
import {
  deleteNotification,
  getAllNotifacation,
} from "../../../redux/actions/admin";
import toast from "react-hot-toast";
import { RiDeleteBin7Fill } from "react-icons/ri";

const AllNotifications = () => {
  const { notification, loading, error, message } = useSelector(
    (state) => state.admin
  );
  const deleteButtonHandler = (userId) => {
    dispatch(deleteNotification(userId));
  };

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

    dispatch(getAllNotifacation());
  }, [dispatch, error, message]);
  console.log(notification);

  return (
    <Grid minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>
      <Box p={["0", "16"]} overflowX="auto">
        <Heading
          textTransform={"uppercase"}
          children="All Users"
          my="16"
          textAlign={["center", "left"]}
        />

        <TableContainer w={["100vw", "full"]}>
          <Table variant={"simple"} size="lg">
            <TableCaption>
              All available notifications in the database
            </TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Title</Th>
                <Th>Subheading</Th>
                <Th>Discriptions</Th>

                {/* <Th>Subscription</Th> */}
                <Th>Image</Th>

                {/* <Th isNumeric>Action</Th> */}
              </Tr>
            </Thead>

            <Tbody>
              {notification &&
                notification.map((item) => (
                  <Row
                    key={item._id}
                    item={item}
                    loading={loading}
                    deleteButtonHandler={deleteButtonHandler}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default AllNotifications;

function Row({ item, loading, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.title}</Td>
      <Td>{item.subheading}</Td>
      <Td>{item.description}</Td>

      {/* <Td>{item.role}</Td> */}
      {/* <Td>
          {item.subscription && item.subscription.status === "active"
            ? "Active"
            : "Not Active"}
        </Td> */}
      <Td>
        <Image src={item.poster.url} />
      </Td>

      {/* <Button
        onClick={() => deleteButtonHandler(item._id)}
        color={"green.600"}
        isLoading={loading}
      >
        <RiDeleteBin7Fill />
      </Button> */}
    </Tr>
  );
}
