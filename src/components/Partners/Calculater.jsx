import { Box, Heading, Progress, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Container } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Calculater = () => {
  const [percentage, setPercentage] = useState(0);
  const [qty, setQty] = useState();

  const course = 17000;
  const maxamount = 1700000;

  const input = (index) => {
    index.preventDefault();
    index = qty;
    const result = ((course * qty) / 100) * 20;
    setPercentage(result);
    const percentage = (result / maxamount) * 100;
    console.log(percentage);
  };
  const [toggleState, setToggleState] = useState(1);
  const toggletab = (index) => {
    setToggleState(index);
    console.log(index);
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-gradient-to-r mb-14 p-4  text-white bg-blue-300 h- flex justify-between">
        <div className=" flex container justify-between">
          <div className=" w-[65%]">
            <Heading fontSize={"5xl"}>
              Calculate Profits that you can <br /> earn!
            </Heading>
            <div className=" w-[100%]  bg-white rounded-3xl  my-4 overflow-hidden h-[300px]">
              <div className=" bg-blue-900 ">
                <Text className="  text-center text-3xl font-semibold py-3">
                  {" "}
                  Profit Calculator
                </Text>
              </div>
              <div className=" px-5">
                <Text className=" text-xl my-2 text-gray-800">
                  Course sale per
                  <span className="  text-blue-300"> Month</span>
                </Text>
                <div>
                  <div className=" text-gray-900">
                    <div className=" flex">
                      <form onSubmit={input}>
                        {/* <span onClick={custom(300)}>30</span> */}
                        <label htmlFor="custome"></label>
                        <input
                          className=" border rounded-full w-full text-center border-blue-900"
                          type="number"
                          value={qty}
                          max="500"
                          onChange={(e) => setQty(e.target.value)}
                          placeholder=" Enter Your Value"
                        />
                        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      </form>
                    </div>

                    <button
                      className=" bg-blue-300 hover:scale-105 hover:shadow-xl shadow-blue-900 w-[80%] mx-auto text-white px-5 py-2 rounded-xl my-3"
                      onClick={input}
                    >
                      Calculate Your Profit
                    </button>
                    <div>
                      <Box
                        display="flex"
                        flexDir={"column"}
                        justifyContent="center"
                        rounded={"full"}
                        className="
             bg-blue-900 w-[95%]  rounded-full my-4  "
                      >
                        <Text
                          px={"5"}
                          className={
                            "font-bold py-3 w-[85%] bg-blue-300 rounded-full  text-white block  active-content"
                          }
                          fontSize={["17"]}
                          textAlign="center"
                        >
                          Profit earned {percentage} Rs
                        </Text>
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white text-gray-800 w-[30%] flex overflow-hidden  flex-col items-center rounded-2xl">
            <div className=" bg-blue-900 text-white w-full text-center text-3xl py-3 font-semibold ">
              {" "}
              Profit Calculator
            </div>
            <div className=" flex  gap-4 my-6">
              <span
                display="flex"
                flexDir={"column"}
                justifyContent={"space-between"}
                h={"270"}
                onClick={() => toggletab(1)}
                className={
                  toggleState === 1
                    ? ` activetab  hover:shadow-2xl transition-all ease-in-out duration-150 shadow-gray-900  rounded-lg `
                    : "tab"
                }
              >
                30
              </span>
              <span
                display="flex"
                flexDir={"column"}
                justifyContent={"space-between"}
                h={"270"}
                onClick={() => toggletab(2)}
                className={
                  toggleState === 2
                    ? ` activetab  hover:shadow-2xl transition-all ease-in-out duration-150 shadow-gray-900  rounded-lg `
                    : "tab"
                }
              >
                60
              </span>
              <span
                display="flex"
                flexDir={"column"}
                justifyContent={"space-between"}
                h={"270"}
                onClick={() => toggletab(3)}
                className={
                  toggleState === 3
                    ? ` activetab  hover:shadow-2xl transition-all ease-in-out duration-150 shadow-gray-900  rounded-lg `
                    : "tab"
                }
              >
                90
              </span>
            </div>
            <Box
              display="flex"
              flexDir={"column"}
              justifyContent="center"
              rounded={"full"}
              className="
             bg-blue-900 w-[95%]  rounded-full my-4  "
            >
              <Text
                px={"5"}
                className={
                  toggleState === 1
                    ? "font-bold py-3 w-[85%] bg-blue-300 rounded-full  text-white block  active-content"
                    : " content"
                }
                fontSize={["17"]}
                textAlign="center"
              >
                Profit earned 102000
              </Text>
              <Text
                px={"5"}
                className={
                  toggleState === 2
                    ? "font-bold py-3 w-[85%] bg-blue-300 rounded-full  text-white block  active-content"
                    : " content"
                }
                fontSize={["17"]}
                textAlign="center"
              >
                Profit earned 204000
              </Text>
              <Text
                px={"5"}
                className={
                  toggleState === 3
                    ? "font-bold py-3 w-[85%] bg-blue-300 rounded-full  text-white block  active-content"
                    : " content"
                }
                fontSize={["17"]}
                textAlign="center"
              >
                Profit earned 306000
              </Text>
            </Box>
            <Box className=" flex items-start w-full ">
              <Link to="/partnersregister" className=" z-10">
                <button
                  onClick={scrollToBottom}
                  className="bg-blue-300 hover:scale-105 hover:shadow-xl shadow-blue-900 text-white px-8 rounded-full ml-3   py-3"
                >
                  Register Now
                </button>
              </Link>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculater;
