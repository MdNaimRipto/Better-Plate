import paper from "@/assets/paper.webp";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-white gap-7 h-screen w-full backdrop-blur-[2px]">
      <div className="flex items-center justify-center w-full gap-3">
        <CommonLineDesign />
        <h1 className="text-8xl font-extralight text-white">Taste Redefined</h1>
        <CommonLineDesign />
      </div>
      <p className="font-extralight text-lg">
        Smokin’ Up a Storm, One Bite at a Time
      </p>
      <button className="cursor-pointer border border-white px-5 py-3">
        View Full Menu
      </button>
      <Image
        src={paper}
        alt="Paper Design"
        className=" w-full z-50 absolute -bottom-[100px] hidden md:block"
      />
    </div>
  );
};

export default Banner;

const CommonLineDesign = () => {
  return (
    <span className="flex flex-col gap-[8px]">
      <span className="block w-36 h-[1px] bg-white" />
      <span className="block w-36 h-[1px] bg-white" />
    </span>
  );
};
