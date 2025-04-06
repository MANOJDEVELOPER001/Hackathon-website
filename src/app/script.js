"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Removed Pagination
import "swiper/css";
import Image from "next/image";

export default function SwiperComponent() {
  return (
    <Swiper
      modules={[Autoplay]} // Removed Pagination
      slidesPerView={3}
      spaceBetween={22}
      loop={true}
      autoplay={{ delay: 2000 }}
      className="w-[540px] h-[370px]"
    >
      <SwiperSlide>
        <Image src="/hackathon1.jpeg" alt="sample-img-1" fill className="object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/hackathon2.avif" alt="sample-img-2" fill className="object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/hackathon3.jpg" alt="sample-img-3" fill className="object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/hackathon4.jpeg" alt="sample-img-4" fill className="object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/hackathon5.webp" alt="sample-img-5" fill className="object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
