import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";
import { CurrentStatusEnums } from "./order.constant";

const orderSchema = new Schema<IOrder>(
  {
    packageInfo: {
      planType: { type: String, required: true },
      mealPerDay: [{ type: String, required: true }],
      daysOfWeek: [{ type: String, required: true }],
      totalDays: { type: Number, required: true },
    },
    startingDate: { type: Date, required: true },
    expireDate: { type: Date, required: true },
    transactionId: { type: String, required: true },
    amount: { type: String, required: true },
    currency: { type: String, required: true },
    paymentDate: { type: String, required: true },
    currentStatus: {
      type: String,
      enum: CurrentStatusEnums,
      required: true,
      default: "PAUSED",
    },
    customer: {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  },
);

export const Orders = model<IOrder>("Orders", orderSchema);
