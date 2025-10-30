import Image from "next/image";
import Banner from "./banner/Banner";
import PerfectMealPlan from "./perfectMealPlan/PerfectMealPlan";
import bg from "@/assets/home-bg.jpg";
import PersonalizedMeals from "./personalizedMeals/PersonalizedMeals";

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
      <div className="bg-white h-screen"></div>
    </div>
  );
};

export default HomeMain;
