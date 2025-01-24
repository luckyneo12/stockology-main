import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CiPercent } from "react-icons/ci";
import React from "react";
import Technical_Charts_Patterns from "../../assets/Technical_Charts_Patterns.jpg";
import Platinum_Bundle from "../../assets/Platinum_Bundle.jpg";
import Advance_Technical_Analysis from "../../assets/Advance_Technical_Analysis.jpg";
import Gold_Bundle from "../../assets/Gold_Bundle.jpg";
import Advance_Options_Trading from "../../assets/Advance_Options_Trading.jpg";

import { Button, Divider, Link } from "@nextui-org/react";

const PaidCourses = () => {
  return (
    <div className=" flex flex-wrap justify-between gap-3 w-full ">
      <div className=" rounded-lg md:w-[31%] w-full">
        <Link
          target={"_blank"}
          href="https://hgyiu.courses.store/301290 "
          className=" "
          w={"full"}
        >
          <Card>
            <CardBody>
              <Image
                src={Technical_Charts_Patterns}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h={"290px"}
                w="full"
              />
              <Stack mt="6" spacing="3">
                <div className=" flex gap-4 rounded-xl  text-white">
                  <Badge className=" text-gray-500 rounded-lg py-1 font-light px-3  ">
                    LIVE CLASS
                  </Badge>
                  <Badge className="text-gray-500 rounded-lg py-1 font-light px-3">
                    FREE CONTENT
                  </Badge>
                  <Badge className="text-gray-500 rounded-lg py-1 font-light px-3">
                    VIDEOS
                  </Badge>
                </div>
                <Heading size="md" className=" text-gray-700">
                  Technical Charts Patterns
                </Heading>
                <Text className=" font-light text-lg text-orange-600 flex items-center gap-1">
                  <CiPercent className=" font-bold text-2xl" />
                  Extra 30% coupon discount
                </Text>
                <Text color="gray.600" className=" font-bold text-xl">
                  ₹ 3,000
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button className=" bg-blue-600 w-full font-semibold text-xl h-12">
                Get this course
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
      <div className="  rounded-lg md:w-[31%] w-full">
        <Link
          target={"_blank"}
          href="https://hgyiu.courses.store/301301 "
          className=" "
          w={"full"}
        >
          <Card>
            <CardBody>
              <Image
                src={Platinum_Bundle}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h={"290px"}
                w="full"
              />
              <Stack mt="6" spacing="3">
                <div className=" flex gap-4 rounded-xl  text-white">
                  <Badge className=" text-gray-500 rounded-lg py-1 font-light px-3  ">
                    LIVE CLASS
                  </Badge>
                  <Badge className="text-gray-500 rounded-lg py-1 font-light px-3">
                    FREE CONTENT
                  </Badge>
                  <Badge className="text-gray-500 rounded-lg py-1 font-light px-3">
                    VIDEOS
                  </Badge>
                </div>
                <Heading size="md" className=" text-gray-700">
                  Technical Charts Patterns
                </Heading>
                <Text className=" font-light text-lg text-orange-600 flex items-center gap-1">
                  <CiPercent className=" font-bold text-2xl" />
                  Extra 30% coupon discount
                </Text>
                <Text color="gray.600" className=" font-bold text-xl">
                  ₹ 17,444
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button className=" bg-blue-600 w-full font-semibold text-xl h-12">
                Get this course
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>{" "}
      <div className="  rounded-lg md:w-[31%] w-full ">
        <Link
          target={"_blank"}
          href="https://hgyiu.courses.store/300699 "
          className=" "
          w={"full"}
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src={Advance_Technical_Analysis}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h={"290px"}
                w="full"
              />
              <Stack mt="6" spacing="3">
                <div className=" flex gap-4 rounded-xl  text-white">
                  <Badge className=" text-gray-500 rounded-lg py-1 font-light px-3  ">
                    LIVE CLASS
                  </Badge>
                  <Badge className="text-gray-500 rounded-lg py-1 font-light px-3">
                    FREE CONTENT
                  </Badge>
                  <Badge className="text-gray-500 rounded-lg py-1 font-light px-3">
                    VIDEOS
                  </Badge>
                </div>
                <Heading size="md" className=" text-gray-700">
                  Advance Technical Analysis
                </Heading>
                <Text className=" font-light text-lg text-orange-600 flex items-center gap-1">
                  <CiPercent className=" font-bold text-2xl" />
                  Extra 30% coupon discount
                </Text>
                <Text color="gray.600" className=" font-bold text-xl">
                  ₹ 6,999
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button className=" bg-blue-600 w-full font-semibold text-xl h-12">
                Get this course
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
      <div className=" rounded-lg md:w-[31%] w-full">
        <Link
          target={"_blank"}
          href="https://hgyiu.courses.store/301290 "
          className=" "
          w={"full"}
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src={Gold_Bundle}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <div className=" flex gap-4 rounded-xl  text-white">
                  <Badge className=" text-gray-500 rounded-lg py-1 font-light px-3  ">
                    LIVE CLASS
                  </Badge>
                  <Badge className="text-gray-500 rounded-lg py-1 font-light px-3">
                    FREE CONTENT
                  </Badge>
                  <Badge className="text-gray-500 rounded-lg py-1 font-light px-3">
                    VIDEOS
                  </Badge>
                </div>
                <Heading size="md" className=" text-gray-700">
                  Gold Bundle
                </Heading>
                <Text className=" font-light text-lg text-orange-600 flex items-center gap-1">
                  <CiPercent className=" font-bold text-2xl" />
                  Extra 30% coupon discount
                </Text>
                <Text color="gray.600" className=" font-bold text-xl">
                  ₹ 10,999
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button className=" bg-blue-600 w-full font-semibold text-xl h-12">
                Get this course
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
      <div className=" rounded-lg md:w-[31%] w-full">
        <Link
          target={"_blank"}
          href="https://hgyiu.courses.store/300847 "
          className=" "
          w={"full"}
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src={Advance_Options_Trading}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <div className=" flex gap-4 rounded-xl  text-white">
                  <Badge className=" text-gray-500 rounded-lg py-1 font-light px-3  ">
                    LIVE CLASS
                  </Badge>
                  <Badge className="text-gray-500 rounded-lg py-1 font-light px-3">
                    FREE CONTENT
                  </Badge>
                  <Badge className="text-gray-500 rounded-lg py-1 font-light px-3">
                    VIDEOS
                  </Badge>
                </div>
                <Heading size="md" className=" text-gray-700">
                  Advance Options Trading
                </Heading>
                <Text className=" font-light text-lg text-orange-600 flex items-center gap-1">
                  <CiPercent className=" font-bold text-2xl" />
                  Extra 30% coupon discount
                </Text>
                <Text color="gray.600" className=" font-bold text-xl">
                  ₹ 6,157
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button className=" bg-blue-600 w-full font-semibold text-xl h-12">
                Get this course
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default PaidCourses;
