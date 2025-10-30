import Image from "next/image";
import React from "react";
import logo from "@/assets/my-target-logo.png";
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
        src={logo}
        alt="Navbar-logo"
        // width={160}
        // height={160}
        priority
      />
    </Link>
  );
};

export default NavLogo;
