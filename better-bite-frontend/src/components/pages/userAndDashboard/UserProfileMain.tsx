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

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10 mt-[80px] px-4">
      <PageToggle />

      <div className="w-full max-w-3xl mt-8 bg-white shadow-lg rounded-2xl p-6 border border-lightGray">
        <h1 className="text-2xl font-semibold text-center text-primary mb-6">
          Order Receipts
        </h1>

        {orders?.length === 0 && (
          <p className="text-center text-gray-500">No orders found.</p>
        )}

        <div className="space-y-6">
          {orders?.map((order) => (
            <div
              key={order._id}
              className="rounded-xl border border-lightGray shadow-sm p-5 hover:shadow-md transition"
            >
              {/* Header Section */}
              <div className="flex flex-col md:flex-row gap-2 justify-between items-center border-b border-gray pb-3 mb-3">
                <div>
                  <h2 className="text-xs md:text-lg font-medium text-gray">
                    Transaction #{order.transactionId}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Placed on {new Date(order.paymentDate).toLocaleDateString()}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm text-white font-medium ${
                    order.currentStatus === "ACTIVE"
                      ? "bg-success/80"
                      : order.currentStatus === "PAUSED"
                      ? "bg-secondary"
                      : order.currentStatus === "CANCELED"
                      ? "bg-error "
                      : "bg-gray"
                  }`}
                >
                  {order.currentStatus}
                </div>
              </div>

              {/* Customer Info */}
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">
                    Customer
                  </h3>
                  <p className="font-medium">{order.customer.fullName}</p>
                  <p className="text-sm">{order.customer.email}</p>
                  <p className="text-sm">{order.customer.phone || "N/A"}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-primary mb-1">
                    Address
                  </h3>
                  <p>{order.customer.address || "Not provided"}</p>
                </div>
              </div>

              {/* Package Info */}
              <div className="bg-gray-50 rounded-xl p-4 border border-lightGray">
                <h3 className="text-sm font-semibold text-primary mb-2">
                  Package Details
                </h3>
                <p className="text-gray-700 text-sm">
                  Plan Type:{" "}
                  <span className="font-medium">
                    {order.packageInfo.planType}
                  </span>
                </p>
                <p className="text-gray-700 text-sm mt-1">
                  Meals per Day:{" "}
                  <span className="font-medium">
                    {order.packageInfo.mealPerDay[0]
                      ?.replace(/"/g, "") // remove quotes
                      .split(",") // split by commas
                      .join(", ")}{" "}
                    {/* add spacing */}
                  </span>
                </p>
                <p className="text-gray-700 text-sm mt-1">
                  Days per Week:{" "}
                  <span className="font-medium">
                    {order.packageInfo.daysOfWeek[0]
                      ?.replace(/"/g, "")
                      .split(",")
                      .join(", ")}
                  </span>
                </p>
                <p className="text-gray-700 text-sm">
                  Total Days:{" "}
                  <span className="font-medium">
                    {order.packageInfo.totalDays}
                  </span>
                </p>
              </div>

              {/* Dates & Payment */}
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="text-sm">
                  <p className="text-gray-500">Start Date</p>
                  <p className="font-medium text-gray">
                    {new Date(order.startingDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-500">Expire Date</p>
                  <p className="font-medium text-gray">
                    {new Date(order.expireDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Amount Section */}
              <div className="mt-4 flex justify-between items-center border-t border-gray pt-3">
                <p className="text-sm">Paid via Stripe</p>
                <p className="text-lg font-semibold text-success">
                  {order.amount} {order.currency}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileMain;
