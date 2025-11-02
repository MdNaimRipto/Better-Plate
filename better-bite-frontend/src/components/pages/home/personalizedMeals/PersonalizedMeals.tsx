import paper from "@/assets/paper.webp";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({});

const PersonalizedMeals = () => {
  return (
    <div
      className={`text-center flex flex-col gap-2 md:gap-4 lg:gap-8 xl:gap-12 text-2xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold h-[300px] md:h-[600px] lg:h-[800px] 2xl:h-[1000px] text-white items-center justify-center backdrop-blur-[2px] relative uppercase tracking-tight overflow-hidden ${inter.className}`}
    >
      <p>Slammed Schedule?</p>
      <p>Personalized Meals.</p>
      <p>Ready to Eat</p>
      <Image
        src={paper}
        alt="Paper Design"
        className="w-full z-50 scale-150 lg:scale-100 absolute -top-[10px] lg:-top-[20px] xl:-top-[40px] 2xl:-top-[80px]"
      />
      <Image
        src={paper}
        alt="Paper Design"
        className="w-full z-50 scale-150 xl:scale-100 absolute -bottom-[10px] lg:-bottom-[20px] xl:-bottom-[40px] 2xl:-bottom-[80px]"
      />
    </div>
  );
};

export default PersonalizedMeals;
