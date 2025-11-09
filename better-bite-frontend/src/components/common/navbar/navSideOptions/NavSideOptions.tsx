import React, { useState } from "react";
import ResponsiveMenuHandlerButton from "./ResponsiveMenuHandlerButton";
import Link from "next/link";
import { useUserContext } from "@/context/AuthContext";
import { userApis } from "@/redux/features/userApis";
import { postApiHandler } from "@/lib/postApiHandler";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";

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
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useUserContext();

  const [logout] = userApis.useLogoutMutation();
  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleLogout = async () => {
    const option = {};
    const optionalTask = () => {
      router.push("/");
      dispatch(userApis.util.resetApiState());
    };
    await postApiHandler({
      mutateFn: logout,
      options: option,
      setIsLoading: setIsLoading,
      optionalTasksFn: optionalTask,
    });
  };

  return (
    <div className="flex items-center gap-4 justify-end w-full md:w-[70%] xl:w-auto">
      {!user ? (
        <Link href="/auth/login">
          <button
            className={`font-semibold transition-all duration-700 border px-[10px] py-[6px] sm:px-[20px] sm:py-[8px] text-[8px] sm:text-[12px] rounded ${
              !isScrolled && isHomePage
                ? "border-white text-white"
                : "border-black text-black"
            }`}
          >
            Login
          </button>
        </Link>
      ) : (
        <>
          <button
            onClick={handleLogout}
            className={`font-semibold transition-all duration-700 border px-[10px] py-[6px] sm:px-[20px] sm:py-[8px] text-[8px] sm:text-[12px] rounded ${
              !isScrolled && isHomePage
                ? "border-white text-white"
                : "border-black text-black"
            }`}
          >
            {isLoading ? "Loading..." : "Logout"}
          </button>
        </>
      )}
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
