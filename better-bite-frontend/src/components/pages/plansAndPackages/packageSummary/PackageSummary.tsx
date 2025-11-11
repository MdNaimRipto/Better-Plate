"use client";
import bag from "@/assets/plans-and-packages/shopping-bag.png";
import Image from "next/image";
import PromoCode from "./PromoCode";
import { usePlans } from "../PlansProvider";
import { useUserContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { orderApis } from "@/redux/features/orderApis";
import { useState } from "react";
import {
  IApiErrorResponse,
  IApiSuccessResponse,
} from "@/types/apiResponseTypes";
import { toast } from "sonner";

const PackageSummary = () => {
  const { user } = useUserContext();
  const { planType, mealPerDay, daysOfWeek, totalDays, amount } = usePlans();
  const vat = Math.floor((amount * 10) / 100);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [placeOrder] = orderApis.usePlaceOrderMutation();
  const handlePayment = async () => {
    if (!user || user === undefined) {
      router.push("/auth/login");
      return;
    }

    const planCounter = (days: number) => {
      return totalDays === days;
    };

    const option = {
      data: {
        amount: amount + vat,
        currency: "bdt",
        email: user?.email,
        fullName: user?.userName,
        phoneNumber: user.contactNumber,
        location: "Dhaka, Bangladesh",
        packageInfo: {
          planType: planCounter(7)
            ? "Weekly"
            : planCounter(30)
            ? "Monthly"
            : planCounter(90)
            ? "3_Month"
            : "Monthly",
          mealPerDay: mealPerDay,
          daysOfWeek: daysOfWeek,
          totalDays: totalDays,
        },
      },
    };

    try {
      setIsLoading(true);

      const res: IApiSuccessResponse = await placeOrder(option).unwrap();
      if (res.success === true) {
        const paymentUrl = res.data;
        if (paymentUrl) {
          window.location.href = paymentUrl;
        } else {
          toast.error("Payment URL not found!");
        }
      }
    } catch (e) {
      console.log("error", e);
      const error = e as IApiErrorResponse;

      const errorMessage = error?.data?.message || "An unknown error occurred!";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[600px] flex flex-col items-center justify-center bg-lightGray/30 w-full sticky top-12 col-span-1 px-5 py-8 rounded-3xl">
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="w-3/4">
          <h6 className="text-xl md:text-2xl font-semibold md:leading-[32px] text-coal/90">
            Your package, your way
          </h6>
          <p className="pt-3 font-normal text-black text-xs md:text-sm md:leading-6 h-[70px]">
            {planType && planType + ", "}
            {mealPerDay.length > 0 && mealPerDay.length + " Meal,"} 1 Snack
            {daysOfWeek.length > 0 &&
              ", " + daysOfWeek.length + " days per week"}
            {totalDays && ", " + totalDays + " days total"}
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
            <span className="font-coal font-medium">{amount} BDT</span>
          </p>
          <p className="flex items-center justify-between text-sm">
            <span className="text-gray font-light">Delivery Charge</span>
            <span className="font-coal font-medium text-primary">Free</span>
          </p>
          <p className="flex items-center justify-between text-sm">
            <span className="text-gray font-light">VAT (10%)</span>
            <span className="font-coal font-medium">{vat} BDT</span>
          </p>
          <span className="block w-full h-[1px] bg-lightGray my-3"></span>
          <p className="flex items-center justify-between text-sm">
            <span className="text-coal font-medium">Total Price</span>
            <span className="font-coal font-medium">{amount + vat} BDT</span>
          </p>
          <button
            onClick={handlePayment}
            disabled={
              planType &&
              mealPerDay.length &&
              daysOfWeek.length &&
              amount &&
              totalDays
                ? false
                : true
            }
            className="py-3 mt-4 rounded-2xl w-full text-lg bg-primary disabled:bg-lightGray text-white disabled:text-gray/50 cursor-pointer disabled:cursor-not-allowed"
          >
            {isLoading ? "Subscribing..." : "Subscribe Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageSummary;
