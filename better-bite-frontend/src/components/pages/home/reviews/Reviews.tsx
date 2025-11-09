"use client";
import Image from "next/image";
import paper from "@/assets/Common/paper-design.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import bg1 from "@/assets/banner/banner-3.jpg";

const Reviews = () => {
  const reviews = [
    {
      text: "The food was absolutely amazing and full of flavor. Every bite felt fresh and thoughtfully prepared.",
      name: "Marta Williams",
      role: "FOUNDER",
    },
    {
      text: "A wonderful dining experience with great attention to detail. The team truly knows how to impress guests.",
      name: "John Smith",
      role: "CHEF",
    },
    {
      text: "Service was quick and friendly, and the meals were beyond expectations. Definitely coming back again.",
      name: "Emily Davis",
      role: "CUSTOMER",
    },
    {
      text: "Beautiful presentation and rich taste in every dish. It’s rare to find such consistency and care.",
      name: "Sarah Johnson",
      role: "MANAGER",
    },
    {
      text: "From the first order to the last bite, everything was spot on. The quality is simply outstanding.",
      name: "David Brown",
      role: "OWNER",
    },
    {
      text: "Each dish was crafted perfectly and served warm. You can feel the passion behind every plate.",
      name: "Sophia Lee",
      role: "DESIGNER",
    },
  ];

  return (
    <div className="relative overflow-hidden backdrop-blur-[2px]">
      {/* <div className="absolute left-0 top-0 w-screen h-screen -z-50 overflow-hidden">
        <Image
          src={bg1}
          alt="Banner-bg"
          className="w-full h-full object-cover brightness-50"
          priority
        />
      </div> */}
      <div className="container flex flex-col items-center justify-center h-[800px] md:h-[900px] xl:h-[1000px] gap-12">
        {/* Header */}
        <div className="flex flex-col gap-6 items-center justify-center text-white">
          <h6 className="uppercase text-xs font-extralight tracking-widest">
            Tasty And Crunchy
          </h6>
          <h2 className="text-3xl md:text-5xl font-medium tracking-wide">
            What People Say
          </h2>
          <p className="text-[10px] md:text-sm max-w-[600px] text-center leading-6 font-light">
            Each review tells a story of flavor, care, and connection. We’re
            grateful to everyone who shares their experience and helps us grow
            every day.
          </p>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          speed={1500}
          className="w-full z-50"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i} className="pb-20">
              <div className="bg-white w-full h-[300px] xl:h-[380px] flex flex-col gap-8 items-center justify-center p-6 xl:p-10">
                <p className="leading-6 xl:leading-6 text-xs xl:text-sm text-center text-black">
                  “{review.text}”
                </p>
                <span className="block w-full h-[.6px] bg-gray/20"></span>
                <div className="flex items-center gap-2">
                  <div className="w-14 h-14 rounded-full border border-gray/30 flex items-center justify-center">
                    <div className="w-[90%] h-[90%] bg-gray/30 rounded-full"></div>
                  </div>
                  <div className="flex flex-col gap-3 text-sm">
                    <p>{review.name}</p>
                    <p className="text-gray/60 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Paper decorations */}
      <Image
        src={paper}
        alt="Paper Design"
        className="w-full z-50 scale-150 xl:scale-100 absolute -top-[10px] lg:-top-[20px] xl:-top-[40px] 2xl:-top-[80px]"
      />
      <Image
        src={paper}
        alt="Paper Design"
        className="w-full z-50 scale-150 xl:scale-100 absolute -bottom-[10px] lg:-bottom-[20px] xl:-bottom-[40px] 2xl:-bottom-[80px]"
      />
    </div>
  );
};

export default Reviews;
