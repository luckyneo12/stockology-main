import React, { useEffect, useState } from "react";

const Timer = () => {
  // const [countdown, setCountdown] = useState(0);

  // useEffect(() => {
  //   const now = new Date().getTime();
  //   const targetDate = new Date(now + 4 * 24 * 60 * 60 * 1000).getTime(); // Target date is 4 days from now
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = targetDate - now;
  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //     setCountdown({ days, hours, minutes, seconds });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  const [countdown, setCountdown] = useState(0);
  useEffect(() => {
    const countDate = new Date("Jun 15 ,2023 16:00:00").getTime();
    const now = new Date().getTime();
    const interval = setInterval(() => {
      const gap = countDate - now;
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);
      setCountdown({ textDay, textHour, textMinute, textSecond });
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <>
      <div className=" border  flex justify-between md:w-4/5   w-full  items-center bg-red-500 rounded-xl p-5">
        <div className="flex flex-col items-center h-14 text-xs font-bold md:h-20 w-1/5  md:w-1/6 justify-around md:text-md  md:font-bold text-gray-700 bg-white rounded-lg">
          <span className="">{String(countdown.textDay).padStart(2, "0")}</span>
          <span className="label">Days</span>
        </div>

        <div className="flex flex-col items-center h-14 text-xs font-bold md:h-20 md:text-xs w-1/5  md:w-1/6 justify-around  md:font-bold text-gray-700  bg-white rounded-lg">
          <span className="">
            {String(countdown.textHour).padStart(2, "0")}
          </span>
          <span className="label">Hours</span>
        </div>

        <div className="flex flex-col items-center h-14 text-xs font-bold md:h-20 w-1/5  md:w-1/6 justify-around md:text-md  md:font-bold text-gray-700  bg-white rounded-lg">
          <span className="">
            {String(countdown.textMinute).padStart(2, "0")}
          </span>
          <span className="label">Minutes</span>
        </div>

        <div className=" flex flex-col items-center h-14 text-xs font-bold md:h-20 w-1/5  md:w-1/6 justify-around md:text-md  md:font-bold text-gray-700  bg-white rounded-lg">
          <span className=" ">
            {String(countdown.textSecond).padStart(2, "0")}
          </span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </>
  );
};
export default Timer;
