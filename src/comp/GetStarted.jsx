import React from "react";
import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className=" cursor-pointer  p-3 items-center absolute rounded-full justify-center 
     top-0   md:right-12 sm:flex right-0  hidden ring-2 ring-cyan-400 w-[140px] h-[140px] "
    >
      <p
        // onMouseEnter={()=>discoColors()}
        // onMouseLeave={()=>discoColors()}
        className={` ${styles.tras} text-left text-[18px] flex    flex-col  `}
      >
        {" "}
        <span className="flex gap-x-1 ">
          Get{" "}
          <img className="object-contain  " src={arrowUp} alt="arrowUp" />
        </span>{" "}
        Started
      </p>
    </div>
  );
};

export default GetStarted;
