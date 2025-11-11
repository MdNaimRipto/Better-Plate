"use client";
import { useGetUserOrdersQuery } from "@/redux/features/orderApis";
import PageToggle from "./PageToggle";
import { IOrder } from "@/types/orderTypes";
import Loader from "@/components/common/Loader";

const UserProfileMain = () => {
  const { data, isLoading } = useGetUserOrdersQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const orders = data?.data as IOrder[];

  console.log(orders);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10 mt-[80px]">
      {/* Top Tabs */}
      <PageToggle />
    </div>
  );
};

export default UserProfileMain;
