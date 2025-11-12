import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenuItems = ({
  isNavOpen,
  setIsNavOpen,
  isScrolled,
  isHomePage,
}: {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isScrolled: boolean;
  isHomePage: boolean;
}) => {
  const pathName = usePathname();

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

  return (
    <ul
      className={`bg-white xl:bg-[#00000000] flex flex-col xl:flex-row items-start xl:items-center gap-1 xl:gap-7 absolute top-0 z-40 py-4 xl:py-0 pl-5 xl:pl-0 xl:static ${
        isNavOpen
          ? "left-0 w-full md:w-2/5 xl:w-full h-screen xl:h-[80px]"
          : "-left-[1000px] w-0 h-0 xl:h-[80px] xl:w-full"
      } duration-700 ease-in-out`}
    >
      {menuItems.map((menu, i) => (
        <Link
          onClick={() => setIsNavOpen(false)}
          href={menu?.path ? menu.path : "/"}
          key={i}
          className={`block ${
            !isScrolled && isHomePage
              ? "text-black xl:text-white"
              : "text-black xl:text-black"
          } text-base xl:text-sm h-[55px] xl:h-full duration-300`}
        >
          <li
            className={`titleFont font-medium whitespace-nowrap h-[40px] leading-[55px] xl:h-[50px] xl:leading-[80px] ${
              pathName === menu?.path && "text-primary"
            } ${
              isNavOpen
                ? `opacity-100 duration-700 mt-0`
                : "opacity-0 xl:opacity-100 mt-3 xl:mt-0"
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

export default NavMenuItems;
