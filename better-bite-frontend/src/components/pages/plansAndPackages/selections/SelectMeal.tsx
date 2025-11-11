"use client";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useState } from "react";
import { usePlans } from "../PlansProvider";

interface IPlans {
  title: string;
  description: string;
  image: string;
}

const SelectMeal = () => {
  const { setPlanType } = usePlans();

  const [selected, setSelected] = useState(0);

  const plans: IPlans[] = [
    {
      title: "Balanced",
      description: "Provides the nutrients your body\nneeds to thrive",
      image: "⚖️",
    },
    {
      title: "Chef's Picks",
      description: "Dishes crafted for your cravings,\nnot your fitness goals",
      image: "🧑‍🍳",
    },
    {
      title: "High Protein",
      description: "Boosts muscle strength and\nvitality with lean proteins",
      image: "🍖",
    },
    {
      title: "Low Carbs",
      description:
        "Low in carbs, but high in healthy\nfats, and non-starchy veggies",
      image: "🥑",
    },
    {
      title: "Vegetarian",
      description: "Plant-based dishes with veggies\n& grains",
      image: "🥦",
    },
    {
      title: "Custom Macros",
      description: "Designed for athletes and fitness\nfocused individuals",
      image: "🏋️",
    },
  ];
  return (
    <div>
      <h5 className="text-xl md:text-3xl font-medium text-coal/90 mb-5">
        What kind of meals do you prefer?
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((plan, i) => (
          <button
            key={i}
            className={`rounded-3xl p-6 text-start border-2 ${
              selected === i + 1
                ? "border-primary bg-primary/5"
                : "border-lightGray bg-white"
            } duration-300`}
            onClick={() => {
              setSelected(i + 1);
              setPlanType(plan.title);
            }}
          >
            <div className="flex items-center gap-6">
              <div className="w-4/5">
                <h6 className="text-base font-medium text-coal mb-2">
                  {plan.title}
                </h6>
                <p className="text-sm font-light text-gray whitespace-pre-line">
                  {plan.description}
                </p>
              </div>
              <span className="text-5xl">{plan.image}</span>
            </div>
            <div className="flex items-center justify-end">
              <span
                className={`px-4 py-2 mt-5 rounded-full text-sm flex items-center gap-1 ${
                  selected === i + 1
                    ? "text-white bg-primary"
                    : "text-primary bg-primary/10"
                }`}
              >
                {selected === i + 1 && <IoIosCheckmarkCircle />}
                Select Plan
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectMeal;
