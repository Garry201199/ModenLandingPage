import React from "react";
import { stats } from "../utils/data";
const Stats = () => {
  return (
    <div
      className={`sm:h-[60px] h-fit sm:flex-row flex-col flex-wrap  flex sm:divide-x-2 divide-y items-center sm:justify-evenly `}
    >
      {stats &&
        stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-1 py-4 sm:m-3  items-center justify-center gap-x-4"
          >
            <p className=" text-[1.5rem] sm:text-[2.5rem] font-bold ">{stat.value}</p>
            <p
              className=" text-[1rem] sm:text-[1.2rem] font-bold uppercase bg-gradient-to-r from-cyan-500 to-cyan-100 
      text-transparent bg-clip-text "
            >
              {stat.title}{" "}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Stats;

