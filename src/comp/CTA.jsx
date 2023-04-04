import React from "react";
import styles from "../styles";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`md:py-10 z-[2] sm:py-6 py-4 flex flex-col gap-y-6 sm:flex-row sm:mx-6 sm:px-12 px-6 items-center justify-center rounded-3xl
      bg-gradient-to-tr  from-slate-900/60 to-slate-800/80 `}
    >
      <div className="flex flex-1 gap-y-2 flex-col">
        <p className='md:text-[3.5rem] sm:text-[2.5rem] text-[2rem] leading-normal sm:leading-tight font-bold'>
          Let’s try our service now!
        </p>
        <p className="sm:text-[1.2rem] w-full sm:w-[80%] text-start text-white/80">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex  items-end justify-end w-fit">
        <Button/>
      </div>
    </section>
  );
};

export default CTA;
