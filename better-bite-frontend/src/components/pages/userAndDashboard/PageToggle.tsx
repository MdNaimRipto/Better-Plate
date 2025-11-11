"use client";

import { usePathname, useRouter } from "next/navigation";

const PageToggle = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isProfile = pathname === "/user";
  const isDashboard = pathname === "/dashboard";

  return (
    <div className="flex justify-center space-x-6 border-b border-lightGray pb-2 mb-6 container">
      <button
        className={`text-lg font-medium pb-1 ${
          isProfile
            ? "border-b-2 border-primary text-primary"
            : " hover:text-secondary"
        }`}
        onClick={() => router.push("/user")}
      >
        My Orders
      </button>

      <button
        className={`text-lg font-medium pb-1 ${
          isDashboard
            ? "border-b-2 border-primary text-primary"
            : "text-gray-600 hover:text-secondary"
        }`}
        onClick={() => router.push("/dashboard")}
      >
        Dashboard
      </button>
    </div>
  );
};

export default PageToggle;
