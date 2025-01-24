import { Card, StyledCardBody } from "@nextui-org/react";
import React from "react";
import { data } from "./data";

export const List = () => {
  return (
    <div className=" gap-4 flex flex-col">
      <Card>
        <StyledCardBody>
          <div className=" flex md:flex-row w-full flex-col md:gap-0 gap-5 md:justify-between">
            {/* Day 1 Start */}
            <div className=" flex items-center    md:w-1/3 w-full gap-4  md:gap-2">
              <div className=" flex items-center gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl">Day 1</h1>
              </div>
              <div>
                <p className=" font-medium md"> Building Foundation</p>
              </div>
            </div>
            {/* Day 1 End */}

            {/* Day 2 Start */}
            <div className="  flex items-center    md:w-1/3 w-full gap-4  md:gap-2">
              <div className=" flex items-center  gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl">Day 2</h1>
              </div>
              <div>
                <p className=" font-medium md">
                  Start a day with Technical Analysis
                </p>
              </div>
            </div>
            {/* Day 2 End */}
            {/* Day 3 Start */}
            <div className=" flex items-center    md:w-1/3 w-full gap-4  md:gap-2">
              <div className=" flex items-center  gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl w-[49px]">Day 3</h1>
              </div>
              <div>
                <p className=" font-medium md">
                  Candlestick pattern with different time frame
                </p>
              </div>
            </div>
            {/* Day 3 End */}
          </div>
        </StyledCardBody>
      </Card>
      <Card>
        <StyledCardBody>
          <div className="flex md:flex-row w-full flex-col md:gap-0 gap-5 md:justify-between">
            {/* Day 4 Start */}
            <div className="  flex items-center    md:w-1/3 w-full gap-4  md:gap-2">
              <div className=" flex items-center  gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl">Day 4</h1>
              </div>
              <div>
                <p className=" font-medium md"> Practise Candlestick Pattern</p>
              </div>
            </div>
            {/* Day 4 End */}

            {/* Day 5 Start */}
            <div className="  flex items-center    md:w-1/3 w-full gap-4  md:gap-2">
              <div className=" flex items-center  gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl">Day 5</h1>
              </div>
              <div>
                <p className=" font-medium md">
                  Learn the demand and supply zone
                </p>
              </div>
            </div>
            {/* Day 5 End */}
            {/* Day 6 Start */}
            <div className="  flex items-center    md:w-1/3 w-full gap-4  md:gap-2">
              <div className=" flex items-center  gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl">Day 6</h1>
              </div>
              <div>
                <p className=" font-medium text-md">Learn chart pattern</p>
              </div>
            </div>
            {/* Day 6 End */}
          </div>
        </StyledCardBody>
      </Card>
      <Card>
        <StyledCardBody>
          <div className="flex md:flex-row w-full flex-col md:gap-0 gap-5 md:justify-between">
            {/* Day 7 Start */}
            <div className="flex items-center    md:w-1/3 w-full gap-4  md:gap-2">
              <div className=" flex items-center  gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl">Day 7</h1>
              </div>
              <div>
                <p className=" font-medium md"> Practise Chart pattern </p>
              </div>
            </div>
            {/* Day 7 End */}

            {/* Day 8 Start */}
            <div className=" flex items-center    md:w-1/3 w-full gap-4  md:gap-2 ">
              <div className=" flex items-center  gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl w-[49px]">Day 8</h1>
              </div>
              <div>
                <p className=" font-medium text-">
                  Entry and Exit points on chart pattern
                </p>
              </div>
            </div>
            {/* Day 8 End */}
            {/* Day 9 Start */}
            <div className=" flex items-center    md:w-1/3 w-full gap-4  md:gap-2">
              <div className=" flex items-center  gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl">Day 9</h1>
              </div>
              <div>
                <p className=" font-medium md">Introduce Indicator</p>
              </div>
            </div>
            {/* Day 9 End */}
          </div>
        </StyledCardBody>
      </Card>
      <Card>
        <StyledCardBody>
          <div className="flex md:flex-row w-full flex-col md:gap-0 gap-5 md:justify-between">
            {/* Day 10 Start */}
            <div className=" flex items-center    md:w-1/3 w-full gap-4  md:gap-2">
              <div className=" flex items-center  gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl w-[60px]">Day 10</h1>
              </div>
              <div>
                <p className=" font-medium md">
                  {" "}
                  How to use a combination in the Live market{" "}
                </p>
              </div>
            </div>
            {/* Day 10 End */}

            {/* Day 11 Start */}
            <div className=" flex items-center    md:w-1/3 w-full gap-4  md:gap-2">
              <div className=" flex items-center  gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl">Day 11</h1>
              </div>
              <div>
                <p className=" font-medium md">Trading Psychology</p>
              </div>
            </div>
            {/* Day 11 End */}
            {/* Day 12 Start */}
            <div className=" flex items-center    md:w-1/3 w-full gap-4  md:gap-2">
              <div className=" flex items-center  gap-2">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h1 className=" font-bold text-xl">Day 12</h1>
              </div>
              <div>
                <p className=" font-medium md"> Risk Management</p>
              </div>
            </div>
            {/* Day 12 End */}
          </div>
        </StyledCardBody>
      </Card>
    </div>
  );
};
