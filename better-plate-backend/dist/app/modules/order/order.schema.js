"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const mongoose_1 = require("mongoose");
const order_constant_1 = require("./order.constant");
const orderSchema = new mongoose_1.Schema({
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
        enum: order_constant_1.CurrentStatusEnums,
        required: true,
        default: "PAUSED",
    },
    customer: {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
    },
}, {
    timestamps: true,
});
exports.Orders = (0, mongoose_1.model)("Orders", orderSchema);
