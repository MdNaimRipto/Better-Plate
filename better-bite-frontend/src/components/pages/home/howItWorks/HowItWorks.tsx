"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "@/assets/howItWorks/app.jpg";
import img2 from "@/assets/howItWorks/chef.jpg";
import img3 from "@/assets/howItWorks/leanna-myers-YB9VU4necQo-unsplash.jpg";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const HowItWorks = () => {
  const infos = [
    {
      img: img1,
      title: "Find your perfect plan",
      desc: "We personalise your menu around your lifestyle, goals and food preferences.",
    },
    {
      img: img2,
      title: "You choose, we cook",
      desc: "We prep, cook and portion your meals daily to match your goals.",
    },
    {
      img: img3,
      title: "Enjoy daily fresh deliveries",
      desc: "We deliver fresh meals every day. Just heat, eat and enjoy.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container py-16">
        <div className="flex flex-col items-center justify-center gap-3 mb-5">
          <h4 className="text-4xl font-semibold text-black">How it works</h4>
          <p className="text-black text-center">
            Hit your health goals effortlessly with 3 simple steps
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={false}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 0 },
            1024: { slidesPerView: 3, spaceBetween: 0 },
          }}
          speed={1500}
          className="w-full"
        >
          {infos.map((info, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="relative w-full xl:w-[400px] h-[350px] xl:h-[400px] overflow-hidden rounded-3xl">
                <span className="absolute w-[60px] h-[60px] flex items-center justify-center top-3 md:top-0 left-3 md:left-0 bg-white rounded-full z-50">
                  <span className="bg-primary text-white w-[80%] h-[80%] rounded-full flex items-center justify-center text-xl">
                    {i + 1}
                  </span>
                </span>
                <Image
                  src={info.img}
                  alt={info.title}
                  className="rounded-[36px] md:rounded-[50px] md:p-6 w-full h-full object-cover brightness-90 absolute z-0"
                />
              </div>
              <div className="text-center mt-6 max-w-[350px]">
                <h5 className="text-xl font-semibold text-black">
                  {info.title}
                </h5>
                <p className="text-black text-sm mt-2">{info.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Link href="/our-meals" className="flex justify-center mt-8">
          <button className="border border-primary text-primary cursor-pointer px-6 py-3 hover:text-white hover:bg-primary duration-300">
            Check our meals
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
