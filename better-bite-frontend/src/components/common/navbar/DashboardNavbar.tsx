"use client";
import { useState } from "react";
import Link from "next/link";
import { MdArticle, MdOutlineRestaurantMenu } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";

const DashboardNavbar = () => {
  const [active, setActive] = useState("Dashboard");

  const navItems = [
    {
      name: "User",
      icon: <FaUserCheck size={20} />,
      href: "/dashboard/user",
    },
    {
      name: "Meals",
      icon: <MdOutlineRestaurantMenu size={20} />,
      href: "/dashboard/meals",
    },
    {
      name: "Blog",
      icon: <MdArticle size={20} />,
      href: "/dashboard/blog",
    },
  ];
  return (
    <aside className="h-screen w-64 bg-primary/10 text-white flex flex-col justify-between p-4">
      <div>
        <h1 className="text-xl text-primary text-center font-semibold tracking-wide mb-4">
          Dashboard
        </h1>

        {/* Nav Items */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all 
              ${
                active === item.name
                  ? "bg-primary text-white shadow-md"
                  : "text-gray hover:bg-black/40 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer Section */}
      <Link
        href={"/"}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray hover:text-white hover:bg-black/40 transition-all"
      >
        <IoIosHome size={20} />
        <span>Home</span>
      </Link>
    </aside>
  );
};

export default DashboardNavbar;
