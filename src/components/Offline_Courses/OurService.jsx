import { Box, Heading, Text } from "@chakra-ui/react";
import { Container } from "@nextui-org/react";
import React from "react";
import { motion, Variants } from "framer-motion";

const OurService = () => {
  const Right: Variants = {
    offscreen: {
      // y: 0,
      x: 100,
    },
    onscreen: {
      // y: 0,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2,
      },
    },
  };
  const Left: Variants = {
    offscreen: {
      // y: 0,
      x: -100,
    },
    onscreen: {
      // y: 0,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 2,
      },
    },
  };
  return (
    <>
      <Container className="">
        <Box mt={"10"} w="100%" mx={"auto"}>
          <Box className="  " mx="auto">
            <Heading
              className="heading_1 border-b-2  md:my-8 border-blue-900 m-auto w-fit px-4 py-2"
              textAlign="center"
              fontSize={["2xl", "4xl", "5xl"]}
            >
              Your Trading Journey Start with Us
            </Heading>
          </Box>
        </Box>
        <Box className=" md:my-4 flex flex-col gap-3 md:gap-20">
          {/* Content start */}
          <motion.div
            className=" m-auto w-full md:w-4/5"
            variants={Right}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className=" flex flex-col md:flex-row justify-around items-center  gap-5 m-auto w-full ">
              <div className=" bg-red-500 text-white px-3 py-1 md:px-5 md:py-3 shadow-md   shadow-red-900 rounded-full flex items-center justify-center ">
                1
              </div>
              <Heading
                fontSize={["xl", "3xl"]}
                className="heading_1  font-bold"
              >
                Learning Phase
              </Heading>

              <div
                className="  px-5 card_hover shadow-lg rounded-2xl w-full md:w-4/6 py-4
                  hover:shadow-blue-900 shadow-blue-500  hover:bg-blue-900"
              >
                <p className=" text-sm md:text-xl font-semibold">
                  Successful traders begin by educating themselves about
                  financial markets, trading concepts, and strategies through
                  courses, books, and online resources.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className=" m-auto w-full md:w-4/5"
            variants={Left}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="   gap-5 flex flex-col-reverse md:flex-row justify-around items-center  m-auto w-full ">
              <div
                className="  px-5 card_hover shadow-lg rounded-2xl w-full md:w-4/6 py-4
                  hover:shadow-blue-900 shadow-blue-500  hover:bg-blue-900"
              >
                <p className=" text-sm md:text-xl                     font-semibold">
                  They apply theoretical knowledge by engaging in paper trading
                  or using simulation platforms to practice trading without real
                  money. They apply theoretical knowledge by engaging in paper
                  trading or using simulation platforms to practice trading
                  without real money.
                </p>
              </div>
              <Heading
                fontSize={["xl", "3xl"]}
                className="heading_1  font-bold"
              >
                Practice and Paper Trading
              </Heading>
              <div className=" bg-red-500 text-white px-5 py-3 shadow-md   shadow-red-900 rounded-full flex items-center justify-center ">
                2
              </div>
            </div>
          </motion.div>
          <motion.div
            className=" m-auto md:w-4/5 w-full"
            variants={Right}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className=" gap-5  flex flex-col md:flex-row justify-around items-center  m-auto w-full">
              <div className=" bg-red-500 text-white px-5 py-3 shadow-md   shadow-red-900 rounded-full flex items-center justify-center ">
                3
              </div>
              <Heading
                fontSize={["xl", "3xl"]}
                className="heading_1  font-bold"
              >
                Strategy Developments
              </Heading>

              <div
                className=" px-5 card_hover shadow-lg rounded-2xl w-full md:w-4/6 py-4
                hover:shadow-blue-900 shadow-blue-500  hover:bg-blue-900"
              >
                <p className=" text-sm md:text-xl font-semibold ">
                  They develop and refine a trading strategy based on their risk
                  tolerance, preferred assets, timeframes, and market analysis
                  methods.They develop and refine a trading strategy based on
                  their risk tolerance, preferred assets, timeframes, and market
                  analysis methods.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className=" m-auto md:w-4/5 w-full"
            variants={Left}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className=" flex gap-5 flex-col-reverse md:flex-row justify-around items-center  m-auto w-full ">
              <div
                className="  px-5 card_hover shadow-lg rounded-2xl w-full md:w-4/6 py-4
                hover:shadow-blue-900 shadow-blue-500  hover:bg-blue-900"
              >
                <p className="  text-sm md:text-xl font-semibold ">
                  Successful traders prioritize risk management, setting limits
                  on the amount of capital they're willing to risk on each trade
                  and using tools like stop-loss orders.
                </p>
              </div>
              <Heading
                fontSize={["xl", "3xl"]}
                className="heading_1  font-bold"
              >
                Risk Management
              </Heading>
              <div className=" bg-red-500 text-white px-5 py-3 shadow-md   shadow-red-900 rounded-full flex items-center justify-center ">
                4
              </div>
            </div>
          </motion.div>
          <motion.div
            className=" m-auto w-full md:w-4/5"
            variants={Right}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="  gap-5  flex flex-col md:flex-row justify-around items-center  m-auto w-full">
              <div className=" bg-red-500 text-white px-5 py-3 shadow-md   shadow-red-900 rounded-full flex items-center justify-center ">
                5
              </div>
              <Heading
                fontSize={["xl", "3xl"]}
                className="heading_1  font-bold"
              >
                Real Trading with Small Capital
              </Heading>

              <div
                className="  px-5 card_hover shadow-lg rounded-2xl w-full md:w-4/6 py-4
                hover:shadow-blue-900 shadow-blue-500  hover:bg-blue-900"
              >
                <p className=" text-sm md:text-xl  font-semibold">
                  They start trading with a small portion of their capital,
                  focusing on consistency and learning from actual market
                  experiences.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className=" m-auto w-full md:w-4/5"
            variants={Left}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className=" gap-5 flex flex-col-reverse md:flex-row justify-around items-center  m-auto w-full ">
              <div
                className="   px-5 card_hover shadow-lg rounded-2xl w-full md:w-4/6 py-4
                hover:shadow-blue-900 shadow-blue-500  hover:bg-blue-900"
              >
                <p className=" text-sm md:text-xl  font-semibold">
                  Ongoing analysis of market trends, technical indicators, and
                  economic news helps them refine their strategy and adapt to
                  changing conditions.
                </p>
              </div>
              <Heading
                fontSize={["xl", "3xl"]}
                className="heading_1  font-bold"
              >
                Continuous Analysis
              </Heading>
              <div className=" bg-red-500 text-white px-5 py-3 shadow-md   shadow-red-900 rounded-full flex items-center justify-center ">
                6
              </div>
            </div>
          </motion.div>

          <motion.div
            className=" m-auto w-full md:w-4/5"
            variants={Right}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className=" gap-5 flex flex-col md:flex-row justify-around items-center  m-auto w-full  ">
              <div className=" bg-red-500 text-white px-5 py-3 shadow-md   shadow-red-900 rounded-full flex items-center justify-center ">
                7
              </div>
              <Heading
                fontSize={["xl", "3xl"]}
                className="heading_1  font-bold"
              >
                Psychological Resilience
              </Heading>

              <div
                className="  px-5 card_hover shadow-lg rounded-2xl w-full md:w-4/6 py-4
                hover:shadow-blue-900 shadow-blue-500  hover:bg-blue-900"
              >
                <p className=" text-sm md:text-xl  font-semibold">
                  Successful traders develop emotional discipline to avoid
                  impulsive decisions, manage losses, and handle the
                  psychological challenges of trading.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className=" m-auto w-full md:w-4/5"
            variants={Left}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className=" gap-5  flex flex-col-reverse md:flex-row justify-around items-center  m-auto w-full  ">
              <div
                className="   px-5 card_hover shadow-lg rounded-2xl w-full md:w-4/6 py-4
                hover:shadow-blue-900 shadow-blue-500  hover:bg-blue-900"
              >
                <p className=" text-sm md:text-xl  font-semibold">
                  They maintain a trading journal to document their trades,
                  outcomes, and the reasoning behind each decision, enabling
                  them to learn and improve.
                </p>
              </div>
              <Heading
                fontSize={["xl", "3xl"]}
                className="heading_1  font-bold"
              >
                Record Keeping
              </Heading>
              <div className=" bg-red-500 text-white px-5 py-3 shadow-md   shadow-red-900 rounded-full flex items-center justify-center ">
                8
              </div>
            </div>
          </motion.div>
          <motion.div
            className=" m-auto w-full md:w-4/5"
            variants={Right}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="  gap-5 flex flex-col md:flex-row justify-around items-center  m-auto w-full ">
              <div className=" bg-red-500 text-white px-5 py-3 shadow-md   shadow-red-900 rounded-full flex items-center justify-center ">
                9
              </div>
              <Heading
                fontSize={["xl", "3xl"]}
                className="heading_1  font-bold"
              >
                Gradual Capital Growth
              </Heading>

              <div
                className="     px-5 card_hover shadow-lg rounded-2xl w-full md:w-4/6 py-4
                hover:shadow-blue-900 shadow-blue-500  hover:bg-blue-900"
              >
                <p className=" text-sm md:text-xl  font-semibold">
                  As their confidence and skills grow, successful traders
                  incrementally allocate more capital to their trades.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className=" m-auto w-full md:w-4/5"
            variants={Left}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className=" gap-5 flex flex-col-reverse md:flex-row justify-around items-center  m-auto w-full    ">
              <div
                className="  px-5 card_hover shadow-lg rounded-2xl w-full md:w-4/6 py-4
                hover:shadow-blue-900 shadow-blue-500  hover:bg-blue-900"
              >
                <p className=" text-sm md:text-xl  font-semibold">
                  They recognize that markets evolve, so they continue learning
                  and adapting their strategies to stay ahead.
                </p>
              </div>
              <Heading fontSize={"3xl"} className="heading_1  font-bold">
                Lifelong Learnig
              </Heading>
              <div className=" bg-red-500 text-white px-5 py-3 shadow-md   shadow-red-900 rounded-full flex items-center justify-center ">
                10
              </div>
            </div>
          </motion.div>
          {/* Content end */}
        </Box>
      </Container>
    </>
  );
};

export default OurService;
