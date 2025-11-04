"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import bg1 from "@/assets/banner/banner-1.jpg";
import bg2 from "@/assets/banner/banner-2.jpg";
import bg3 from "@/assets/banner/banner-3.jpg";

const BackgroundSlider = () => {
  const images = [bg1, bg2, bg3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5s per image
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 w-screen h-screen -z-50 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`w-full h-full transition-transform duration-[5000ms] ease-out ${
              index === currentIndex ? "scale-110" : "scale-100"
            }`}
          >
            <Image
              src={img}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover brightness-50"
              priority={index === 0}
              placeholder="blur"
            />
          </div>
        </div>
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute w-full h-full -z-20 brightness-50 bg-black/50 top-0 left-0" />
    </div>
  );
};

export default BackgroundSlider;
