"use client";

import { useState } from "react";
import { usePlans } from "../PlansProvider";

const SelectMealPerDay = () => {
  const { setMealPerDay } = usePlans();
  const [selected, setSelected] = useState<Array<number>>([]);

  const plans: string[] = ["Breakfast", "Lunch", "Dinner"];

  const toggleSelection = (index: number) => {
    let updatedSelected: number[];

    if (selected.includes(index)) {
      updatedSelected = selected.filter((item) => item !== index);
    } else {
      updatedSelected = [...selected, index];
    }

    setSelected(updatedSelected);

    // Update the mealPerDay array based on selected indexes
    const selectedMeals = plans.filter((_, i) => updatedSelected.includes(i));
    setMealPerDay(selectedMeals);
  };

  return (
    <div>
      <h5 className="text-xl md:text-3xl font-medium text-coal/90 mb-5">
        How many meals per day?
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((plan, i) => (
          <button
            key={i}
            className={`rounded-2xl p-6 text-start border-2 ${
              selected.includes(i)
                ? "border-primary bg-primary/5"
                : "border-lightGray bg-white"
            } duration-300`}
            onClick={() => toggleSelection(i)}
          >
            <div className="flex items-center justify-between gap-6">
              <h6 className="text-base font-medium text-coal">{plan}</h6>
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-md border-2 transition-colors duration-300 ${
                  selected.includes(i)
                    ? "border-primary bg-primary"
                    : "border-lightGray bg-white"
                }`}
              >
                {selected.includes(i) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>
          </button>
        ))}
        <button
          className={`rounded-2xl p-6 text-start border-2 border-primary bg-primary/5 disabled:opacity-45`}
          disabled
        >
          <div className="flex items-center justify-between gap-6">
            <h6 className="text-base font-medium text-coal">Snacks</h6>
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-md border-2 border-primary bg-primary`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SelectMealPerDay;
