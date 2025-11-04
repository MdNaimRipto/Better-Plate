"use client";
import { useEffect, useRef, useState } from "react";
import NavLogo from "./NavLogo";
import NavMenuItems from "./NavMenuItems";
import NavSideOptions from "./navSideOptions/NavSideOptions";
import NavSideMenu from "./NavSideMenu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const togglerRef = useRef<HTMLButtonElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage =
    pathname === "/en" || pathname === "/ar" || pathname === "/";

  return (
    <div className={`absolute z-50 top-0 left-0 w-full`}>
      <div
        className={`h-[80px] container px-4 flex items-center justify-between`}
      >
        <div className="flex items-center gap-5">
          <NavLogo />
          <div className="hidden xl:block">
            <NavMenuItems
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              isScrolled={isScrolled}
              isHomePage={isHomePage}
            />
          </div>
        </div>
        <NavSideOptions
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          isScrolled={isScrolled}
          isHomePage={isHomePage}
          togglerRef={togglerRef}
        />
        <NavSideMenu
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          togglerRef={togglerRef}
        />
      </div>
    </div>
  );
};

export default Navbar;
