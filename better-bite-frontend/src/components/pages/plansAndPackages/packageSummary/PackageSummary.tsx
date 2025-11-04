import bag from "@/assets/plans-and-packages/shopping-bag.png";
import Image from "next/image";
import PromoCode from "./PromoCode";

const PackageSummary = () => {
  return (
    <div className="h-[600px] flex flex-col items-center justify-center bg-lightGray/30 w-full sticky top-12 col-span-1 px-5 py-8 rounded-3xl">
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="w-3/4">
          <h6 className="text-xl md:text-2xl font-semibold md:leading-[32px] text-coal/90">
            Your package, your way
          </h6>
          <p className="pt-3 font-normal text-black text-xs md:text-base">
            High Protein, 1 Meal, 1 Snack,
            <br /> 5 days per week
          </p>
        </div>
        <div className="w-1/4 h-[100px] flex items-center justify-center">
          <Image
            src={bag}
            alt="Bag Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <PromoCode />
      <div className="w-full">
        <h6 className="text-coal/90 md:text-xl font-medium mb-5">
          Payment Summary
        </h6>
        <div className="flex flex-col gap-3">
          <p className="flex items-center justify-between text-sm">
            <span className="text-gray font-light">Plan Price</span>
            <span className="font-coal font-medium">1200 BDT</span>
          </p>
          <p className="flex items-center justify-between text-sm">
            <span className="text-gray font-light">Delivery Charge</span>
            <span className="font-coal font-medium text-primary">Free</span>
          </p>
          <p className="flex items-center justify-between text-sm">
            <span className="text-gray font-light">VAT (10%)</span>
            <span className="font-coal font-medium">120 BDT</span>
          </p>
          <span className="block w-full h-[1px] bg-lightGray my-3"></span>
          <p className="flex items-center justify-between text-sm">
            <span className="text-coal font-medium">Total Price</span>
            <span className="font-coal font-medium">1320 BDT</span>
          </p>
          <button className="py-3 mt-4 rounded-2xl w-full text-lg bg-primary text-white cursor-pointer">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageSummary;
