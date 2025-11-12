import Link from "next/link";
import React, { useEffect, useRef } from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMdClose as CloseMenuIcon } from "react-icons/io";

const NavSideMenu = ({
  isNavOpen,
  setIsNavOpen,
  togglerRef,
}: {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  togglerRef: React.RefObject<HTMLButtonElement | null>;
}) => {
  const pathname = usePathname();

  const menuRef = useRef<HTMLUListElement>(null);

  const menuItems = [
    {
      item: "Home",
      path: "/",
      opacityDelay: ".4s",
    },

    {
      item: "Plans & Packages",
      path: "/plansAndPackages",
      opacityDelay: ".5s",
    },
    {
      item: "Our Meals",
      path: "/our-meals",
      opacityDelay: ".6s",
    },
    {
      item: "About Us",
      path: "/about-us",
      opacityDelay: ".7s",
    },
    {
      item: "Blog",
      path: "/blog",
      opacityDelay: ".8s",
    },
  ];

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isNavOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        togglerRef.current &&
        !togglerRef.current.contains(event.target as Node)
      ) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen, setIsNavOpen, togglerRef]);

  return (
    <ul
      ref={menuRef}
      className={`bg-white flex flex-col items-start gap-1 absolute top-0 z-40 py-4 pl-5 lg:px-12 ${
        isNavOpen ? "left-0 w-full md:w-2/5 h-screen" : "-left-full w-0 h-0"
      } duration-700 ease-in-out shadow-lg`}
    >
      <div className="flex items-start justify-between w-full pr-5 mb-3">
        <div></div>
        <Link
          href="/"
          onClick={() => setIsNavOpen(false)}
          className="w-full h-[60px] overflow-hidden"
        >
          <Image
            src={logo.src}
            width={200}
            height={200}
            className="w-full h-full object-contain"
            alt="Logo"
            priority
          />
        </Link>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="text-black p-[0.3px] opacity-100 md:opacity-0"
        >
          <CloseMenuIcon className="text-xl" />
        </button>
        <div className="hidden lg:block"></div>
      </div>
      {menuItems.map((menu, i) => (
        <Link
          onClick={() => setIsNavOpen(false)}
          href={menu?.path ? menu.path : "/"}
          key={i}
          className={`block text-black text-sm h-[55px] duration-300`}
        >
          <li
            className={`titleFont font-medium whitespace-nowrap h-[40px] leading-[55px] ${
              pathname === menu?.path && "text-darkGreen font-semibold"
            } ${
              isNavOpen ? `opacity-100 duration-700 mt-0` : "opacity-0 mt-3"
            }`}
            style={{
              transitionDelay: isNavOpen ? menu.opacityDelay : "0s",
            }}
          >
            {menu?.item}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavSideMenu;
