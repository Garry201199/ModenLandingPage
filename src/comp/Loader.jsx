import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const container = {
  show: {
    transition: {
      staggeredChildren: 0.5,
    },
  },
};
const Loader = ({ setLoading }) => {
  const [barValue, setBarValue] = useState(1);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [secondBarValue, setSecondBarValue] = useState(0);
  useEffect(() => {
    setHasLoaded(true);
  }, []);
  useEffect(() => {
    if (hasLoaded) {
      var timeout1 = setTimeout(() => {
        if (secondBarValue <= 100) {
          setSecondBarValue((secondBarValue) => {
            return secondBarValue + 1;
          });
        }
      }, 30);

      var timeout2 = setTimeout(() => {
        if (barValue <= 100) {
          setBarValue((barValue) => {
            return barValue + 1;
          });
        }
      }, 30);

      var timeout3 = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout1);

      clearTimeout(timeout2);

      clearTimeout(timeout3);
    };
  }, [barValue, hasLoaded]);
  
  
  return (
    <motion.div
    variants={container}
    className="bg-[#00040f] w-full flex-col min-h-screen text-white flex items-center justify-center"
  >
    <motion.p
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
      className=" relative text-center font-bowley text-[5rem] md:text-[8rem] 1g:text-[12rem]"
    >
      Garry
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.2,
            duration: 1.2,
            ease: "easeIn",
          },
        }}
        className="absolute inset-0 text-center text-transparent bg-clip-text
        bg-gradient-to-r from-cyan-600  to-cyan-400 font-Gallery text-[5.01rem] md:text-[80.01rem] 1g:text-[12.02rem]"
      >
        Garry
      </motion.span>
      <motion.span
        initial={{ scale: 0, opacity: 0, y: -100 }}
        animate={{
          scale: 1,
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
        }}
        exit={{
          scale: 0,
          opacity: 0,
          transition: { duration: 0.1, ease: "linear" },
        }}
        className=" drop-shadow-xl absolute w-full md:h-2 h-1 inset-x-0 bottom-0 rounded-lg bg-gray-200"
      >
        <span
          style={{ width: `${barValue}%` }}
          className={`rounded trans ease-in bg-gradient-to-r from-cyan-500 to-cyan-200 md:h-2 h-1 absolute left-0 `}
        >
          <span
            style={{ width: `$(secondBarValue)%` }}
            className={`rounded trans ease-in bg-gradient-to-r from-cyan-500 to-blue-500 md:h-2 h-1 absolute left-0`}
          ></span>
        </span>
      </motion.span>
    </motion.p>
  </motion.div> 
  )
  
};

export default Loader;

const variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
  },

  exit: {
    scale: 2,
    opacity: 0,
    transition: { duration: 1, ease: "linear" },
  },
};


