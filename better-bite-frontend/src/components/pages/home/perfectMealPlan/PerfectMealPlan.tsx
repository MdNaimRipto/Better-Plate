import cuisinesImage from "@/assets/perfectMealPlan/middle-img.webp";
import Image from "next/image";
import paper from "@/assets/paper.webp";

const PerfectMealPlan = () => {
  interface IPlans {
    title: string;
    description: string;
    image: string;
  }

  const plans: IPlans[] = [
    {
      title: "High Protein",
      description:
        "Power-packed meals loaded with protein to build strength and support recovery.",
      image: "🍖",
    },
    {
      title: "Balanced",
      description:
        "Smartly balanced dishes combining protein, carbs, and fats for steady energy.",
      image: "⚖️",
    },
    {
      title: "Vegetarian",
      description:
        "Wholesome, plant-based meals rich in fiber, flavor, and essential nutrients.",
      image: "🥦",
    },
    {
      title: "Chef's Picks",
      description:
        "Exclusive creations from our chefs, crafted for taste and complete nutrition.",
      image: "🧑‍🍳",
    },
    {
      title: "Low Carbs",
      description:
        "Delicious, low-carb recipes to fuel your goals without excess calories.",
      image: "🥑",
    },
    {
      title: "Custom Macros",
      description:
        "Meals customized to your macros, helping you stay precise and consistent.",
      image: "🏋️",
    },
  ];

  return (
    <>
      <div className="relative bg-white">
        <div className="container py-24">
          {/* headlines */}
          <div className="text-center">
            <h2 className="font-bold text-[2rem] mb-4 text-black">
              Find Your Perfect Meal Plan
            </h2>
            <h6 className="mb-6 text-lg font-bold text-black">
              Incredibly Tasty Healthy Meals
            </h6>
          </div>

          <div className="flex lg:flex-row md:flex-row-reverse flex-wrap justify-between items-center gap-4">
            {/* left menus */}
            <div className=" md:text-right space-y-10 lg:w-[33%] w-full md:w-1/2 order-1 md:order-none">
              {plans.slice(0, 3).map((cuisine, index) => (
                <div
                  key={index}
                  className="md:flex-row flex-row-reverse flex gap-5 "
                >
                  <div>
                    <a href="" className="text-xl font-bold text-primary">
                      {cuisine.title}
                    </a>
                    <p className="mt-2.5 text-base text-gray">
                      {cuisine.description}
                    </p>
                  </div>
                  <span className="text-4xl w-[50px] h-[50px] block mt-2">
                    {cuisine.image}
                  </span>
                  {/* <Image
                    className=" w-[50px] h-[50px]"
                    src={cuisine.image}
                    alt=""
                  /> */}
                </div>
              ))}
            </div>

            {/* center image */}
            <div className="flex justify-center lg:w-[24%]">
              <Image src={cuisinesImage} alt="cuisinesImage" />
            </div>

            {/* Right menus */}
            <div className="text-left space-y-10 lg:w-[33%] w-full order-2 md:order-none">
              {plans.slice(3, 6).map((cuisine, index) => (
                <div key={index} className="flex gap-5 ">
                  {/* <Image
                    className=" w-[50px] h-[50px]"
                    src={cuisine.image}
                    alt=""
                  /> */}
                  <span className="text-4xl w-[50px] h-[50px] block mt-2">
                    {cuisine.image}
                  </span>
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
    </>
  );
};

export default PerfectMealPlan;
