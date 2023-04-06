import { useEffect, useState } from "react";
import {
  Billing,
  Buisness,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./comp";
import styles from "./styles";
import { Link } from "react-scroll";
import { AnimatePresence,  motion } from "framer-motion";

function App() {
  const [showScrolltoTopBtn, setShowScrolltoTopBtn] = useState(false);
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    const handleScollBtnVisibility = () => {
      window.scrollY > 500
        ? setShowScrolltoTopBtn(true)
        : setShowScrolltoTopBtn(false);
    };
    window.addEventListener("scroll", handleScollBtnVisibility);
    return () => {
      window.removeEventListener("scroll", handleScollBtnVisibility);
    };
  }, []);

  return (
    
      <div layoutId="main-layout"  className="bg-[#00040f] font-raleway overflow-hidden text-white w-full ">
      

      
      <AnimatePresence>
        {showScrolltoTopBtn && (
          <motion.div
            key={"btn"}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            variants={scrollBtnVariants}
            className="fixed bottom-5 sm:w-[70px] sm:h-[70px] w-fit h-fit right-3 z-[5] rounded-full "
          >
            <Link
              activeClass="active"
              to={"top"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button
                className="w-fit h-fit p-3 rounded-full
            backdrop-blur-xl 
           from-cyan-400/80 bg-gradient-to-bl to-cyan-700/80  
           decoration-purple-400 cursor-pointer "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="sm:w-8 h-6 sm:h-8 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                  />
                </svg>
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="top" className={`${styles.flexCenter}  ${styles.paddingX} `}>
        <div className={`${styles.boxwidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}   `}>
        <div className={`${styles.boxwidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX}   ${styles.flexStart}  `}>
        <div className={`${styles.boxwidth}`}>
          <Stats />
          <Buisness />
          <CardDeal />
          <Billing />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
   
  );
}

export default App;

const scrollBtnVariants = {
  initial: {
    y: 100,
    opacity: 0,
    rotate: 90,
  },
  animate: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    rotate: 180,
    y: 100,
    opacity: 0,
  },
};
