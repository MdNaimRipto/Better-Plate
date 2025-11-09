"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meals = void 0;
const mongoose_1 = require("mongoose");
// import { MealsDietPlanEnums, MealsTypeEnums } from "./meals.constant";
const mealsSchema = new mongoose_1.Schema({
    // type: { type: String, enum: MealsTypeEnums, required: true },
    // dietPlan: { type: String, enum: MealsDietPlanEnums, required: true },
    title: {
        en: { type: String, required: true },
        ar: { type: String, required: true },
    },
    image: { type: String, required: true },
    description: {
        en: { type: String, required: true, default: "Not updated yet!" },
        ar: { type: String, required: true, default: "!لم يتم التحديث بعد" },
    },
    calory: { type: Number, required: true },
    protein: { type: Number, required: true },
    craps: { type: Number, required: true },
    fat: { type: Number, required: true },
    quantity: { type: Number, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Meals = (0, mongoose_1.model)("Meals", mealsSchema);
