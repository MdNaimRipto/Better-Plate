"use client";

import TranslatedText from "@/components/common/language/TranslatedText";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdNoMeals } from "react-icons/md";

const PlansLink = () => {
  const pathname = usePathname();

  return (
    <Link
      href={
        pathname.startsWith("/ban")
          ? "/ban/plansAndPackages"
          : "/en/plansAndPackages"
      }
    >
      <button className="text-primary border border-primary px-1 py-2 md:px-3 md:py- flex items-center gap-2">
        <MdNoMeals className="mr-1 md:mr-2 md:mt-1 text-lg md:text-3xl" />
        <span className="flex flex-col items-start">
          <span className="text-[7px] md:text-[10px] lg:text-sm font-normal whitespace-nowrap">
            <TranslatedText en="SUBSCRIBE & ENJOY" ban="اشترك واستمتع" />
          </span>
          <span className="text-[8px] whitespace-nowrap md:text-sm lg:text-xl font-medium normal-case">
            <TranslatedText en="Your Favorite Meals" ban="وجباتك المفضلة" />
          </span>
        </span>
      </button>
    </Link>
  );
};

export default PlansLink;
