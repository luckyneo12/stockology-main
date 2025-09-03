import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import vision_mision from "../../assets/vision_main.json";
import Lottie from "react-lottie";

const VisionAndMision_2 = () => {
  const animation = {
    loop: true,
    autoplay: true,
    animationData: vision_mision,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className=" my-8 ">
        <Heading
          fontSize={["3xl", "4xl", "5xl"]}
          className=" text-5xl font-bold text-center my-4  heading_1  border-b-2 border-blue-900 w-fit m-auto py-2 px-7"
        >
          Vision & Mission
        </Heading>
        <Box className=" w-full flex sm:flex-row flex-col    justify-between items-center">
          <Box className=" md:w-2/5     ">
            <Lottie options={animation} />
          </Box>

          <div className="flex-col md:w-3/5 md:p-0 p-3  md:mr-12">
            {/* card section Start */}

            <div className=" w-full flex justify-end  my-2 md:my-4">
              {/* card one  Start*/}
              <div className=" vision_mision_card shadow-lg  hover:shadow-blue-900 shadow-blue-500  hover:bg-blue-900">
                <span></span>
                <h1 className="  text-blue-900 ">Our Values</h1>
                <p className=" font-semibold">
                  <div className=" w-fit flex gap-1">
                    {" "}
                    Knowledge First:
                    <p>Empowering through informed decisions.</p>
                  </div>{" "}
                  <div className=" w-fit flex gap-1">
                    {" "}
                    Ethical Excellence:
                    <p> Trading with integrity and responsibility.</p>
                  </div>{" "}
                  <div className=" w-fit flex gap-1">
                    {" "}
                    Practical Wisdom:
                    <p> Real-world insights for real-world success.</p>
                  </div>{" "}
                  <div className=" w-fit flex gap-1">
                    {" "}
                    Individual Focus:
                    <p> Personalized learning for unique journeys.</p>
                  </div>{" "}
                  <div className=" w-fit flex gap-1">
                    {" "}
                    Ever-Ready Learning:
                    <p> Adapting to evolving markets.</p>
                  </div>{" "}
                  <div className=" w-fit flex gap-1">
                    {" "}
                    Community Support:
                    <p> Collaborative growth and shared experiences.</p>
                  </div>{" "}
                  <div className=" w-fit flex gap-1">
                    {" "}
                    Long-Term Vision:
                    <p> Building sustainable wealth over time.</p>
                  </div>{" "}
                </p>
              </div>
              {/* card oen end  */}
            </div>
            <div className=" w-full flex mr-4 my-5 md:my-10 justify-start">
              {/* card one  Start*/}
              <div className=" vision_mision_card shadow-lg  hover:shadow-blue-900 shadow-blue-500 hover:bg-blue-900">
                <span></span>
                <h1 className=" text-blue-900 ">Our Vision </h1>
                <p className=" font-semibold">
                  Empower every individual and organization globally to enhance
                  earnings. Recognize the emerging trend in trading and
                  investing. Focus on equipping individuals with skills for this
                  trend. Our Vision is to offer offline and online courses led
                  by experts. Aim to prepare individuals for success in trading
                  and investing.
                </p>
              </div>
              {/* card oen end  */}
            </div>
            <div className=" w-full flex  my-2  md:my-4 justify-end">
              {/* card one  Start*/}
              <div className=" vision_mision_card shadow-lg shadow-blue-500 hover:shadow-blue-900  hover:bg-blue-900">
                <span></span>
                <h1 className="   text-blue-900 ">Our Mission </h1>
                <p className=" font-semibold">
                  Mission: Ensure students develop personalized trading plans.
                  Goals: Attain optimal stock selection, precise entry and exit
                  timing. Focus on effective risk and money management. Aim for
                  growth in students' trading and investing accounts.
                </p>
              </div>
              {/* card oen end  */}
            </div>
            {/* card section end  */}
            {/* Image section start */}
          </div>
          {/* Image section end */}
        </Box>
      </div>
    </>
  );
};

export default VisionAndMision_2;
