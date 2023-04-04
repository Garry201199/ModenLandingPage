import React from "react";
import styles from "../styles";

const Button = () => {
  return (
    <button
      className={`px-4 py-3 w-fit  bg-gradient-to-tr from-cyan-400 to-cyan-200
         hover:bg-gradient-to-tr hover:from-cyan-600 hover:to-cyan-300  text-slate-900 font-semibold rounded-xl ${styles.trans}`}
    >
      Get Started
    </button>
  );
};

export default Button;
