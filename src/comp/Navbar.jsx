import React, { useState } from "react";
import { navLinks } from "../utils/data";
import { close, logo, menu } from "../assets";
import styles from "../styles";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full text-white justify-between flex py-6 items-center ">
      <div className="">
        <img className="h-10 w-[124px] " src={logo} alt="logo" />{" "}
      </div>
      <ul className="hidden    list-none sm:flex flex-1 justify-end items-center  ">
        {navLinks &&
          navLinks.map((navLink, index) => (
            <li
              className={`font-normal hover:text-white text-white/70 ${styles.trans}
             ${
               index === navLinks.length - 1 ? "mr-0" : "mr-10"
             }  cursor-pointer text-[16px] `}
              key={navLink.id}
            >
              <Link
                activeClass="active"
                to={navLink.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          className={`${styles.trans} object-contain w-[28px] h-[28px] `}
          onClick={() => {setToggle((toggle) => !toggle);}}
          src={`${toggle ? close : menu}`}
          alt=""
        />
        <AnimatePresence>
          {toggle && (
            <motion.div
              key="modal"
              variants={navMobAnimation}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              className={`flex
            p-6  border border-slate-500/40 bg-slate-900/20 backdrop-blur-lg absolute top-20 z-50 right-0 mx-4 my-2 min-w-[140px] rounded-xl        `}
            >
              {/* bg-[#2c2c2c]/30  */}
              <ul className=" sm:hidden w-full flex flex-col justify-center items-center  ">
                {navLinks &&
                  navLinks.map((navLink, index) => (
                    <li 
                    
                      className={`  font-normal text-white ${styles.trans}  
              ${
                index === navLinks.length - 1 ? "mb-0" : "mb-10"
              }  cursor-pointer text-[16px] `}
                      key={navLink.id}
                    >
                      <Link 
                      onClick={()=>setToggle(!toggle)}
                        activeClass="active"
                        to={navLink.id}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                      >
                        {navLink.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

const navMobAnimation = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    y: 100,
    opacity: 0,
  },
};
