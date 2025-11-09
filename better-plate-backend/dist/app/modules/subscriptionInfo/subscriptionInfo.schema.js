"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriptions = void 0;
const mongoose_1 = require("mongoose");
const subscriptionInfo_constant_1 = require("./subscriptionInfo.constant");
const subscriptionInfoSchema = new mongoose_1.Schema({
    category: { type: String, enum: subscriptionInfo_constant_1.SubscriptionIdEnums, required: true },
    breakfast: { type: mongoose_1.Schema.Types.ObjectId, ref: "Meals", required: true },
    lunch: { type: mongoose_1.Schema.Types.ObjectId, ref: "Meals", required: true },
    dinner: { type: mongoose_1.Schema.Types.ObjectId, ref: "Meals", required: true },
    snacks: { type: mongoose_1.Schema.Types.ObjectId, ref: "Meals", required: true },
    weeklyPrice: {
        price: { type: Number, required: true, min: 0 },
        discount: { type: Number, required: true, min: 0, max: 100 },
    },
    monthlyPrice: {
        price: { type: Number, required: true, min: 0 },
        discount: { type: Number, required: true, min: 0, max: 100 },
    },
});
exports.Subscriptions = (0, mongoose_1.model)("Subscriptions", subscriptionInfoSchema);
