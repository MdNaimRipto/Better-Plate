import Banner from "./banner/Banner";
import PerfectMealPlan from "./perfectMealPlan/PerfectMealPlan";
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
