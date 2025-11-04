import PackageSummary from "./packageSummary/PackageSummary";
import PaymentSelection from "./selections/PaymentSelection";
import SelectMeal from "./selections/SelectMeal";
import SelectMealPerDay from "./selections/SelectMealPerDay";
import SelectWeekDays from "./selections/SelectWeekDays";

const PlansMain = () => {
  return (
    <div className="min-h-screen container mt-[80px] py-16">
      <h3 className="text-coal font-bold tracking-wide text-2xl md:leading-[55px] md:text-5xl">
        Customize Your <br />
        Perfect Meal Plan
      </h3>

      <div className="mt-16 min-h-screen">
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-4 h-full">
          <div className="h-full w-full col-span-2 flex flex-col gap-12 pr-0 xl:pr-16">
            <SelectMeal />
            <SelectMealPerDay />
            <SelectWeekDays />
            <PaymentSelection />
          </div>
          <PackageSummary />
        </div>
      </div>
    </div>
  );
};

export default PlansMain;
