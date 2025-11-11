"use client";
import { useState } from "react";
import { usePlans } from "../PlansProvider"; // import context hook

interface IPlans {
  title: "SAT" | "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI";
}

const SelectWeekDays = () => {
  const { setDaysOfWeek } = usePlans();
  const [selected, setSelected] = useState<Array<IPlans["title"]>>([
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
  ]);

  const plans: IPlans[] = [
    { title: "SUN" },
    { title: "MON" },
    { title: "TUE" },
    { title: "WED" },
    { title: "THU" },
    { title: "FRI" },
    { title: "SAT" },
  ];

  const toggleDay = (day: IPlans["title"]) => {
    const updated = selected.includes(day)
      ? selected.filter((d) => d !== day)
      : [...selected, day];

    setSelected(updated);
    setDaysOfWeek(updated); // update context
  };

  return (
    <div>
      <h5 className="text-xl md:text-3xl font-medium text-coal/90 mb-5">
        How many days a week are you eating?
      </h5>
      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
        {plans.map((plan) => (
          <button
            key={plan.title}
            className={`w-[30px] h-[30px] md:w-[55px] md:h-[55px] rounded-full border-2 md:text-xl font-light transition-colors duration-300 ${
              selected.includes(plan.title)
                ? "border-primary bg-primary text-white"
                : "border-lightGray bg-white"
            }`}
            onClick={() => toggleDay(plan.title)}
          >
            {plan.title.slice(0, 1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectWeekDays;
