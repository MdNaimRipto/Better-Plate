import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/my-target-logo.png";
import Image from "next/image";
import { TfiWorld } from "react-icons/tfi";
import { usePathname, useRouter } from "next/navigation";
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
  const [languageToggler, setLanguageToggler] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const menuRef = useRef<HTMLUListElement>(null);

  const pathName = pathname;

  const toggleLanguage = ({ newLang }: { newLang: string }) => {
    // Extract the language part from the pathname
    const parts = pathname.split("/").filter(Boolean); // Remove empty strings
    const currentLang = parts[0]; // First part is the language

    // Construct new path with toggled language
    const newPath = [`/${newLang}`, ...parts.slice(1)].join("/");

    // Navigate to the new path
    router.push(newPath);
  };

  const menuItems = [
    {
      item: pathName.startsWith("/ar") ? "بيت" : "Home",
      path: pathName.startsWith("/ar") ? "/ar" : "/en",
      opacityDelay: ".4s",
    },
    {
      item: pathName.startsWith("/ar") ? "مدونة" : "Blog",
      path: pathName.startsWith("/ar") ? "/ar/blog" : "/en/blog",
      opacityDelay: ".7s",
    },
    {
      item: pathName.startsWith("/ar") ? "وجباتنا" : "Our Meals",
      path: pathName.startsWith("/ar") ? "/ar/menu" : "/en/menu",
      opacityDelay: ".5s",
    },
    {
      item: pathName.startsWith("/ar") ? "الخطط والحزم" : "Plans & Packages",
      path: pathName.startsWith("/ar")
        ? "/ar/plansAndPackages"
        : "/en/plansAndPackages",
      opacityDelay: ".6s",
    },
    // {
    //   item: pathName.startsWith("/ar") ? "المشاورات" : "Consultations",
    //   path: pathName.startsWith("/ar")
    //     ? "/ar/consultations"
    //     : "/en/consultations",
    //   opacityDelay: ".8s",
    // },
    {
      item: pathName.startsWith("/ar") ? "الشراكات" : "Partnerships",
      path: pathName.startsWith("/ar")
        ? "/ar/partnerships"
        : "/en/partnerships",
      opacityDelay: ".9s",
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
        <Link href="/" onClick={() => setIsNavOpen(false)}>
          <Image
            src={logo.src}
            width={200}
            height={200}
            className="w-[180px]"
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
      <div className="absolute bottom-8">
        <ul
          className={`bg-black text-white ${
            languageToggler
              ? "w-full h-full p-5"
              : "w-0 h-0 overflow-hidden p-0 opacity-0"
          } duration-500`}
        >
          <li
            onClick={() => toggleLanguage({ newLang: "en" })}
            className="cursor-pointer"
          >
            English
          </li>
          <li
            onClick={() => toggleLanguage({ newLang: "ar" })}
            className="cursor-pointer"
          >
            عربي
          </li>
        </ul>
        <button
          onClick={() => setLanguageToggler(!languageToggler)}
          className={`flex items-center justify-center gap-2 mt-3 ${
            isNavOpen ? `opacity-100 duration-700 mt-0` : "opacity-0 mt-3"
          }`}
          style={{
            transitionDelay: isNavOpen ? "1.1s" : "0s",
          }}
        >
          <TfiWorld />{" "}
          <span>{pathName.startsWith("/ar") ? "لغة" : "Language"}</span>
        </button>
      </div>
    </ul>
  );
};

export default NavSideMenu;
