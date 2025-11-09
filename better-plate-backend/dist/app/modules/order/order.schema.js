"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const mongoose_1 = require("mongoose");
const order_constant_1 = require("./order.constant");
const orderSchema = new mongoose_1.Schema({
    packageInfo: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "PlansAndPackages",
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
    cardDetails: {
        cardType: { type: String, required: true },
        cardCountry: { type: String, required: true },
        cardLast4: { type: String, required: true },
    },
    customer: {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
    },
    deliveryTime: { type: String, required: true },
}, {
    timestamps: true,
});
exports.Orders = (0, mongoose_1.model)("Orders", orderSchema);
