import banner from "@/assets/simpleAndDeliciousFood/banner.webp";
import paper from "@/assets/Common/paper-design.webp";
import Image from "next/image";

const SimpleAndDeliciousFood = () => {
  return (
    <div className="relative h-[360px] md:h-[600px] xl:h-[800px] overflow-hidden">
      <Image
        src={banner}
        alt="Discount Banner"
        className="w-full h-full object-cover absolute top-0 left-0 -z-20 brightness-90"
      />
      <div className="container flex items-center justify-center h-full text-center">
        <div>
          <p className="text-base md:text-xl font-semibold text-black mb-3 md:mb-5">
            Enjoy Great Recipe
          </p>
          <h2 className="font-semibold text-xl md:text-[40px] lg:text-5xl xl:text-6xl mb-3 md:mb-6 text-primary">
            Simple And Delicious Food
          </h2>
          <h4 className="text-lg md:text-4xl font-semibold text-black mb-3 md:mb-5">
            Flat 20% Discount
          </h4>
          <button className="bg-primary text-white px-4 py-[10px] text-lg font-semibold md:mt-3 hover:bg-secondary duration-300 scale-75 md:scale-100">
            View Plans and Packages
          </button>
        </div>
      </div>
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

export default SimpleAndDeliciousFood;
