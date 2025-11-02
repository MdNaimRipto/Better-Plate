import paper from "@/assets/paper.webp";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-white gap-7 h-[600px] md:h-screen w-full backdrop-blur-[2px] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-3 md:px-12 lg:px-0">
        <CommonLineDesign style="hidden md:flex" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-normal md:font-extralight text-white text-center inline-block">
          Taste Redefined
        </h1>
        <CommonLineDesign />
      </div>
      <p className="md:font-extralight text-sm md:text-lg">
        Smokin’ Up a Storm, One Bite at a Time
      </p>
      <button className="cursor-pointer border border-white px-5 py-3">
        View Full Menu
      </button>
      <Image
        src={paper}
        alt="Paper Design"
        className=" w-full z-50 absolute scale-[300%] md:scale-150 lg:scale-100 object-cover -bottom-[20px] xl:-bottom-[60px] 2xl:-bottom-[100px]"
      />
    </div>
  );
};

export default Banner;

const CommonLineDesign = ({ style }: { style?: string }) => {
  return (
    <span className={`scale-95 md:scale-100 flex flex-col gap-[8px] ${style}`}>
      <span className="block w-36 h-[1px] bg-white" />
      <span className="block w-36 h-[1px] bg-white" />
    </span>
  );
};
