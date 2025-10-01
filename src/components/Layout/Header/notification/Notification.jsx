import { Avatar, Dropdown, Navbar, Text } from "@nextui-org/react";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";

import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserNotification } from "../../../../redux/actions/admin";
const Notification = () => {
  // const [visible, setVisible] = useState(false);
  // const handler = () => setVisible(true);
  // const closeHandler = () => {
  //   setVisible(false);
  //   console.log("closed");
  // };
  // const [isInvisible, setIsInvisible] = useState(false);
  const { notification, error, message } = useSelector((state) => state.admin);

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

    dispatch(getAllUserNotification());
  }, [dispatch, error, message]);

  return (
    <>
      <div>
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                color={"#fff"}
                size={"lg"}
                icon={
                  <div className=" ">
                    {" "}
                    <span class="relative flex w-8 h-8">
                      <IoIosNotificationsOutline className=" w-7 h-8" />
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  </div>
                }
                as="button"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu aria-label="User menu actions" color="#FFF">
            {notification &&
              notification.map((item) => (
                <Dropdown.Item
                  key="profile"
                  css={{ height: "$18" }}
                  className="border border-gray-400 my-2 hover:scale-105 shadow-sm hover:shadow-lg transition-all"
                >
                  <>
                    <Text color="inherit" css={{ d: "flex" }}>
                      {item.title}
                    </Text>
                    <Text
                      color="inherit"
                      className=" text-xs truncate font-light"
                      css={{ d: "flex" }}
                    >
                      {item.subheading}
                    </Text>
                  </>
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default Notification;
