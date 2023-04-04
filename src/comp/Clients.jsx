import React from "react";
import { clients } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Clients.css";
import { Autoplay, Pagination, Navigation } from "swiper";
const Clients = () => {
  return (
    <section id="clients"
      className={` relative sm:py-8 py-6 flex w-full justify-evenly items-center  gap-y-6 `}
    >
      <div className="
      w-[100%] absolute h-[80%] z-[0]
       bg-black/80 blur-3xl top-0 rounded-full right-0  "></div>
      
      {/* small devices running swiper */}
      <div className="sm:hidden  z-[1] block w-full">
        <Swiper
        className="clientsSwiper"
        rewind={false}
        slidesPerGroup={1}
        centeredSlides={false}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
          reverseDirection: false,
          waitForTransition: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <div className="flex  items-center justify-center ">
          {clients &&
            clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="w-[200px] px-3 flex  self-center h-full   ">
                  <img
                    className="object-cover mx-auto w-[100%]"
                    src={client.logo}
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
      </div>
      
      {/* big devices just flex */}

      {clients &&
        clients.map((client) => (
          <div
            key={client.id}
            className="w-[200px] z-[1] cursor-pointer self-center px-3 sm:block hidden"
          >
            <img
              className="object-cover mx-auto w-[100%]"
              src={client.logo}
              alt="logo"
            />
          </div>
        ))}
    </section>
  );
};

export default Clients;
