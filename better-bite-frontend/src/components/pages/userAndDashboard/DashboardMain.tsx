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
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10 mt-[80px] px-4">
      <PageToggle />

      <div className="w-full max-w-6xl mt-10 bg-white shadow-md rounded-2xl p-6 border border-lightGray">
        <h1 className="text-2xl font-semibold text-center text-primary mb-6">
          All orders
        </h1>

        {orders?.length === 0 ? (
          <p className="text-center text-error">No orders found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-gray-700">
              <thead>
                <tr className="bg-lightGray text-primary rounded-lg text-left">
                  <th className="p-3 font-semibold">Transaction ID</th>
                  <th className="p-3 font-semibold">Plan Type</th>
                  <th className="p-3 font-semibold">Meals per Day</th>
                  <th className="p-3 font-semibold">Days per Week</th>
                  <th className="p-3 font-semibold">Amount</th>
                  <th className="p-3 font-semibold">Start Date</th>
                  <th className="p-3 font-semibold">Expire Date</th>
                  <th className="p-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => {
                  const meals = order.packageInfo.mealPerDay[0]
                    ?.replace(/"/g, "")
                    .split(",")
                    .join(", ");
                  const days = order.packageInfo.daysOfWeek[0]
                    ?.replace(/"/g, "")
                    .split(",")
                    .join(", ");

                  const statusColor =
                    order.currentStatus === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : order.currentStatus === "PAUSED"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.currentStatus === "CANCELED"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-gray-700";

                  return (
                    <tr
                      key={order._id}
                      className={`border-b border-gray transition ${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="p-3 font-medium text-gray-800">
                        {order.transactionId}
                      </td>
                      <td className="p-3">{order.packageInfo.planType}</td>
                      <td className="p-3">{meals}</td>
                      <td className="p-3">{days}</td>
                      <td className="p-3 font-medium text-gray-900">
                        {order.amount} {order.currency}
                      </td>
                      <td className="p-3">
                        {new Date(order.startingDate).toLocaleDateString()}
                      </td>
                      <td className="p-3">
                        {new Date(order.expireDate).toLocaleDateString()}
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}
                        >
                          {order.currentStatus}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardMain;
