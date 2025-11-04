"use client";
import { useState } from "react";

interface IPlans {
  title: "SAT" | "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI";
}

const SelectWeekDays = () => {
  const [selected, setSelected] = useState<Array<IPlans["title"]>>([
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
  ]);

  const plans: IPlans[] = [
    {
      title: "SUN",
    },
    {
      title: "MON",
    },
    {
      title: "TUE",
    },
    {
      title: "WED",
    },
    {
      title: "THU",
    },
    {
      title: "FRI",
    },
    {
      title: "SAT",
    },
  ];
  return (
    <div>
      <h5 className="text-xl md:text-3xl font-medium text-coal/90 mb-5">
        How many day a week are you eating?
      </h5>
      <div className="flex items-center gap-2 md:gap-4">
        {plans.map((plan, i) => (
          <button
            key={i}
            className={`w-[30px] h-[30px] md:w-[55px] md:h-[55px] rounded-full border-2 md:text-xl font-light ${
              selected.includes(plan.title)
                ? "border-primary bg-primary text-white"
                : "border-lightGray bg-white"
            } duration-300`}
            onClick={() =>
              setSelected(
                selected.includes(plan.title)
                  ? selected.filter((item) => item !== plan.title)
                  : [...selected, plan.title]
              )
            }
          >
            {plan.title.slice(0, 1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectWeekDays;
