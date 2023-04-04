import React from "react";
import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../utils/data";

const Footer = () => {
  const dateYr = new Date().getFullYear();
  return (
    <section
      className={`${styles.paddingY} text-white flex   w-full flex-col  gap-y-6`}
    >
      <div className="flex flex-1 md:flex-row flex-wrap gap-y-8 justify-evenly">
        <div className="flex flex-1  flex-col  gap-y-4 md:gap-y-8">
          <img
            src={logo}
            className="object-contain w-[300px] h-fit "
            alt="logo"
          />
          <p className="sm:text-[1.2rem] w-full sm:w-[60%] text-start text-white/80">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex  sm:flex-[1.5]  justify-evenly flex-start w-full px-6 gap-y-6 
        md:flex-row md:flex-wrap sm:flex-col flex-wrap  ">
          {footerLinks &&
            footerLinks.map((footerTopic) => (
              <div key={footerTopic.title} className="flex min-w-[250px] flex-col gap-y-2">
                <h1 className="text-[1.2rem] mb-2">{footerTopic.title}</h1>
                {footerTopic.links.map((footerSubTopic) => (
                  <p
                    key={footerSubTopic.name}
                    className="text-[1rem] text-white/70 hover:text-cyan-100 "
                  >
                    <a href={footerSubTopic.link} target="_blank">
                      {footerSubTopic.name}
                    </a>
                  </p>
                ))}
              </div>
            ))}
        </div>
      </div>
      {/* divider */}
      <div className="w-[100%] h-[2px] bg-gradient-to-r rounded-fulll from-red-500 via-amber-400 to-cyan-400  "></div>
      {/* copyright content */}
      <div
        className={`flex flex-1 flex-col md:flex-row gap-y-4 items-center justify-between ${styles.paddingX} md:py-2`}
      >
        <div className="md:text-lg text-white/80">
          Copyright © {dateYr} HooBank. All Rights Reserved.
        </div>
        <div className="flex items-center justify-center gap-x-4">
          {socialMedia &&
            socialMedia.map((media) => (
              <a key={media.id} href={media.link}>
                <img
                  className="w-[25px] h-[25px] object-contain "
                  src={media.icon}
                  alt={media.icon}
                />
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
