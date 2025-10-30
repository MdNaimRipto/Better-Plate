import React from "react";
import ResponsiveMenuHandlerButton from "./ResponsiveMenuHandlerButton";
// import { useUserContext } from "@/context/AuthContext";
import ProfileAndDashboardDropDown from "./ProfileAndDashboardDropDown";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavSideOptions = ({
  isNavOpen,
  setIsNavOpen,
  isScrolled,
  isHomePage,
  togglerRef,
}: {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isScrolled: boolean;
  isHomePage: boolean;
  togglerRef: React.RefObject<HTMLButtonElement | null>;
}) => {
  const pathName = usePathname();

  return (
    <div className="flex items-center gap-4 justify-end w-full md:w-[70%] xl:w-auto">
      {/* {!user ? ( */}
      <Link href="/auth/login">
        <button
          className={`font-semibold transition-all duration-700 border px-[10px] py-[6px] sm:px-[20px] sm:py-[8px] text-[8px] sm:text-[12px] rounded ${
            !isScrolled && isHomePage
              ? "border-white text-white"
              : "border-black text-black"
          }`}
        >
          {pathName.startsWith("/ar") ? "تسجيل الدخول" : "Login"}
        </button>
      </Link>
      {/* ) : (
        <ProfileAndDashboardDropDown
          user={user}
          isScrolled={isScrolled}
          isHomePage={isHomePage}
        />
      )} */}
      <ResponsiveMenuHandlerButton
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        isScrolled={isScrolled}
        isHomePage={isHomePage}
        togglerRef={togglerRef}
      />
    </div>
  );
};

export default NavSideOptions;
