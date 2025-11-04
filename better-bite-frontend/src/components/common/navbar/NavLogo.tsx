import Image from "next/image";
import logoBlack from "@/assets/logo.svg";
import logoWhite from "@/assets/logo-white.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLogo = () => {
  const pathname = usePathname();

  const pathName = pathname;

  return (
    <Link
      href={pathName.startsWith("/ar") ? "/ar" : "/en"}
      className="w-[60%] md:w-[50%] xl:w-[20%] lg:mb-2"
    >
      <Image
        className=""
        src={
          pathName === "/ar" || pathName === "/en" || pathName === "/"
            ? logoWhite
            : logoBlack
        }
        alt="Navbar-logo"
        // width={160}
        // height={160}
        priority
      />
    </Link>
  );
};

export default NavLogo;
