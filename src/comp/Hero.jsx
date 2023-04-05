import React, { useMemo } from "react";
import {discount, robot , robot1 } from "../assets";
import styles from "../styles";
import GetStarted from "./GetStarted";
import ProgressiveImage from "./ProgressiveImage";


const Hero = () => {
  const randoms = useMemo(
    () => [
      "#adc178",
      "#fb5607",
      "#8338ec",
      "#e63946",
      "#14213d",
      "#ef233c",
      "#fee440",
      "#ffc2d1",
    ],
    []
  )

  // const discoColors=()=>{
  //   var random = randoms[Math.floor((Math.random()*randoms.length))]
  //   hoverRef.current.style.background = random
  // }
  return (
    <section
      id="home"
      className={` flex md:flex-row flex-col items-center justify-center  ${styles.paddingY}    `}
    >
      <div className="absolute w-52 h-52 z-0 -left-14 bg-slate-100/30 blur-3xl    rounded-full "></div>
      {/* <div className=" absolute z-0 w-[50%] h-[50%] top-12 right-0 bg-pink-500/10  rounded-full blur-3xl "></div> */}
      <div className={`xl:px-0 ${styles.paddingX} flex justify-center flex-col flex-1 h-fit   w-full`}>
        
        <div className="flex sm:self-start self-center justify-center w-full uppercase mb-8 gap-x-4 
         max-w-fit items-center  tracking-wide bg-gradient-to-tr
          from-slate-900 to-slate-700 px-4 py-1 rounded-xl h-fit ">
          <img src={discount} className="w-[32px] h-[32px] " alt="discount " />
          <p className="text-slate-400 sm:text-lg  text-sm ">
            {" "}
            <span className="text-slate-200 sm:text-xl  text-lg ">20%</span> Discount for{" "}
            <span className="text-slate-200">
              {" "}
              <span className="sm:text-xl text-lg ">1</span> month{" "}
            </span>{" "}
            account
          </p>
        </div>

        <div className=" flex flex-col sm:justify-start justify-center  tracking-wide relative">
          <p className="sm:text-left text-center font-bold  xl:text-[4.5rem] md:text-[4.5rem] sm:text-[3rem] text-[2.8rem] leading-tight">
            The Next <br />{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-cyan-200 text-transparent bg-clip-text ">
              Generation
            </span>{" "}
            <br /> Payment Method.
          </p>
          <p className="sm:w-[80%] w-full mt-8 sm:text-left text-center text-[18px] flex items-center">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
          <GetStarted />
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* <div class="bg-[#202020] mx-auto h-full ">
          <div
            className=" absolute left-0 
  right-0   z-0 mx-auto h-0 w-0 border-r-[150px] border-b-[500px] 
border-l-[150px] border-solid border-r-transparent
border-l-transparent border-b-cyan-300/40 rotate-180 blur-3xl   "
          ></div>
        </div> */}
        <ProgressiveImage
        imgSrc={robot}
        previewSrc={robot1}
        width={800}
        height={500}
        className="z-10 object-contain h-[100%] w-[100%] relative "
      />
        
      </div>
    </section>
  );
};

export default Hero;

