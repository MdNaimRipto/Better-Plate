"use client";
import { useState } from "react";
import { usePlans } from "../PlansProvider";

interface IPlans {
  title: "Weekly" | "Monthly" | "3_Month";
  popular: boolean;
  perPrice: number;
  perDayCost: number;
}

const PaymentSelection = () => {
  const { setAmount, setTotalDays } = usePlans();

  const [selected, setSelected] = useState<IPlans["title"]>("Monthly");

  const plans: IPlans[] = [
    {
      title: "Weekly",
      popular: false,
      perPrice: 1499, // total price for a week
      perDayCost: 214, // per day average
    },
    {
      title: "Monthly",
      popular: true,
      perPrice: 4999,
      perDayCost: 166,
    },
    {
      title: "3_Month",
      popular: false,
      perPrice: 13999,
      perDayCost: 155,
    },
  ];

  const handleSelect = (title: IPlans["title"], perPrice: number) => {
    setSelected(title);
    setAmount(perPrice);
    const totalDays =
      title === "Weekly"
        ? 7
        : title === "Monthly"
        ? 30
        : title === "3_Month"
        ? 90
        : 30;
    setTotalDays(totalDays);
  };

  return (
    <div className="w-full md:w-3/4">
      <h5 className="text-xl md:text-3xl font-medium text-coal/90 mb-5">
        Select Your Payment Plan
      </h5>

      <div className="grid grid-cols-1 gap-4">
        {plans.map((plan) => (
          <button
            key={plan.title}
            className={`rounded-2xl p-6 text-start border-2 transition-all duration-300 ${
              selected === plan.title
                ? "border-primary bg-primary/5"
                : "border-lightGray bg-white"
            }`}
            onClick={() => handleSelect(plan.title, plan.perPrice)}
          >
            <div className="flex items-center justify-between gap-6">
              <div>
                <h6 className="text-base font-semibold text-coal">
                  {plan.title.replace("_", " ")}
                  {plan.popular && (
                    <span className="ml-2 inline-block mt-2 text-xs text-white bg-primary px-2 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                </h6>
                <p className="text-xs text-gray/90 mt-1">
                  {plan.perPrice} BDT total • {plan.perDayCost} BDT/day
                </p>
              </div>

              {/* Radio indicator */}
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                  selected === plan.title
                    ? "border-primary bg-primary"
                    : "border-lightGray bg-white"
                }`}
              >
                {selected === plan.title && (
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentSelection;
