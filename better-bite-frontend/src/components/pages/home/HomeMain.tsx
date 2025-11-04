import Image from "next/image";
import Banner from "./banner/Banner";
import PerfectMealPlan from "./perfectMealPlan/PerfectMealPlan";
import bg1 from "@/assets/banner/banner-1.jpg";
import bg2 from "@/assets/banner/banner-2.jpg";
import bg3 from "@/assets/banner/banner-3.jpg";
import PersonalizedMeals from "./personalizedMeals/PersonalizedMeals";
import WhatMakesOurMenusSpecial from "./whatMakesOurMenusSpecial/WhatMakesOurMenusSpecial";
import SimpleAndDeliciousFood from "./simpleAndDeliciousFood/SimpleAndDeliciousFood";
import OurFlavorfulMenus from "./ourFlavorfulMenus/OurFlavorfulMenus";
import HowItWorks from "./howItWorks/HowItWorks";
import Reviews from "./reviews/Reviews";
import BackgroundSlider from "./BackgroundSlider";

const HomeMain = () => {
  return (
    <div className="relative">
      {/* <div className="fixed left-0 top-0 w-screen h-screen -z-50 overflow-hidden">
        <Image
          src={bg1}
          alt="Banner-bg"
          className="w-full h-full object-cover brightness-50"
          priority
        />
      </div> */}
      <BackgroundSlider />
      <Banner />
      <PerfectMealPlan />
      <PersonalizedMeals />
      <HowItWorks />
      <SimpleAndDeliciousFood />
      <WhatMakesOurMenusSpecial />
      <Reviews />
      <OurFlavorfulMenus />
    </div>
  );
};

export default HomeMain;
