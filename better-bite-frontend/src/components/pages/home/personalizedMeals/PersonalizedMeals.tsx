import paper from "@/assets/paper.webp";
import Image from "next/image";
import font from "next/font/local";

const customFont = font({
  src: "../../../../assets/font/TANSONGBIRD.ttf",
  style: "normal",
  display: "swap",
});

const PersonalizedMeals = () => {
  return (
    <div
      className={`text-center flex flex-col gap-3 md:gap-4 lg:gap-8 xl:gap-12 2xl:gap-14 text-sm md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold h-[280px] md:h-[600px] lg:h-[600px] xl:h-[800px] 2xl:h-[900px] text-white items-center justify-center backdrop-blur-[2px] relative uppercase tracking-wider overflow-hidden ${customFont.className}`}
    >
      <p>Slammed Schedule?</p>
      <p>
        <span className="text-secondary">Personalized</span> Meals.
      </p>
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
