"use client";
import Footer from "@/components/common/footer/Footer";
import Loader from "@/components/common/Loader";
import Navbar from "@/components/common/navbar/Navbar";
import { useUserContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useUserContext();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user || user === undefined) {
      console.log({ IsUser: true });
      router.push("/auth/login");
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoading(false);
    }
  }, [router, user]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default PrivateLayout;
