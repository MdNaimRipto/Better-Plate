"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealsReview = void 0;
const mongoose_1 = require("mongoose");
const mealsReviewSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    mealId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Meals", required: true },
    title: { type: String, required: true },
    reviewDescription: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
});
exports.MealsReview = (0, mongoose_1.model)("MealsReview", mealsReviewSchema);
