import banner from "@/assets/simpleAndDeliciousFood/banner.webp";
import paper from "@/assets/Common/paper-design.webp";
import Image from "next/image";

const SimpleAndDeliciousFood = () => {
  return (
    <div
      className="relative h-[600px] py-32"
      style={{
        backgroundImage: `linear-gradient(#00000010, #00000010), url(${banner.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex items-center justify-center h-full text-center">
        <div>
          <p className="text-xl font-semibold text-black mb-5">
            Enjoy Great Recipe
          </p>
          <h2 className="font-semibold text-[40px] lg:text-5xl xl:text-6xl mb-6 text-primary">
            Simple And Delicious Food
          </h2>
          <h4 className="text-4xl lg:font-semibold text-black mb-5">
            Flat 20% Discount
          </h4>
          <button className="bg-primary text-white px-4 py-[10px] text-lg font-semibold mt-3 hover:bg-secondary duration-300">
            View Plans and Packages
          </button>
        </div>
      </div>
      <Image
        src={paper}
        alt="Paper Design"
        className=" w-full z-50 absolute -top-[40px] hidden md:block"
      />
      <Image
        src={paper}
        alt="Paper Design"
        className=" w-full z-50 absolute -bottom-[40px] hidden md:block"
      />
    </div>
  );
};

export default SimpleAndDeliciousFood;
