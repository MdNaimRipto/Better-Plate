import paper from "@/assets/paper.webp";
import Image from "next/image";

const PersonalizedMeals = () => {
  return (
    <div className="text-center flex flex-col gap-12 text-8xl font-semibold h-[1000px] text-white items-center justify-center backdrop-blur-[2px] relative uppercase tracking-tight overflow-hidden">
      <Image
        src={paper}
        alt="Paper Design"
        className=" w-full z-50 absolute -top-[80px] hidden md:block"
      />
      <p>Slammed Schedule?</p>
      <p>Personalized Meals.</p>
      <p>Ready to Eat</p>

      <Image
        src={paper}
        alt="Paper Design"
        className=" w-full z-50 absolute -bottom-[40px] 2xl:-bottom-[80px] hidden md:block"
      />
    </div>
  );
};

export default PersonalizedMeals;
