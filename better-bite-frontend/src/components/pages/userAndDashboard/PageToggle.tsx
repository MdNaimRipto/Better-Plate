"use client";

import { usePathname, useRouter } from "next/navigation";

const PageToggle = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isProfile = pathname === "/user";
  const isDashboard = pathname === "/dashboard";

  return (
    <div className="flex justify-center space-x-6 border-b border-gray-300 pb-2 mb-6">
      <button
        className={`text-lg font-medium pb-1 ${
          isProfile
            ? "border-b-2 border-blue-500 text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }`}
        onClick={() => router.push("/user")}
      >
        Profile
      </button>

      <button
        className={`text-lg font-medium pb-1 ${
          isDashboard
            ? "border-b-2 border-blue-500 text-blue-600"
            : "text-gray-600 hover:text-blue-500"
        }`}
        onClick={() => router.push("/dashboard")}
      >
        Dashboard
      </button>
    </div>
  );
};

export default PageToggle;
