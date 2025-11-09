"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansAndPackages = void 0;
const mongoose_1 = require("mongoose");
const plansAndPackages_constant_1 = require("./plansAndPackages.constant");
const plansSchema = new mongoose_1.Schema({
    name: { type: String, required: true, enum: plansAndPackages_constant_1.PackageNameEnums },
    category: { type: String, required: true, enum: plansAndPackages_constant_1.PlanCategoryEnums },
    packageType: { type: String, required: true, enum: plansAndPackages_constant_1.PackageTypeEnums },
    calory: {
        minCalory: { type: Number, required: true },
        maxCalory: { type: Number, required: true },
    },
    carbs: { type: Number, required: true },
    protein: { type: Number, required: true },
    totalDays: { type: Number, required: true },
    pauseOption: { type: String, required: true, enum: plansAndPackages_constant_1.PauseOptionEnums },
    includes: {
        snacks: { type: Boolean, required: true },
        juice: { type: Boolean, required: true },
    },
    price: {
        raw: { type: Number, required: true },
        tax: { type: Number, required: true },
        deliveryCharge: { type: Number, required: true },
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.PlansAndPackages = (0, mongoose_1.model)("PlansAndPackages", plansSchema);
