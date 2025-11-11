"use client";
import { useGetAllOrdersQuery } from "@/redux/features/orderApis";
import PageToggle from "./PageToggle";
import Loader from "@/components/common/Loader";
import { IOrder } from "@/types/orderTypes";

const DashboardMain = () => {
  const { data, isLoading } = useGetAllOrdersQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const orders = data?.data?.data as IOrder[];

  console.log(orders);
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10 mt-[80px]">
      {/* Top Tabs */}
      <PageToggle />
    </div>
  );
};

export default DashboardMain;
