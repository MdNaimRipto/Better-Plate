"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionInfoValidation = void 0;
const zod_1 = require("zod");
const subscriptionInfo_constant_1 = require("./subscriptionInfo.constant");
const SubscriptionInfo = zod_1.z.object({
    body: zod_1.z.object({
        category: zod_1.z.enum([...subscriptionInfo_constant_1.SubscriptionIdEnums], {
            required_error: "Category is required",
        }),
        breakfast: zod_1.z.string({ required_error: "Breakfast is required" }),
        lunch: zod_1.z.string({ required_error: "Launch is required" }),
        dinner: zod_1.z.string({ required_error: "Dinner is required" }),
        snacks: zod_1.z.string({ required_error: "Snacks is required" }),
        weeklyPrice: zod_1.z.object({
            price: zod_1.z
                .number({ required_error: "Weekly Subscription Price is required" })
                .min(0),
            discount: zod_1.z
                .number({ required_error: "Discount is required" })
                .min(0)
                .max(100),
        }),
        monthlyPrice: zod_1.z.object({
            price: zod_1.z
                .number({ required_error: "Monthly Subscription Price is required" })
                .min(0),
            discount: zod_1.z
                .number({ required_error: "Discount is required" })
                .min(0)
                .max(100),
        }),
    }),
});
exports.SubscriptionInfoValidation = {
    SubscriptionInfo,
};
