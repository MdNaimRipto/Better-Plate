import Image from "next/image";
import specialImg from "@/assets/img-1.webp";
import specialImgBg from "@/assets/specialImage.webp";
import icon_7 from "@/assets/icons/icon-7.png";
import icon_8 from "@/assets/icons/icon-8.png";
import icon_9 from "@/assets/icons/icon-9.webp";
import icon_10 from "@/assets/icons/icon-10.png";

const WhatMakesOurMenusSpecial = () => {
  const specialMenus = [
    {
      title: "Pure Ingredients",
      description:
        "Vestibulum morbi blandit cursus risus at ultrices mi. Facilisis gravida neque convallis a.",
      image: icon_7,
    },
    {
      title: "Sustainability",
      description:
        "Laculis eu non diam phasellus. Dictum non consectetur a erat nam at. Quam adipiscing vitae proin sagittis.",
      image: icon_8,
    },
    {
      title: "Environmentalism",
      description:
        "Bibendum est ultricies integer quis auctor elit sed. Accumsan tortor posuere ac ut consequat semper.",
      image: icon_9,
    },
    {
      title: "Formula Transparency",
      description:
        "Facilisi nullam vehicula ipsum a. Ornare massa eget egestas purus viverra accumsan in nisl nisi.",
      image: icon_10,
    },
  ];
  return (
    <div
      className="relative bg-white overflow-hidden"
      // style={{
      //   backgroundImage: `url(${specialImgBg.src})`,
      //   backgroundRepeat: "repeat",
      //   backgroundSize: "cover",
      //   position: "relative",
      // }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-center w-full items-center gap-16  lg:h-[870px]">
          <Image
            src={specialImgBg}
            alt="Special Menus Banner"
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
          />
          <Image className="xl:w-[40%]" src={specialImg} alt="specialImg" />

          <div>
            <h2 className="font-bold text-[2rem] mb-6 text-black">
              What Makes Our Menus Special ?
            </h2>
            {/* Right menus */}
            <div className="text-left space-y-14 order-2 md:order-none lg:w-[520px]">
              {specialMenus.map((cuisine, index) => (
                <div key={index} className="flex items-center gap-5 ">
                  <Image
                    className=" w-[80px] h-[80px]"
                    src={cuisine.image}
                    alt=""
                  />
                  <div>
                    <a href="" className="text-xl font-bold text-primary">
                      {cuisine.title}
                    </a>
                    <p className="mt-2.5 text-base text-gray">
                      {cuisine.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesOurMenusSpecial;
