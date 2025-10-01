import React from "react";
import Yellow from "../../assets/yellowarrow.svg";
import Green from "../../assets/greenarrow.svg";
import Pink from "../../assets/pinkarrow.svg";
import BlackCircle from "../../assets/blackcircle.svg";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import vision from "../../assets/vision.svg";
import missiontext from "../../assets/Mission.svg";
import values from "../../assets/values.svg";

const Mission = () => {
  return (
    <>
      <div>
        <AnimatedCard
          config={{
            rotation: 70, // this value for the divide (window.innerWidth / 2 - e.pageX) / rotation && (window.innerWidth / 2 - e.pageY) / rotation
            transition: {
              duration: 0.5,
              timingMode: "ease",
            },
            transform: {
              figureIcon: {
                rotation: 20,
                translateZ: 160,
              },
              titleTranslateZ: 140,
              bodyTextTranslateZ: 100,
              buttonTranslateZ: 80,
            },
          }}
          // style={{
          //   width: "calc(100vh - 100px)", //container style (you can use className as well)
          // }}
        >
          <div className=" w-fit relative">
            <div className="text ">
              <img
                src={vision}
                className="mission_text  z-10 bottom-0 right-12"
              />
              <img
                src={values}
                className=" mission_text w-32  z-10 top-16 left-1"
              />
              <img
                src={missiontext}
                className=" mission_text w-72   z-10 -top-3 -right-5"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="black_circle  "
              children={<Image width={450} src={BlackCircle} />}
            />
            <div className="">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className=" arrow md:w-32 w-10 absolute top-48 -right-3"
                children={<Image src={Pink} />}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className=" arrow   md:w-32 w-10 absolute top-80 right-60"
                children={<Image src={Green} />}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className=" arrow  md:w-32 w-10 absolute top-3 right-64"
                children={<Image src={Yellow} />}
              />
            </div>
          </div>
        </AnimatedCard>
      </div>
    </>
  );
};

export default Mission;
