import Image from "next/image";
import Banner from "./banner/Banner";
import PerfectMealPlan from "./perfectMealPlan/PerfectMealPlan";
import bg from "@/assets/home-bg.jpg";
import PersonalizedMeals from "./personalizedMeals/PersonalizedMeals";
import WhatMakesOurMenusSpecial from "./whatMakesOurMenusSpecial/WhatMakesOurMenusSpecial";
import SimpleAndDeliciousFood from "./simpleAndDeliciousFood/SimpleAndDeliciousFood";
import OurFlavorfulMenus from "./ourFlavorfulMenus/OurFlavorfulMenus";

const HomeMain = () => {
  return (
    <div className="relative">
      <div className="fixed left-0 top-0 w-full h-screen -z-50 overflow-hidden">
        <Image
          src={bg}
          alt="Banner-bg"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <Banner />
      <PerfectMealPlan />
      <PersonalizedMeals />
      <WhatMakesOurMenusSpecial />
      <SimpleAndDeliciousFood />
      <OurFlavorfulMenus />
      <div className="bg-white h-screen"></div>
    </div>
  );
};

export default HomeMain;
