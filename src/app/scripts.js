"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Removed Pagination
import "swiper/css";
import Image from "next/image";
import Events from "./events";
import react from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function SwiperComponent1() {
  const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) return null;
  return (
    
    <Swiper
      modules={[Autoplay]} // Removed Pagination
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="w-[90vw]"
    >
      <SwiperSlide className="py-[5px]">
            <Events image="/file.png" date="April 12 2025" description="AI in Practice"/>
      </SwiperSlide>
      <SwiperSlide className="py-[5px]">
        <Events image="/file1.png" date="May 15 2025" description="AI Skills Fest"/>
      </SwiperSlide>
      <SwiperSlide className="py-[5px]">
        <Events image="/file2.png" date="June 2 2025" description="AI Meets GitHub"/>
      </SwiperSlide>
      <SwiperSlide className="py-[5px]">
        <Events image="/file4.png" date="August 6 2025" description="Modernize Java"/>
      </SwiperSlide>
      <SwiperSlide className="py-[5px]">
        <Events image="/file3.png" date="July 17 2025" description="Azue Developer"/>
      </SwiperSlide>
      <SwiperSlide className="py-[5px]">
        <Events image="/file6.png" date="October 19 2025" description="Future of AI"/>
      </SwiperSlide>
    </Swiper>
  );
}
